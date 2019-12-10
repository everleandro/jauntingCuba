const options = {}
// The server-side needs a full url to work
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env
    .PORT || 3000}`
}

export default function({ $axios }) {
  $axios.interceptors.request.use(
    (config) => {
      config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env
        .PORT || 3000}`
      return config
    },
    (error) => Promise.reject(error)
  )
}
