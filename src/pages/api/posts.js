import { appApi } from '../../services/api'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { related } = req.query

    if (related) {
      const relatedPosts = await appApi()
        .getRelatedPosts(related)
        .then(({ data }) => data)
        .catch(() => null)

      if (relatedPosts) res.status(200).json(relatedPosts)
      else res.status(401).send()
    }
  }
}

export default handler
