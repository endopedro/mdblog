import { connectToDatabase } from '../../utils/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { metrics } = req.query

    const client = await connectToDatabase()
    const db = client.db()

    if (metrics) {
      const users = await db.collection('users').find().count()

      res.status(200).json({
        result: {
          users: users,
        },
      })

      client.close()
      return
    }

    const settings = await db.collection('settings').find().toArray()

    res.status(200).json({
      result: {
        logo: _.find(settings, ['type', 'logo']),
        title: _.find(settings, ['type', 'info'])?.title,
        description: _.find(settings, ['type', 'info'])?.description,
      },
    })

    client.close()
  }
}

export default handler
