import axios from 'axios'


export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });
  // instance.interceptors.request.use(value => {
  //   return value
  // }, reason => {
  //   return reason
  // })
  instance.interceptors.response.use(value => {
    return value.data.data
  })
  return instance(config)
}