import { connectToDatabase } from '../../utils/db'
import { ObjectID } from 'mongodb'
import { extractUser } from '../../utils/auth'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { _id, page } = req.query
    const client = await connectToDatabase()
    const db = client.db()

    if (!_id) {
      const users = await db.collection('users').find()
      if (page) {
        res.status(200).json({
          result: await users
            .skip(10 * (page - 1))
            .limit(10)
            .toArray(),
          total: await users.count(),
          pages: Math.ceil((await users.count()) / 10),
        })
      } else {
        res.status(200).json({
          result: await (
            await users.toArray()
          ).map((user) => extractUser(user)),
        })
      }
    } else {
      const user = await db
        .collection('users')
        .findOne({ _id: new ObjectID(_id) })

      if (!user) {
        res.status(404).json({ message: 'User not found.' })
        client.close()
        return
      }

      res.status(200).json({ result: extractUser(user) })
    }

    client.close()
  }
}

export default handler
