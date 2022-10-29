$(document).ready(function(){

    $(window).resize(function(){
        var size = $(this).width();

        if(size < 1023 && size > 768){
            $('.tab-content').removeClass('col-md-10');
            $('.tab-content').addClass('col-md-8');
            $('aside-item').removeClass('col-md-2');
            $('aside-item').addClass('col-md-4');
            $('.div-arcade').removeClass('col-md-4');
            $('.div-arcade').addClass('col-md-6')
            $('.div-retro').removeClass('col-md-3');
            $('.div-retro').addClass('col-md-6');
            $('.aside-item').addClass('me-5');
            $('.tab-content').addClass('ms-3');
            $('.tab-content').removeClass('container');
        }

        if(size > 1023){
            $('.tab-content').removeClass('col-md-8');
            $('.tab-content').addClass('col-md-10');
            $('aside-item').removeClass('col-md-4');
            $('aside-item').addClass('col-md-2');
            $('.div-arcade').addClass('col-md-4');
            $('.div-arcade').removeClass('col-md-6')
            $('.div-retro').addClass('col-md-3');
            $('.div-retro').removeClass('col-md-6');
            $('.aside-item').removeClass('me-5');
            $('.tab-content').removeClass('ms-3');
            $('.tab-content').removeClass('container');
        }
        
        if(size < 768) {
            $('.tab-content').addClass('container');
        }
    });

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