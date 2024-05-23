const { Client } = require('pg');

module.exports = async (req, res) => {
  const client = new Client({
    connectionString: "postgres://default:hT3vmuRcxY6k@ep-tight-bird-a4mjzw55.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();

  const { valores, media, variancia, desvioPadrao } = req.body;


  const query = {
    text: 'INSERT INTO historico(valores, media, variancia, desvio_padrao) VALUES($1, $2, $3, $4)',
    values: [valores, media, variancia, desvioPadrao],
  };

  await client.query(query)

  res.json({ status: 'success' })

  client.end()

};
