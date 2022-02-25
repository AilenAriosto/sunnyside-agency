$(document).ready(function(){

    let buttonBurguer = $('#buttonBurguer')
    let menu = $('#menu')

    buttonBurguer.click(function(){
        menu.toggle("scale", 500)
    })



    // ------------------Slider


    // Create slideshow instances
    var $slideshow = $('.slideshow').slides(),

    // Access an instance API
    api = $slideshow.data('slides');


   


})