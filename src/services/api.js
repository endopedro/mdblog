import axios from 'axios'
import qs from 'qs'

axios.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { arrayFormat: 'brackets' })

const api = axios.create({
  baseURL: process.env.BLOG_API,
})

const selfApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SITE_URL}/api`,
})

const appApi = () => ({
  getPost: (slug) => api.get('/posts', { params: { slug: slug } }),
  getPosts: () => api.get('/posts'),
  getRelatedPosts: (id) => api.get('/posts', { params: { related: id } }),
  getRelated: (id) => selfApi.get('/posts', { params: { related: id } }),
})

export { appApi }

export default api
