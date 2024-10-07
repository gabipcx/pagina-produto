const imagemPrincipal = document.getElementById('imagem-principal')
const miniatura = document.querySelectorAll('miniatura')
miniatura.forEach(miniatura =>  {
    miniatura.addEventListener('click', function() {
const novaImagem = this.getAttribute('data-imagem');
imagemPrincipal.src = novaImagem ;
    });
});