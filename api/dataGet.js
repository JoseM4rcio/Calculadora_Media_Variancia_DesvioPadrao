const { Client } = require('pg')

module.exports = async (req, res) => {
  const client = new Client({
    connectionString: "postgres://default:hT3vmuRcxY6k@ep-tight-bird-a4mjzw55.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: {
      rejectUnauthorized: false
    }
  })

  client.connect()

  const result = await client.query('SELECT * FROM historico')
  const results = { 'results': (result) ? result.rows : null}

  res.json(results)

  client.end()
}
