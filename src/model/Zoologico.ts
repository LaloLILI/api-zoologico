// Importa a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";
// Importa a classe Atracao do arquivo "Atracao"
import { Atracao } from "./Atracao";

// Define a classe Zoologico
export class Zoologico {
    // Declaração de variáveis privadas para o nome do zoológico e uma lista de atrações
    private nome: string;
    private lista_de_atracoes: Array<Atracao>;

    // Define um construtor que recebe o nome do zoológico e uma lista de atrações, atribuindo-os às variáveis correspondentes
    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        // Atribui o valor do parâmetro _nome à variável privada nome da classe Zoologico
        this.nome = _nome;
        // Atribui o valor do parâmetro _lista_de_atracoes à variável privada lista_de_atracoes da classe Zoologico
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    /**
     * Retorna o nome do zoológico
     * @returns O nome do zoológico
     */
    public getNome(): string {
        // Retorna o nome do zoológico
        return this.nome;
    }

    /**
     * Define o nome do zoológico
     * @param nome O novo nome do zoológico
     */
    public setNome(nome: string): void {
        // Define o nome do zoológico como o valor passado como argumento para o método setNome
        this.nome = nome;
    }

    /**
     * Retorna a lista de atrações do zoológico
     * @returns A lista de atrações do zoológico
     */
    public getListaAtracoes(): Array<Atracao> {
        // Retorna a lista de atrações do zoológico
        return this.lista_de_atracoes;
    }

    /**
     * Define a lista de atrações do zoológico
     * @param lista_de_atracoes A nova lista de atrações do zoológico
     */
    public setListaAtracoes(lista_de_atracoes: Array<Atracao>): void {
        // Define a lista de atrações do zoológico como o valor passado como argumento para o método setListaAtracoes
        this.lista_de_atracoes = lista_de_atracoes;
    }
}
