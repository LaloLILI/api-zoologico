import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const port: number = 6899;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Tucano', 90,'Macho',1000);
    let reptil: Reptil = new Reptil('Calango', 250,'Macho','Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro',102,'Cicloides');
    res.json('ave');
})

server.post('/habitat', (req, rest) =>{
    const {nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    rest.status(200).json('Habitat Criado');
})

server.post('/atracao', (req, rest) =>{
    const {nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    rest.status(200).json('Atração criada');
})

server.post('/zoologico', (req, rest) =>{
    const {nome, atracao } = req.body;
    const zoo = new Atracao(nome, atracao);
    console.log(zoo);
    rest.status(200).json('Zoologico criado');
})

server.post('/ave' , (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é: ", ave]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})