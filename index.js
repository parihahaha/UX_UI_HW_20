console.log("here");

//hover logo and change it to home
$(document).ready(function(){
    $(".logoHome").hover(function(){
        //$('.logoHome').html("<a href='index.html' class = 'home'><img src ='assets/home.png' width = '26px'>Home</a>");
        $('.pajari').css('display', 'none');
        $('.homeIcon').css('display', 'inline-block');
        console.log("before");
    }, function(){
        //$('.logoHome').html("<a href='index.html' class = 'logo'>PAJARI</a>");
        $('.pajari').css('display', 'inline-block');
        $('.homeIcon').css('display', 'none');
        console.log("after");
    });
});


