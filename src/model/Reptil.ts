class Reptil extends Animal {
    private tipo_de_escama: boolean;

    constructor(_tipo_de_escama: boolean,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero);
        this.tipo_de_escama = _tipo_de_escama;
    }

    public setTipo_de_escama(tipo_de_escama: boolean): void {
        this.tipo_de_escama = tipo_de_escama;
    }

    public getTipo_de_escama(): boolean {
        return this.tipo_de_escama;
    }
}
