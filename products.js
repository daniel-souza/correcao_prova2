let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p);
    })
}

function listar_por_categoria(categoria) {
    produtos.forEach(p => {
        if(p.categoria.toLowerCase() == categoria.toLowerCase()) {
            console.log(p);
        }
    });
    /*
    const comprimento = produtos.length;
    for(let i = 0; i < comprimento; i++) {
        if(produtos[i].categoria == categoria) {
            console.log(produtos[i]);
        }
    }
    */
}



