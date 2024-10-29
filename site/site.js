document.getElementById('btn-alterar-imagem').addEventListener('click', function() {
    let img = document.getElementById('imagem');
    
    
    if (img.src.includes('cat.png')) {
        img.src = 'camel.png';
    } else {
        img.src = 'cat.png';
    }
});


document.getElementById('btn-titulo').addEventListener('click', function() {
    let titulo = document.getElementById('titulo');
    titulo.textContent = titulo.textContent === 'Gato' ? 'Camelo': 'Gato';
});


document.getElementById('btn-paragrafo').addEventListener('click', function() {
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = paragrafo.style.color === 'blue' ? 'black' : 'blue';
});


document.getElementById('btn-audio').addEventListener('click', function() {
    let audio = document.getElementById('audio');
    audio.play();
});


document.getElementById('btn-altera-buttons').addEventListener('click', function() {
    let buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => button.classList.toggle('active'));
});
