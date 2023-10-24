import express from 'express'
const app = express()
app.use(express.json())
app.post('/filmes' , (req,res)=>{
    res.json("filme cadastro com sucesso")
})
app.get('/filmes', (req,res)=>{
    res.send("Listados com sucesso")
})

app.listen(3000,()=>{
    console.log('Servidoe rodando na porta 3000')
})
export default app