// import * as axios from 'axios'
//
// const options = {}
// // The server-side needs a full url to work
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || '0.0.0.0'}:${process.env
//     .PORT || 8000}`
// }
//
// export default axios.create(options)
export default function({ $axios, redirect }) {
  $axios.onRequest(() => {
    console.log($axios.defaults.baseURL)
  })
  if (process.server) {
    $axios.defaults.baseURL = `http://${process.env.HOST || '0.0.0.0'}:${process
      .env.PORT || 3000}`
  }
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
