import request from '@/utils/request'
//可以参数传token,或者请求头传token,请求头已经配置了,为 X-Token
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
export function getUsers() {
  return request({
    url: '/user/getUsers',
    method: 'get',
    data
  })
}
export function add() {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}
export function getUserInfoById(id) {
  return request({
    url: '/user/getUserInfoById',
    method: 'get',
    data
  })
}
export function updateUser(id) {
  return request({
    url: '/user/updateUser',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
