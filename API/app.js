document.addEventListener('DOMContentLoaded', () => {
    // Obtém o elemento com ID 'container'
    const container = document.getElementById('container');

    // Criação e adição dos elementos estáticos
    const meuH1 = document.createElement('h1');
    meuH1.innerText = "Criando um Elemento";
    container.appendChild(meuH1);

    const meuH2 = document.createElement('h2');
    meuH2.innerText = "Criando um Elemento H2";

    const novaDiv = document.createElement('div'); // Criação de um elemento 'div'
    novaDiv.appendChild(meuH2);
    container.appendChild(novaDiv);

    // URL para a API
    const urls = "https://jsonplaceholder.typicode.com/posts";

    // Função assíncrona para buscar e exibir posts
    async function getPosts() {
        const resp = await fetch(urls); // Faz a requisição à API
        const data = await resp.json(); // Converte a resposta para JSON

        // Mapeia os dados recebidos para criar e adicionar elementos ao DOM
        data.map(post => {
            const divCard = document.createElement('div');
            divCard.classList.add("card"); // Adiciona a classe 'card'

            const title = document.createElement('h1');
            title.innerText = post.title; // Adiciona o título do post
            divCard.appendChild(title);

            const body = document.createElement('p');
            body.innerText = post.body; // Adiciona o corpo do post
            divCard.appendChild(body);

            const link = document.createElement('a');
            
            link.href = `https://jsonplaceholder.typicode.com/posts/${post.id}`; // Link para o post
            link.innerText = "Ler mais"; // Texto do link
            divCard.appendChild(link);

            container.appendChild(divCard); // Adiciona o card ao container
        });
    }

    // Chama a função para buscar e exibir os posts
    getPosts();
});
