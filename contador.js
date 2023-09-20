// Obtém o botão e o elemento de resultado pelo ID
const contadorBtn = document.getElementById('contadorBtn');
const resultado = document.getElementById('resultado');

// Adiciona um ouvinte de evento de clique ao botão
contadorBtn.addEventListener('click', () => {
    // Inicializa o contador
    let contador = 1;

    // Cria uma função que será chamada a cada 1000 milissegundos (1 segundo)
    const intervalo = setInterval(() => {
        // Atualiza o elemento de resultado com o valor do contador
        resultado.textContent = contador;

        // Incrementa o contador
        contador++;

        // Verifica se o contador atingiu 100
        if (contador > 100) {
            // Limpa o intervalo (a contagem para)
            clearInterval(intervalo);
        }
    }, 1000); // 1000 milissegundos = 1 segundo
});
