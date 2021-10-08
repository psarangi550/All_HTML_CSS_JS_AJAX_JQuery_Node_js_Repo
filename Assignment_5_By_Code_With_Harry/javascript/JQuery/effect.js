$("button").on("click", function(){
    $("div:first").fadeOut()
})
$("button").on("dblclick", function(){
    $("div:first").fadeIn()
})
$("button").on("mouseover", function(){

    $("div:nth-of-type(2)").fadeToggle()
    
})