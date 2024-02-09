// Importa a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";
// Importa a classe Habitat do arquivo "Habitat"
import { Habitat } from "./Habitat";

// Define a classe Atracao
export class Atracao {
    // Declaração de variáveis privadas para o nome da atração e uma lista de habitats
    private nome: string;
    private lista_de_habitat: Array<Habitat>;

    // Define um construtor que recebe o nome da atração e uma lista de habitats, atribuindo-os às variáveis correspondentes
    constructor(_nome: string, _lista_de_habitat: Array<Habitat>) {
        // Atribui o valor do parâmetro _nome à variável privada nome da classe Atracao
        this.nome = _nome;
        // Atribui o valor do parâmetro _lista_de_habitat à variável privada lista_de_habitat da classe Atracao
        this.lista_de_habitat = _lista_de_habitat;
    }

    /**
     * Retorna o nome da atração
     * @returns o nome do habitat
     */
    public getNome(): string {
        // Retorna o nome da atração
        return this.nome;
    }

    /**
     * Define o nome da atração
     * @param nome - O nome a ser atribuído à atração
     */
    public setNome(nome: string): void {
        // Define o nome da atração como o valor passado como argumento para o método setNome
        this.nome = nome;
    }

    /**
     * Retorna a lista de habitats da atração
     * @returns A lista de habitats da atração
     */
    public getListaHabitat(): Array<Habitat> {
        // Retorna a lista de habitats da atração
        return this.lista_de_habitat;
    }

    /**
     * Define a lista de habitats da atração
     * @param lista_de_habitat - A lista de habitats a ser atribuída à atração
     */
    public setListaHabitat(lista_de_habitat: Array<Habitat>): void {
        // Define a lista de habitats da atração como o valor passado como argumento para o método setListaHabitat
        this.lista_de_habitat = lista_de_habitat;
    }
}
