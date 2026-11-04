import swaggerJSDoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
definition: {
 openapi: "3.1.0",
 info: {
 title: "Treina MAIS ",
 version: "0.1.0",
 description: "Documentação da API do Treina MAIS",
 },
 servers: [
 {
 url: "http://localhost:3000",
 description: "Servidor Local",
 },
 ],
},
apis: [
 "./src/users/users.routes.ts",
 "./src/users/users.controller.ts"
],
};
export const swaggerSpec = swaggerJSDoc(swaggerOptions);