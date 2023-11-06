/* const container = document.getElementById('container');
container.style.justifyContent = 'center'
container_atleta.style.color = "white"; 
*/


const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 56;

const body = document.body;
body.style.display = 'flex';
body.style.gap = '.5em';
body.style.flexWrap = 'wrap';

const body = document.body;
body.style.backgroundImage = 'url("https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte26fe1300d81bb9d/61c222da807fe24063918fd6/34361776730_3fc7a19e14_o.jpg")';


const pesquisa = document.createElement('div');
const texto_pesquisado = document.createElement('input');
const btn_pesquisa = document.createElement('button');

btn_pesquisa.innerHTML = "Pesquisar";
pesquisa.style.textAlign = 'center';
btn_pesquisa.onclick = () => {
    filtrar(texto_pesquisado.value)
};

pesquisa.appendChild(texto_pesquisado);
pesquisa.appendChild(btn_pesquisa);
body.appendChild(pesquisa);

const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (entrada) => {

    const container_atleta = document.createElement('div');
    container_atleta.style.color = 'yellow';
    

    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    titulo.style.fontFamily = 'Roboto, sans-serif'


    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;


    const descricao = document.createElement('p');
    descricao.innerHTML = atleta.descricao;
    descricao.style.fontFamily ='Bebas Neue, sans-serif';
    descricao.style.borderRight = '100px';
    descricao.style.borderLeft = '100px';
    descricao.style.textAlign = 'center';




    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);



}

const manipulaClick = (e) => {
    const artigo = e.target.closest('article');
    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `altura=${artigo.dataset.altura}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;

    console.log(acha_cookie('id'));
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e)=> e.startsWith(chave));
    return procurado.split('=')[1];
}
const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then( (r) => console.log(r));

pega_json(`${url}/all`)
.then((r) => {
    for (atleta of r){
        cria_cartao(atleta)
    }});

console.log('síncrono');

/*

const constroi_atletas = (lista_atletas) => {
    for (const atletas of lista_atletas){
        cria_cartao(atleta);
    }
}

const filtrar = (entrada) => {
    const filtrado = atletas.filter(
        (ele) => ele.nome.toLowerCase().includes(entrada.toLowerCase())
    );
    constroi_atletas(filtrado);
}

/*
 let indice = 0
while(indice < atletas){
    cria_cartao(atletas[indice]);
}
*/

for (const atleta of atletas) {
    cria_cartao(atleta);
}


/*const filtrado = atletas.filter{
    (ele) => {
        const nome = ele.nome;
        const nome_minuscula = nome.toLowerCase();
        const resultado = nome_minuscula.incluses("i");
        return resultado
    }
}*/

/*const preenche = (atleta) => {
    const espaco_nome = document.getElementById('nome');
    const imagem = document.querySelector('#container > img');
    const espaco_descricao = document.querySelector('#container > p');
    

    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    espaco_descricao.innerText = atleta.descricao;
}



preenche(atletas[25]);
*/
