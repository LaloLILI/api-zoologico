
// Importa a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";

// Define a classe Habitat
export class Habitat {
    // Declaração de variáveis privadas para o nome do habitat e uma lista de animais
    private nome: string;
    private lista_de_animais: Array<Animal>;

    // Define um construtor que recebe o nome do habitat e uma lista de animais, atribuindo-os às variáveis correspondentes
    constructor(_nome: string, _lista_de_animais: Array<Animal>) {
        // Atribui o valor do parâmetro _nome à variável privada nome da classe Habitat
        this.nome = _nome;
        // Atribui o valor do parâmetro _lista_de_animais à variável privada lista_de_animais da classe Habitat
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     * Retorna o nome do habitat
     * @returns O nome do habitat
     */
    public getNome(): string {
        // Retorna o nome do habitat
        return this.nome;
    }

    /**
     * Define o nome do habitat
     * @param nome - O nome a ser atribuído ao habitat
     */
    public setNome(nome: string): void {
        // Define o nome do habitat como o valor passado como argumento para o método setNome
        this.nome = nome;
    }

    /**
     * Retorna a lista de animais do habitat
     * @returns A lista de animais do habitat
     */
    public getListaAnimais(): Array<Animal> {
        // Retorna a lista de animais do habitat
        return this.lista_de_animais;
    }

    /**
     * Define a lista de animais do habitat
     * @param lista_de_animais - A lista de animais a ser atribuída ao habitat
     */
    public setListaAnimais(lista_de_animais: Array<Animal>): void {
        // Define a lista de animais do habitat como o valor passado como argumento para o método setListaAnimais
        this.lista_de_animais = lista_de_animais;
    }
}
