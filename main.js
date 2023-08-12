$(document).ready(function(){

    /*let mascara = if(celular) ? '(00)00000-0000' : '(00)0000-0000'

    $('#telefone').mask('mascara')S USADOO PARA LETRA E 0 PARA NUMERO*/
    $('#celular').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('form').validate({

        rules: {
            nome:{
                required: true,
            },
            email:{
                required: true,
                email:true
            },
            celular:{
                required: true,
                minlength:15,
            },
            cpf:{
                required:true,
                minlength:14,
            },
            endereco:{
                required:true,
            },
            cep:{
                required:true,
                minlength:9,
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome.',
            email:'Por favor, inserir um e-mail válido.',
            celular: 'Por favor, inserior um número de celular válido.',
            cpf:'Por favor, inserir um cpf válido.',
            endereco:'Por favor, inserir um endereço válido.',
            cep:'Por favor, inserir cep válido.',

        },
        submitHandler: function(form){
            alert('Parabéns,todos os campos foram validados.')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos, Favor preencher todo o formulário`)
            }
        }
    })

})