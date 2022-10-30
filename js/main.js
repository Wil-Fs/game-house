$(document).ready(function(){


    $('#telefone').mask('(00) 00000-0000')

    $('#button-send').click(function(){
        $('#form-pag').validate({
            rules:{
                name: 'required',
                email: 'required',
                telefone: 'required'
            }
        });
    });
});