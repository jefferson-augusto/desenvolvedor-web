// Carrossel simples com troca automática de imagens
/*document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".slider img");
  let index = 0;

  function mostrarProximaImagem() {
    // Remove a classe 'active' de todas as imagens
    imagens.forEach(img => img.classList.remove("active"));

    // Adiciona a classe 'active' na imagem atual
    imagens[index].classList.add("active");

    // Atualiza o índice
    index = (index + 1) % imagens.length;
  }

  // Mostrar a primeira imagem imediatamente
  mostrarProximaImagem();

  // Trocar imagem a cada 4 segundos
  setInterval(mostrarProximaImagem, 4000);
});*/

/*document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".slider img");
  let index = 0;

  function mostrarProximaImagem() {
    // Remove a classe 'active' de todas as imagens
    imagens.forEach(img => img.classList.remove("active"));

    // Adiciona a classe 'active' na imagem atual
    imagens[index].classList.add("active");

    // Atualiza o índice
    index = (index + 1) % imagens.length;
  }

  // Trocar imagem a cada 4 segundos
  setInterval(mostrarProximaImagem, 4000);
});*/

document.addEventListener("DOMContentLoaded", function () {
  const imagens = document.querySelectorAll(".slider img");
  let index = 0;  // começa na primeira imagem

  function mostrarProximaImagem() {
    imagens.forEach((img, i) => {
      img.classList.remove("active");
    });
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("active");
  }

  // Primeira imagem já deve ter active no HTML, se quiser pode forçar aqui também:
  imagens[0].classList.add("active");

  setInterval(mostrarProximaImagem, 6000);
});
const posts = [
  {
    title: "5 Dicas para um Site Rápido",
    link: "post1.html",
    description: "Melhore a velocidade e a responsividade do seu site."
  },
  {
    title: "Marketing Digital: Como Alcançar Mais Clientes",
    link: "post2.html",
    description: "Estratégias digitais para sua empresa crescer."
  },
  {
    title: "Engajamento nas Redes Sociais",
    link: "post3.html",
    description: "Dicas para aumentar o engajamento online."
  },
  {
    title: "SEO para Iniciantes",
    link: "post4.html",
    description: "Entenda como melhorar o posicionamento no Google."
  },
  {
    title: "Como Criar Conteúdo Viral",
    link: "post5.html",
    description: "Dicas para aumentar o alcance dos seus posts."
  },
  {
    title: "Anúncios Online que Convertem",
    link: "post6.html",
    description: "Como criar campanhas de anúncios eficientes."
  }
];

const postsPerPage = 3;
let currentPage = 1;

function showPosts(page) {
  const blogContainer = document.getElementById("blog-posts");
  const paginationContainer = document.getElementById("pagination");
  blogContainer.innerHTML = "";
  paginationContainer.innerHTML = "";

  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const pagePosts = posts.slice(start, end);

  pagePosts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <a href="${post.link}">Leia Mais</a>
    `;
    blogContainer.appendChild(postDiv);
  });

  // Paginação
  const totalPages = Math.ceil(posts.length / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = i;
    pageBtn.onclick = () => {
      currentPage = i;
      showPosts(currentPage);
    };
    if (i === page) pageBtn.style.fontWeight = "bold";
    paginationContainer.appendChild(pageBtn);
  }
}

showPosts(currentPage);

window.addEventListener('scroll', function() {
  const header = document.querySelector('.menu-fixo');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});