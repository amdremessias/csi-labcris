const fetch = require("node-fetch");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  const data = JSON.parse(event.body);
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_NAME = "FormResponses";

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`;
  const headers = {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    "Content-Type": "application/json",
  };

  const record = {
    fields: {
      Nome: data.name,
      Email: data.email,
      Telefone: data.phone,
      Cidade: data.city,
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ records: [record] }),
    });

    if (response.ok) {
      return { statusCode: 200, body: JSON.stringify({ message: "Cadastro salvo no Airtable!" }) };
    } else {
      throw new Error("Erro ao salvar no Airtable");
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
