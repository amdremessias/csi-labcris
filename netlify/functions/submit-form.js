const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  const dataPath = path.join("/tmp", "cadastros.json");
  let cadastros = [];

  if (fs.existsSync(dataPath)) {
    cadastros = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  }

  const novoCadastro = JSON.parse(event.body);
  cadastros.push(novoCadastro);

  fs.writeFileSync(dataPath, JSON.stringify(cadastros));

  return { statusCode: 200, body: JSON.stringify({ message: "Cadastro salvo!" }) };
};
