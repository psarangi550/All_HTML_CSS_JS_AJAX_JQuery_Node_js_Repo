//here first grabbing the image while clicking on the upload button
//fetching the querySelector for the form
let uploadFormEl=document.querySelector("#upload-form")
//after grabbing the element using the on submit even on the inner js file or we can use the submit event with listener function
uploadFormEl.addEventListener("submit",()=>{
  //here we need to image file and image file name
  //lets grab the image file first
  let imageFile=document.querySelector("#customFile").files[0];
  //this will fetch the image file to find its name we can use it as with .name variable
  let imgName=imageFile.name

  //here we need to use 3 steps
  //step:1:-create a fileReader Object which is same as math/date/number object
  let readerImg=new FileReader();
  //creating a new fileReader Object
  //step:-2 to read the URL as Data using readAsDataURL() on the file reader Object
  readerImg.readAsDataURL(imageFile)
  //reading the url files as Data
  // console.log(read)
  //here we need to use the load event on the read with add event listener function
  readerImg.addEventListener("load",function(){
    if(this.result && localStorage){
      let imageList=(localStorage.getItem("images"))?JSON.parse(localStorage.getItem("images")):[]
      imageList.push(this.result)//adding the image list to the URL
      //now we need to set that back into the local storage
      localStorage.setItem("images",JSON.stringify(imageList))
      getImages()//calling getImages Method
    }
  })
})



//now we need to display that to the console
let getImages=function (){
  let result=""//assigning the empty striong to the result
  let imageList=(localStorage.getItem("images"))?JSON.parse(localStorage.getItem("images")):[]
  if(imageList.length !==0){
    imageList.forEach(function(image){
      result+=`    <div class="col-md-3">
                   <div class="card">
                   <img src=${image} alt="" class="image-fluid card-img pratik">
                    <h3 class="card-title mt-2">IMAGE</h3>
                    <p class="lead card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, quasi.</p>
                    </div>
                    </div>`
      document.querySelector("#card-row").innerHTML=result
    })
  }
}
getImages()

//now we have to the same for the remove All Button
let RemoveBtn=document.querySelector("#remove-btn")
RemoveBtn.addEventListener("click",()=>{
  if(localStorage){
    localStorage.clear();
  }
  getImages();//calling the getImages Method again

})
