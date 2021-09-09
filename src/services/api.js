import axios from 'axios'
import qs from 'qs'

axios.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { arrayFormat: 'brackets' })

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SITE_URL}/api`,
})

const appApi = () => ({
  getPost: (slug) => api.get('/posts', { params: { slug: slug } }),
  getPosts: () => api.get('/posts'),
  getCategory: (id) => api.get('/categories', { params: { _id: id } }),
  getCategories: () => api.get('/categories'),
  getPage: (slug) => api.get('/pages', { params: { slug: slug } }),
  getPages: () => api.get('/pages'),
  getSettings: () => api.get('/settings'),
  getMetrics: () => api.get('/settings', { params: { metrics: true } }),
  getUsers: () => api.get('/users'),
  getUser: (id) => api.get('/users', { params: { _id: id } }),
})

export { appApi }

export default api
