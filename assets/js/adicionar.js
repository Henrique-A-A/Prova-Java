//                    Aqui estamos dando uma função ao botão para adionar do form

let btnAdd = document.querySelector('#enviar')

btnAdd.addEventListener('click', function (event) {

    event.preventDefault()

    let evento = valorForm(form)

    let erros = validaevento(evento)

    if (erros.length > 0) {
        mensagemErros(erros)
        return
    }

    addevento(evento)

    let mensagemErro = document.querySelector("#mensagensErro")
    mensagemErro.innerHTML = ''

    let contador = document.querySelectorAll('.evento').length
    document.querySelector('.total').textContent = contador

})

function addevento(evento) {

    let eventoTr = montarTr(evento)

    let tabela = document.querySelector('#tabela')

    tabela.appendChild(eventoTr)

}

//                    Aqui estamos validando o forms, para verficar se existe algum erro

function validaevento(evento) {
    let erros = []
    
    let marca = new Date(Date.parse(evento.data))

    if (evento.nome.length == 0) {
        erros.push('O nome do evento não pode estar em branco')
    }

    if (evento.data.length == 0) {
        erros.push('A data e hora não pode estar em branco')
    }

    if(marca < new Date){
        erros.push('A data do evento deve ser após a data de cadastramento')
    }


    if (evento.local.length == 0) {
        erros.push('O local não pode estar em branco')
    }

    if (evento.conv.length == 0) {
        erros.push('O numero de convidados não pode estar em branco')
    }

    if (evento.status.length == 0) {
        erros.push('O status não pode estar em branco')
    }

    return erros
}

//                    Aqui estamos criando uma lista de mensagem de erros

function mensagemErros(erros) {
    let ul = document.querySelector('#mensagensErro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

//                    Aqui estamos criando uma Tr com os Td que criamos abaixo

function montarTr(evento) {
    let eventoTr = document.createElement('tr')

    eventoTr.classList.add('evento')

    eventoTr.appendChild(montarTd(evento.nome, 'nome'))
    eventoTr.appendChild(montarTd(evento.data, 'data'))
    eventoTr.appendChild(montarTd(evento.local, 'local'))
    eventoTr.appendChild(montarTd(evento.conv, 'conv'))
    eventoTr.appendChild(montarTd(evento.status, 'status'))
    eventoTr.appendChild(apagarTr(evento.apagar))

    return eventoTr
}

//                     Aqui estamos cirando uma td vazia e dando uma classe a ele

function montarTd(dado, classe) {
    let td = document.createElement('td')

    td.textContent = dado

    td.classList.add(classe)

    return td

}

//                         Aqui estamos captando os valores escrito no form

function valorForm(form) {
    let evento = {
        nome: form.nome.value,
        data: form.data.value,
        local: form.local.value,
        conv: form.conv.value,
        status: form.status.value

    }
    return evento
}