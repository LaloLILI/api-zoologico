// Importa a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";

// Define a classe Ave que estende a classe Animal
export class Ave extends Animal {
    // Declaração de uma variável privada para a envergadura da ave
    private envergadura: number;

    // Define um construtor que recebe o nome, idade, gênero e envergadura da ave
    constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
        // Chama o construtor da classe Animal com os parâmetros recebidos
        super(_nome, _idade, _genero);
        // Atribui o valor do parâmetro _envergadura à variável privada envergadura da classe Ave
        this.envergadura = _envergadura;
    }

    /**
     * Define a envergadura da ave.
     * @param envergadura - A envergadura da ave a ser definida.
     */
    public setEnvergadura(envergadura: number): void {
        // Define a envergadura da ave como o valor passado como argumento para o método setEnvergadura
        this.envergadura = envergadura;
    }

    /**
     * Retorna a envergadura da ave.
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        // Retorna a envergadura da ave
        return this.envergadura;
    }
}
