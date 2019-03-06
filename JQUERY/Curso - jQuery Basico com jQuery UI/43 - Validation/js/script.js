$(document).ready(function(){
    
    $('#form').validate({
        'messages' : {
            'email' : {
                'required' : 'E-mail é obrigatório.',
                'email' : 'E-mail inválido'
            },
            'nome' : {
                'required' : 'Nome é obrigatório.'
            }
        }
    });

});
