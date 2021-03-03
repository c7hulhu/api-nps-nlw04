import { app } from "./app";
// /**
//  * GET => BUSCA
//  * POST => SALVAR
//  * PUT => ALTERAR
//  * DELETE => DELETAR
//  * PATCH => ALTERAÇÃO ESPECIFICA
//  */

// app.get("/", (request,response) => {
//     return response.json( {message: "Hello World - NLW04"});
// });

// // 1º parametro => Rota(Recurso API)
// // 2º parametro => request,response

// app.post("/", (request, response) => {
//     // Recebeu os dados para salvar
//     return response.json({message: "Os dados foram salvos com sucesso!"});
// })

app.listen(3333, () => console.log("Server is running!"));
