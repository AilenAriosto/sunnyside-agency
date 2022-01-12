$(document).ready(function(){

    let buttonBurguer = $('#buttonBurguer')
    let menu = $('#menu')
    let elementsList = $('.header_nav_listContainer--elements')
    let elementsListContainer = $('.elementsListContainer')

    buttonBurguer.click(function(){
        menu.css("display", "block")
        menu.css("background", "white")
            .css("textAlign", "center")
            .css("position", "absolute")

        buttonBurguer.css("position", "relative")

        elementsList.css("color", "#818498")

        elementsListContainer.css("display", "flex")
                            .css("flexDirection", "column")
                            .css("height", "22rem")
                            .css("padding", "40px 90px")
                            .css("justifyContent", "space-evenly")

    })



})