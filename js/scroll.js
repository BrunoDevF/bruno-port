$(function(){
    //pegar o link
    var link = $("#menu a");
    link.on("click",function(){
        var seletor = $(this).attr("href");
        var posicao = $(seletor).offset().top;

        $("html, body").animate({scrollTop: posicao-30}, 1000);
    })
})