/**
 * GET      => Busca de uma informação  
 * POST     => Inserir (Criar) uma informação
 * PUT      => ALterar uma informação
 * DELETE   => Excluir um Dado 
 * PATCH    => Alterar uma informação espeficica
 */


/***
 *                       Tipos de paramentros 
 * 
 * Routes params    => http://localhost:3000/produtos/78945685212385
 *      >> Paramentros obrigatorios.
 * 
 * Query params     => http://localhost:3000/produtos?name=teclado&marca=logitec
 *      >> Paramentros não obrigatorios.
 *      >> Não é explicito na propria rota.
 *           
 * Body params      => {
 *      "Name": "Teclado",
 *      "Marca": "Logitec"
 * }
 *      >> Paramentros contidos no corpo da requisisão.
 *      >> Utilizados em metodos PUT, POST e PATCH
 * 
 */


/***
 *                         Banco de Dados
 * 
 * Utilizando drive do banco de dados...
 * Mais baixo Nivel
 * Conhecimento basico de SQL
 * Maior trabalho ao migrar o banco de dados da aplicação 
 * 
 * 
 * Query Builder 
 * * Knexjs, 
 * 
 * ORM
 * Framworks que ajuda no mapeamento da entidade e objeto. 
 * 
 * 
 */

app.get("/test", (request, response) => {
    //Request  => Entrando
    //Response => Saindo
    
    return response.send("Olá NLW");
});

app.post("/test-post",(request, response)=>{
    return response.send("Olá NLW Metodo post");
    
});

// http://localhost:3000


/**
 * 
 * 
 */