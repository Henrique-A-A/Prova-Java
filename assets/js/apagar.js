//                       Aqui estamos criando um td(celula) fixa para apagar uma tr

function apagarTr(dado) {
    let apagar = document.createElement('td')

    apagar.textContent = 'X'

    apagar.classList.add('apagar')

    apagar.addEventListener('dblclick', function (evento) {

        evento.target.parentNode.classList.add('fadeOut')

        setTimeout(function () {

            evento.target.parentNode.remove()

            let contador = document.querySelectorAll('.evento').length
            document.querySelector('.total').textContent = contador

        })

    })

    return apagar

}