import { connectToDatabase } from '../../utils/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { slug, page } = req.query
    const client = await connectToDatabase()
    const db = client.db()

    if (!slug) {
      const pages = await db.collection('pages').find()
      if (page) {
        res.status(200).json({
          result: await pages
            .skip(10 * (page - 1))
            .limit(10)
            .toArray(),
          total: await pages.count(),
          pages: Math.ceil((await pages.count()) / 10),
        })
      } else {
        res.status(200).json({ result: await pages.toArray() })
      }
    } else {
      const pageObj = await db.collection('pages').findOne({ slug: slug })

      if (!pageObj) {
        res.status(404).json({ message: 'Post not found.' })
        client.close()
        return
      }

      res.status(200).json({ result: pageObj })
    }

    client.close()
  }
}

export default handler
