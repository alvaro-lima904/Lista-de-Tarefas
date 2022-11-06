let adicionarBotao = document.getElementById('adicionar');
let fazerContainer = document.getElementById('fazerContainer');
let registrar = document.getElementById('registrar');

adicionarBotao.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = registrar.value;
    fazerContainer.appendChild(paragraph);
    registrar.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through"
    });    
    paragraph.addEventListener('dblclick', function() {
        fazerContainer.removeChild(paragraph);
    });
});

