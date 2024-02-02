import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';

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

server.post('/ave' , (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é: ", ave]);
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})