import express from 'express';
const app = express();
app.use(express.json());

// Tenho que ter uma rota POST para cadastrar um filme

// Salvar em algum lugar o filme que foi cadastrado.
type Filme = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: string
}
let filmesCadastros: Filme[] = []

app.post('/filmes', (req, res) => {
    const { id, titulo, descricao, imagem } = req.body;
    const filme: Filme = {
        id,
        titulo,
        descricao,
        imagem
    }

    // Como eu salvo o filme que foi cadastrado no meu vetor de filmes (Banco de dados)
    filmesCadastros.push(filme);
    res.status(201).send(filme);
});

app.get('/filmes', (req, res) => {
    res.status(200).send(filmesCadastros); // Retorna a lista de filmes cadastrados
});

app.get('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Usar o método find para buscar um filme pelo id e retornar para o usuário
    const filmeEncontrado = filmesCadastros.find(filme => filme.id === id);

    if (filmeEncontrado) {
        res.status(200).send(filmeEncontrado);
    } else {
        res.status(404).send("Filme não encontrado");
    }
});

// Tenho que iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
