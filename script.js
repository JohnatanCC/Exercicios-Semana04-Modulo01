console.log("Script funcionando");

function gerarResultado() {
    const numero1 = Number(document.getElementById('inputNumero1').value);
    const numero2 = Number(document.getElementById('inputNumero2').value);

    const resultado = numero1 + numero2;

    alert(`Resultado: ${resultado}`);
    document.getElementById('txt-resultado').innerText = `Resultado: ${resultado}`;
}
