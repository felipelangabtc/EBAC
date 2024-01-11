$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', { // para data: 00/00/0000 para cpf:000.000.000-00 para cep: 00.000-000 para placas: SSS-0000
    placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00', { // para data: 00/00/0000 para cpf:000.000.000-00 para cep: 00.000-000 para placas: SSS-0000
    placeholder: '000.000.000-00'
    }) 
    $('#cep').mask('00.000-000', { // para data: 00/00/0000 para cpf:000.000.000-00 para cep: 00.000-000 para placas: SSS-0000
    placeholder: '00.000-000'
    }) 

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }

        },
        messages: {
            nome: 'Por favor, insira o seu nome.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} incorretos.`)
            }
        }
    })
})