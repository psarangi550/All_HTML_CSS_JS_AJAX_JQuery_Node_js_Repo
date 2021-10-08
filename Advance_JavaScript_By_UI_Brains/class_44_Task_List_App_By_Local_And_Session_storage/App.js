//javascript for the task list App
//first we need to grab the element for the form and for the input text
let inputEl=document.querySelector("#input-item")
let taskFormEl=document.querySelector("#task-form")
//now we need to perform a submit event on the taskFormEl
taskFormEl.addEventListener("submit",()=>{
  let task=inputEl.value.trim()
  //fetching the value from the input text-box
  let taskList=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]
  //checking the task is there or not in the value of the local storage if there please return it in the array format else return empty array
  //assign the array to the taskList variable
  taskList.push(task)//pushing the value to the array
  //need to add the task into the task list by push method
  //again add the updated taskList back to the localStorage
  localStorage.setItem("task",JSON.stringify(taskList))
  //adding the task list to the local Storage
  displayTask()
  // window.reload();
})
let displayTask=()=>{
  let dispayItem=document.querySelector("#list-item")
  //fetching the list item where it need to be added
  let taskList=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]
  if(taskList.length!==0){
    let eachTask=""
    for(task of taskList){
      eachTask+=`<li class="list-group-item list-group-item-action list-group-item-warning">
        <span class="font-weight-bold">${task}</span>
          <button class="close" >
          <i class="fa fa-times-circle"></i>
          </button>
        </li>`
    }

    dispayItem.innerHTML=eachTask
  }
  else{
    dispayItem.innerText=""
  }
}
displayTask()

///obtaining the javascript functionality for the delete button option
let dispayItem=document.querySelector("#list-item")
//applying the click event on the <ul> tag element
dispayItem.addEventListener("click",(e)=>{
  // console.log(e.target)
  let targetElement=e.target
  //capturing the target event
  if(targetElement.classList.contains("fa-times-circle")){
    let parentTarget=targetElement.parentElement.parentElement
    let selectedTarget=parentTarget.innerText
    // console.log(selectedTarget)
    let taskList=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]
    taskList=taskList.filter((task)=>{
      return task.trim()!==selectedTarget.trim()
    })
    // console.log(taskList)
    //now we need to add the taskList back to the Local Storage
    localStorage.setItem("task",JSON.stringify(taskList))
    //now for displaying we need to call the displayTask() over here
    displayTask()//calling the display Task function
  }
})
