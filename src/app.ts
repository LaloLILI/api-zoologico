// Importa o pacote 'express' para criar o servidor HTTP
import express from 'express';
// Importa o pacote 'cors' para lidar com requisições de diferentes origens
import cors from 'cors';
// Importa as classes do modelo de dados
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

// Define a porta do servidor
const port: number = 6899;

// Cria uma instância do servidor express
const server = express();

// Middleware para permitir o uso do formato JSON nas requisições
server.use(express.json());
// Middleware para lidar com requisições de diferentes origens (Cross-Origin Resource Sharing)
server.use(cors());

// Rota principal, retorna uma mensagem de boas-vindas
server.get('/', (req, res) => {
    // Cria instâncias de diferentes tipos de animais
    let ave: Ave = new Ave('Tucano', 90, 'Macho', 1000);
    let reptil: Reptil = new Reptil('Calango', 250, 'Macho', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Cicloides');
    // Retorna uma resposta JSON com uma mensagem
    res.json('ave');
})

// Rota para criar um novo habitat
server.post('/habitat', (req, rest) => {
    // Extrai dados do corpo da requisição
    const { nome, animais } = req.body;
    // Cria uma nova instância de Habitat com os dados fornecidos
    const habitat = new Habitat(nome, animais);
    // Exibe o habitat criado no console
    console.log(habitat);
    // Retorna uma resposta com status 200 e uma mensagem JSON
    rest.status(200).json('Habitat Criado');
})

// Rota para criar uma nova atração
server.post('/atracao', (req, rest) => {
    // Extrai dados do corpo da requisição
    const { nome, habitat } = req.body;
    // Cria uma nova instância de Atracao com os dados fornecidos
    const atracao = new Atracao(nome, habitat);
    // Exibe a atração criada no console
    console.log(atracao);
    // Retorna uma resposta com status 200 e uma mensagem JSON
    rest.status(200).json('Atração criada');
})

// Rota para criar um novo zoológico
server.post('/zoologico', (req, rest) => {
    // Extrai dados do corpo da requisição
    const { nome, atracao } = req.body;
    // Cria uma nova instância de Zoologico com os dados fornecidos
    const zoo = new Atracao(nome, atracao);
    // Exibe o zoológico criado no console
    console.log(zoo);
    // Retorna uma resposta com status 200 e uma mensagem JSON
    rest.status(200).json('Zoologico criado');
})

// Rota para adicionar uma nova ave
server.post('/ave', (req, res) => {
    // Extrai dados do corpo da requisição
    const { nome, idade, genero, envergadura } = req.body;
    // Cria uma nova instância de Ave com os dados fornecidos
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    // Retorna uma resposta JSON com a nova ave criada
    res.json(["A nova ave do zoológico é: ", ave]);
})

// Inicia o servidor na porta especificada
server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})
