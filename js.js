var screenWidth = screen.width;
var rotation = 90;
var arcrot= 0;
console.log(screenWidth);



$(document).ready(function(){
    var a = true;
    $('.menuicon').click(function(){
        if(a ==true){
            $(this).css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
                    '-moz-transform' : 'rotate('+ rotation +'deg)',
                    '-ms-transform' : 'rotate('+ rotation +'deg)',
                    'transform' : 'rotate('+ rotation +'deg)'});
            $('.menu').css({'display' : 'flex'});
            $('.onpicArr').css({'background': 'white'});
            $('.onpic').css({'opacity':'0.2'});
            $('body').attr({'scroll' : 'no'});
            $('.body').css({'opacity':'0.7'});
            
        }else{
            $(this).css({'-webkit-transform' : 'rotate('+ arcrot +'deg)',
                     '-moz-transform' : 'rotate('+ arcrot +'deg)',
                     '-ms-transform' : 'rotate('+ arcrot +'deg)',
                     'transform' : 'rotate('+ arcrot +'deg)'});
            $('.menu').css({'display' : 'none'}); 
            $('.onpicArr').css({'background': 'black'});
            $('.onpic').css({'opacity':'1'});
            $('body').attr({'scroll' : 'yes'});
            $('.body').css({'opacity':'1'});
        };  
    a = !a; 
});
});
$(document).ready(function(){
    mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
});

$(window).on('load', function(){
  $('.loader-wrapper').fadeOut('slow');
  $('body').fadeIn('slow');
});



//for carousel
$(document).ready(function(){
  $(".link").click(function(){
    $('.onhover').css({'display':'block'});
    console.log('open');
 });
 $('.popupCloseButton').click(function(){
     $('.onhover').hide();
 });
});
$(document).ready(function(){
  $(".link1").click(function(){
    $('.onhover1').css({'display':'block'});
    console.log('open1');
 });
 $('.popupCloseButton1').click(function(){
     $('.onhover1').hide();
 });
});
