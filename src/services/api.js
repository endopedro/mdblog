import axios from 'axios'
import qs from 'qs'

axios.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { arrayFormat: 'brackets' })

const api = axios.create({
  baseURL: process.env.BLOG_API,
})

const appApi = () => ({
  getPost: (slug) => api.get('/posts', { params: { slug: slug } }),
  getPosts: (props) =>
    api.get('/posts', {
      params: {
        page: props?.page,
        author: props?.author,
        category: props?.category,
        search: props?.search,
      },
    }),
  getRelatedPosts: (id) => api.get('/posts', { params: { related: id } }),
  getSettings: (id) => api.get('/settings'),
  getPage: (slug) => api.get('/pages', { params: { slug: slug } }),
  getPages: () => api.get('/pages'),
  getMainUser: () => api.get('/users', { params: { main_user: true } }),
  getAuthors: () => api.get('/users'),
  getAuthor: (username) =>
    api.get('/users', { params: { username: username } }),
})

export { appApi }

export default api
