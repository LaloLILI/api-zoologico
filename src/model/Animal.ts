export class Animal {
    // Atributos privados que armazenam informações sobre o animal
    private nome: string;  // Nome do animal
    private idade: number;  // Idade do animal
    private genero: string;  // Gênero do animal (por exemplo, "macho", "fêmea", "desconhecido")

    // Construtor da classe Animal que inicializa os atributos do animal
    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome;  // Inicializa o nome do animal
        this.idade = _idade;  // Inicializa a idade do animal
        this.genero = _genero;  // Inicializa o gênero do animal
    }

    /**
     * Define o nome do animal.
     * 
     * @param nome - O nome a ser atribuído ao animal.
     */
    public setNome(nome: string): void {
        this.nome = nome;  // Define o nome do animal
    }

    /**
     * Retorna o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;  // Retorna o nome do animal
    }

    /**
     * Define a idade do animal.
     * 
     * @param idade - A idade a ser atribuída ao animal.
     */
    public setIdade(idade: number): void {
        this.idade = idade;  // Define a idade do animal
    }

    /**
     * Retorna a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;  // Retorna a idade do animal
    }

    /**
     * Define o gênero do animal.
     * 
     * @param genero - O gênero a ser atribuído ao animal.
     */
    public setGenero(genero: string): void {
        this.genero = genero;  // Define o gênero do animal
    }

    /**
     * Retorna o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;  // Retorna o gênero do animal
    }
}
