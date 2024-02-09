// Importa a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";

// Define a classe Reptil que estende a classe Animal
export class Reptil extends Animal {
    // Declaração de uma variável privada para o tipo de escama do réptil
    private tipo_de_escama: string;

    // Define um construtor que recebe o nome, idade, gênero e tipo de escama do réptil
    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escama: string) {
        // Chama o construtor da classe Animal com os parâmetros recebidos
        super(_nome, _idade, _genero);
        // Atribui o valor do parâmetro _tipo_de_escama à variável privada tipo_de_escama da classe Reptil
        this.tipo_de_escama = _tipo_de_escama;
    }

    /**
     * Define o tipo de escama do réptil.
     * @param tipo_de_escama - O tipo de escama do réptil a ser definido.
     */
    public setTipo_de_escama(tipo_de_escama: string): void {
        // Define o tipo de escama do réptil como o valor passado como argumento para o método setTipo_de_escama
        this.tipo_de_escama = tipo_de_escama;
    }

    /**
     * Retorna o tipo de escama do réptil.
     * @returns O tipo de escama do réptil.
     */
    public getTipo_de_escama(): string {
        // Retorna o tipo de escama do réptil
        return this.tipo_de_escama;
    }
}

