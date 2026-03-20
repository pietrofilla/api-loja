const express = require('express');
const app = express();

app.use(express.json());


let produtos = [
    { id: 1, nome: "Notebook", preco: 3500, categoria: "informatica", estoque: 10 },
    { id: 2, nome: "Celular", preco: 2000, categoria: "informatica", estoque: 15 },
    { id: 3, nome: "Camiseta", preco: 50, categoria: "roupas", estoque: 30 }
];


app.get('/api/produtos', (req, res) => {
    let resultado = [...produtos];

    if (req.query.categoria) {
        resultado = resultado.filter(p =>
            p.categoria.toLowerCase() === req.query.categoria.toLowerCase()
        );
    }

    if (req.query.ordem === 'asc') {
        resultado.sort((a, b) => a.preco - b.preco);
    } else if (req.query.ordem === 'desc') {
        resultado.sort((a, b) => b.preco - a.preco);
    }

    res.json(resultado);
});


app.get('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    res.json(produto);
});


app.post('/api/produtos', (req, res) => {
    const { nome, preco, categoria, estoque } = req.body;

    if (!nome || typeof nome !== "string") {
        return res.status(400).json({ erro: "Nome é obrigatório e deve ser texto" });
    }

    if (!preco || typeof preco !== "number" || preco <= 0) {
        return res.status(400).json({ erro: "Preço deve ser um número maior que 0" });
    }

    if (!categoria || typeof categoria !== "string") {
        return res.status(400).json({ erro: "Categoria é obrigatória" });
    }

    if (estoque == null || typeof estoque !== "number" || estoque < 0) {
        return res.status(400).json({ erro: "Estoque deve ser um número >= 0" });
    }

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        categoria,
        estoque
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});


app.listen(3000, () => {
    console.log("API loja rodando em http://localhost:3000");
});