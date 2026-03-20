API REST simples para gerenciamento de produtos.

# Endpoints

## GET /api/produtos
Lista todos os produtos.

### URL:
http://localhost:3000/api/produtos

### Exemplo de codigo:
```json
[
  {
    "id": 1,
    "nome": "Mouse",
    "preco": 100,
    "categoria": "eletronicos",
    "estoque": 50
  }
]
```

## GET /api/produtos/:id
Busca um produto pelo ID.

### URL:
http://localhost:3000/api/produtos/1

### Exemplo de codigo:
```json
{
  "id": 1,
  "nome": "Mouse",
  "preco": 100,
  "categoria": "eletronicos",
  "estoque": 50
}
```

## POST /api/produtos
Cria um novo produto.

### URL:
http://localhost:3000/api/produtos

### Body (JSON):
```json
{
  "nome": "Mouse",
  "preco": 100,
  "categoria": "eletronicos",
  "estoque": 50
}
```
### Exemplo de codigo:
```json
{
  "id": 6,
  "nome": "Mouse",
  "preco": 100,
  "categoria": "eletronicos",
  "estoque": 50
}
```
# Validações Implementadas

* Nome obrigatório e deve ser texto
* Preço deve ser número maior que 0
* Categoria obrigatória
* Estoque deve ser número maior ou igual a 0

### Codigo de erro:

```json
{
  "erro": "Preço deve ser um número maior que 0"
}
```

# Testes
Os testes foram realizados utilizando o Postman.

## Requisições criadas:

* GET /api/produtos
* GET /api/produtos/:id
* POST /api/produtos

# Collection
A collection do Postman está disponível na pasta:

docs/

# Conclusão
API funcional com:

* Listagem de produtos
* Busca por ID
* Criação de novos produtos
* Validação de dados