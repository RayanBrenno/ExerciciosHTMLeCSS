function gerarTabuada() {

    let tabuada = document.querySelector("#tabuada tbody");

    let valorA = parseInt(document.querySelector("#valorA").value);
    
    let valorB = parseInt(document.querySelector("#valorB").value);

    tabuada.innerHTML = '';

    for (let i = 0; i <= valorB; i++) {
        
        let resultado = valorA * i;

        let template = `
            <tr>
                <td>${valorA}</td>
                <td>x</td>
                <td>${i}</td>
                <td>=</td>
                <td>${resultado}</td>
            </tr>
        `;

        tabuada.innerHTML += template;
    }

};