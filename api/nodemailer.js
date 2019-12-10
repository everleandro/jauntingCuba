'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/', function(req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = req.body.emailProvider
  sendMail(emailInfo, emailProvider, res)
})
module.exports = {
  path: '/api/nodemailer',
  handler: app
}
const sendMail = (emailInfo, emailProvider, response) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailProvider.username,
      pass: emailProvider.password
    }
  })
  transporter.sendMail(
    {
      from: 'JauntingCuba',
      to: 'jauntingcuba@gmail.com',
      name: `Message from ${emailInfo.name}`,
      html: `${emailInfo.message}`
    },
    function(err) {
      if (err) response.status(200).json({ message: 'error' })
      else response.status(200).json({ message: 'success' })
    }
  )
}
