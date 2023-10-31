export default interface FilmeRepositorioInterface {
    salvar(filme: FilmeDTD): FilmeDTD;
    listar(): FilmeDTD[];
    buscarPorId(id: number): FilmeDTD;
    remover(id: number): void;
}

type FilmeDTD = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: string
}