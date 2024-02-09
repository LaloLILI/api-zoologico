// Importa a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";

// Define a classe Mamifero que estende a classe Animal
export class Mamifero extends Animal {
    // Declaração de uma variável privada para a raça do mamífero
    private raca: string;

    // Define um construtor que recebe a raça, nome, idade e gênero do mamífero
    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        // Chama o construtor da classe Animal com os parâmetros recebidos
        super(_nome, _idade, _genero);
        // Atribui o valor do parâmetro _raca à variável privada raca da classe Mamifero
        this.raca = _raca;
    }

    /**
     * Define a raça do mamífero.
     * @param raca - A raça do mamífero a ser definida.
     */
    public setRaca(_raca: string): void {
        // Define a raça do mamífero como o valor passado como argumento para o método setRaca
        this.raca = _raca;
    }

    /**
     * Retorna a raça do mamífero.
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        // Retorna a raça do mamífero
        return this.raca;
    }
}
