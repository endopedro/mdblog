import axios from 'axios'
import qs from 'qs'

axios.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { arrayFormat: 'brackets' })

const api = axios.create({
  baseURL: process.env.BLOG_API,
})

const appApi = () => ({
  getPost: (slug) => api.get('/posts', { params: { slug: slug } }),
  getPosts: (page) => api.get('/posts', { params: { page: page } }),
  getRelatedPosts: (id) => api.get('/posts', { params: { related: id } }),
  getSettings: (id) => api.get('/settings'),
})

export { appApi }

export default api
