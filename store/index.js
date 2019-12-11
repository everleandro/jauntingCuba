export const state = () => ({
  emailProvider: {
    service: 'gmail',
    username: 'jauntingcuba@gmail.com',
    password: 'Future2020'
  }
})

export const actions = {
  async sendEmail({ state, commit }, payload) {
    const emailInfo = payload
    const emailProvider = state.emailProvider
    if (emailProvider.username !== '' && emailProvider.password !== '') {
      try {
        return await this.$axios
          .post('/api/nodemailer', {
            emailInfo,
            emailProvider
          })
          .then((res) => {
            if (res.data.message === 'success')
              return {
                color: 'info',
                message: 'you mail has been send'
              }
            else
              return {
                color: 'error',
                message: 'Ups! something wos wrong! check your connection'
              }
          })
      } catch (e) {
        return {
          color: 'error',
          message: e.message
        }
      }
    } else {
      return {
        color: 'error',
        message: 'email or username provider is not valid'
      }
    }
  }
}
