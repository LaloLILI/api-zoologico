class Ave extends Animal {
    private envergadura: boolean;

    constructor(_envergadura: boolean,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    public setEnvergadura(envergadura: boolean): void {
        this.envergadura = envergadura;
    }

    public getEnvergadura(): boolean {
        return this.envergadura;
    }
}
