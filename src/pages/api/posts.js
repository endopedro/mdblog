import { connectToDatabase } from '../../utils/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { slug, page } = req.query
    const client = await connectToDatabase()
    const db = client.db()

    if (!slug) {
      const posts = await db.collection('posts').aggregate([
        {
          $lookup: {
            from: 'users',
            localField: 'authorId',
            foreignField: '_id',
            as: 'author',
          },
        },
        {
          $lookup: {
            from: 'images',
            localField: 'coverId',
            foreignField: '_id',
            as: 'cover',
          },
        },
        { $unwind: { path: '$author', preserveNullAndEmptyArrays: true } },
        { $unwind: { path: '$cover', preserveNullAndEmptyArrays: true } },
      ])
      if (page) {
        res.status(200).json({
          result: await posts
            .skip(10 * (page - 1))
            .limit(10)
            .toArray(),
          total: await posts.count(),
          pages: Math.ceil((await posts.count()) / 10),
        })
      } else {
        res.status(200).json({ result: await posts.toArray() })
      }
    } else {
      const post = await db.collection('posts').findOne({ slug: slug })

      if (!post) {
        res.status(404).json({ message: 'Post not found.' })
        client.close()
        return
      }

      res.status(200).json({ result: post })
    }

    client.close()
  }
}

export default handler
