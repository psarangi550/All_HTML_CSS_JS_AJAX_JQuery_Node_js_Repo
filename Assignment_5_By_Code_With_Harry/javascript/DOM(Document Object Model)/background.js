function random_image(){
    var img=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
    var r=Math.floor(Math.random()*4)
    return img[r]
}//close the function

var mybg=document.querySelector("button")
mybg.addEventListener("click",change_bg_image)
var mybody=document.querySelector("body")

function change_bg_image(){
    //listener function
    mybody.style.backgroundImage="url("+random_image()+")"
    //mybody.style.backgroundImage="url(https://pixabay.com/get/g99ef133b6e006948981065cea85d86a6f5a8c5187d8dd1a195b758cebc58d8448632244f6fa14c45dfa8f78d579c3e36.jpg)"
    //mybody.setAttribute("src","https://pixabay.com/get/g0f90cac42dc1e7b08baf136130ce9bcab8590022e71a1135e10c04c3cf4b46b3a7added9f0b48a443ca89307ecef3318.jpg")
    //mybody.setAttribute("src","https://pixabay.com/get/g99ef133b6e006948981065cea85d86a6f5a8c5187d8dd1a195b758cebc58d8448632244f6fa14c45dfa8f78d579c3e36.jpg")
}