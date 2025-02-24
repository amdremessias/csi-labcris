const fetch = require("node-fetch");

exports.handler = async () => {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_NAME = "Cadastros"; // Nome da tabela no Airtable

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
    });

    if (!response.ok) throw new Error("Erro ao acessar Airtable");

    const { records } = await response.json();
    const data = records.map(record => ({
      name: record.fields.name,
      email: record.fields.email,
      phone: record.fields.phone,
      city: record.fields.city
    }));

    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
