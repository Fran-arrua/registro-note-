document.getElementById('boton').addEventListener('click', function() {
    // Obtén el valor del input
    const inputValue = document.getElementById('idNote').value;

    // Realiza la consulta o procesamiento basado en el valor del input
    const resultado = idNote(inputValue);

    // Muestra el resultado en el div con id "resultado"
    document.getElementById('resultado').innerText = resultado;
});

let n1 = 'Notebook en buen estado'
let n2 = 'Notebook inhabilitada'
let n3 = 'sin arranques'
let n4 = 'notebook rota'
let n5 = 'notebok sin flex'

function idNote(id) {
    // Aquí puedes colocar la lógica para obtener el resultado basado en el id
    // Por ejemplo, una simulación de consulta:
    if (id === "01") {
        return n1;
    } else if (id === "02") {
        return n2;
    } else if (id === "03"){
        return n3;
    } else if (id === "04"){
        return n4;
    } else if (id === "05"){
        return n5;
    }
}

