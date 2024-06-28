let criptografado = '';
let descriptografado = ''


function normalizeText() {
    const inputElement = document.getElementById('textCriptografarDescriptografarCopiarTexto');
    let valueText = inputElement.value;


    valueText = valueText.toLowerCase();
    valueText = valueText.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    inputElement.value = valueText;
}
document.getElementById('textCriptografarDescriptografarCopiarTexto').addEventListener('input', normalizeText);



function criptografar() {
    let inputText = document.getElementById('textCriptografarDescriptografarCopiarTexto').value;
    let criptografarValue = inputText.toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    criptografado = criptografarValue;

    document.getElementById('textCriptografarDescriptografarCopiarTexto').value = criptografarValue;


    document.getElementById('imagemProcurando').hidden = true
    document.getElementById('copiar_texto').hidden = false;
    document.getElementById('mensagem_criptografada').innerHTML = `<strong>${criptografado}</strong>`;
    document.getElementById('instrucao_criptografada').innerText = "Texto criptografado pronto para copiar.";

    criptografadoTrue = true; 
}

function descriptografar() {
    let inputText = document.getElementById('textCriptografarDescriptografarCopiarTexto').value;
    let descriptografarValue = inputText.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    descriptografado = descriptografarValue;

    document.getElementById('textCriptografarDescriptografarCopiarTexto').value = descriptografarValue;


    document.getElementById('imagemProcurando').hidden = true
    document.getElementById('copiar_texto').hidden = false;
    document.getElementById('mensagem_criptografada').innerHTML = `<strong>${descriptografado}</strong>`;
    document.getElementById('instrucao_criptografada').innerText = "Texto descriptografado pronto para copiar";

    criptografadoTrue = false;
}

function copiar_texto() {
    if (criptografadoTrue) {
        navigator.clipboard.writeText(criptografado).then(() => {
            alert('Texto criptografado copiado para a área de transferência!');
            resetarCampos();
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
    } else {
        navigator.clipboard.writeText(descriptografado).then(() => {
            alert('Texto descriptografado copiado para a área de transferência!');
            resetarCampos();
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
    }
}

function resetarCampos() {
    document.getElementById('imagemProcurando').hidden = false;
    document.getElementById('mensagem_criptografada').innerHTML = `<strong>Nenhuma mensagem encontrada</strong>`;
    document.getElementById('instrucao_criptografada').innerHTML = `Digite um texto que você deseja criptografar ou descriptografar.`;
    document.getElementById('copiar_texto').hidden = true;
    document.getElementById('textCriptografarDescriptografarCopiarTexto').value = '';
    criptografadoTrue = false;
}




