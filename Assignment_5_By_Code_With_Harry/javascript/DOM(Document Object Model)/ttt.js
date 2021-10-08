var myb=document.querySelectorAll("button")
// var is_empty=true;
// var x=0

// function getContent(){
// if(this.textContent==""){
//     this.textContent="x"
// }
// else if(this.textContent=="x"){
//     this.textContent="0"
// }
// else if(this.textContent=="0"){
//     this.textContent=""
// }
// }
// for (b of myb){
//     b.addEventListener("click", getContent)
// }

// for(var i=0;i<myb.length;i++){
//     myb[i].addEventListener("click",getContent)
// }


myb.forEach(function(x){
    x.addEventListener("dblclick",function (){
        if(this.textContent==""){
            this.textContent="X";
        }
        else if(this.textContent=="X"){
            this.textContent="0"
        }
        else{
            this.textContent="";
        }
    })
})



// function getContent(){
//     if(this.textContent==""){
//     this.addEventListener("click",function(){
//         return (this.textContent="x");
//         // return x+1
//     })   
// }
// }

// for(var i=0;i<myb.length;i++){
//     myb[i].addEventListener("click",getContent)
// }

// for(b of myb){
//     if(b.textContent==""){
//         b.addEventListener('click',function(){
//             b.textContent="x"
//         })
//     }
//     else if(b.textContent=="x"){
//         b.addEventListener('click',function(){
//             b.textContent="0"
//         })  
//     }

// // }
// myb.forEach(function(z){
//     if(z.textContent=="X") {
//         z.addEventListener("click",function(){
//             z.textContent="0";
//         })
//     }
// })
// myb.forEach(function(x){
//     if(x.textContent=="0"){
//         x.addEventListener("click",function(){
//             x.textContent="";
//         })  
//     }
// })
var mya=document.querySelector("a")
mya.addEventListener('click',function(){
    for(b of myb){
        b.textContent=""
    }
})
var myb=document.querySelectorAll("button")
// var is_empty=true;
// var x=0

// function getContent(){
// if(this.textContent==""){
//     this.textContent="x"
// }
// else if(this.textContent=="x"){
//     this.textContent="0"
// }
// else if(this.textContent=="0"){
//     this.textContent=""
// }
// }

// for(var i=0;i<myb.length;i++){
//     myb[i].addEventListener("click",getContent)
// }
// myb.forEach(function(x){
//     x.addEventListener("click",function(){
//         if(this.textContent==""){
//             this.textContent="X";
//     }
//         if(this.textContent=="X"){
//             this.textContent="0";
//     }
//         if(this.textContent=="0"){
//         this.textContent="";
//     }
// })
// })



// function getContent(){
//     if(this.textContent==""){
//     this.addEventListener("click",function(){
//         return (this.textContent="x");
//         // return x+1
//     })   
// }
// }

// for(var i=0;i<myb.length;i++){
//     myb[i].addEventListener("click",getContent)
// }

// for(b of myb){
//     if(b.textContent==""){
//         b.addEventListener('click',function(){
//             b.textContent="x"
//         })
//     }
//     else if(b.textContent=="x"){
//         b.addEventListener('click',function(){
//             b.textContent="0"
//         })  
//     }

// }
// myb.forEach(function(z){
//     if(z.textContent=="X") {
//         z.addEventListener("click",function(){
//             z.textContent="0";
//         })
//     }
// })
// myb.forEach(function(x){
//     if(x.textContent=="0"){
//         x.addEventListener("click",function(){
//             x.textContent="";
//         })  
//     }
// })
var mya=document.querySelector("a")
mya.addEventListener('click',function(){
    for(b of myb){
        b.textContent=""
    }
})