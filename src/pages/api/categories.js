import { connectToDatabase } from '../../utils/db'
import { ObjectID } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { _id, page } = req.query
    const client = await connectToDatabase()
    const db = client.db()

    if (!_id) {
      const categories = await db.collection('categories').find()
      if (page) {
        res.status(200).json({
          result: await categories
            .skip(10 * (page - 1))
            .limit(10)
            .toArray(),
          total: await categories.count(),
          pages: Math.ceil((await categories.count()) / 10),
        })
      } else {
        res.status(200).json({ result: await categories.toArray() })
      }
    } else {
      const category = await db
        .collection('categories')
        .findOne({ _id: new ObjectID(_id) })

      if (!category) {
        res.status(404).json({ message: 'Category not found.' })
        client.close()
        return
      }

      res.status(200).json({ result: category })
    }

    client.close()
  }
}

export default handler
