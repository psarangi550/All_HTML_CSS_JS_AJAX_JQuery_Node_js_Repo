//dependent promises
//here the proposition is
//if i create a new project then only i will go any technical interview
//if the technical interview gets cleared then i will go for the Manager Round
//if the Manager round id being cleared the only got for the HR Round
//if the HR Round being cleared then go for the getJob

//here there are 4 dependent objects are there

let getProject=new Promise((resolve,reject)=>{
  let isProjectFinished=true;//taking the projectFinished as true
  if(isProjectFinished==true){
    //if the project finished we will call the resolve method
    resolve("Project been finished up")
  }
  else{
    reject("Project not yet finished up  Trade carefully")
  }
})

let attnTechnicalInterview=new Promise((resolve,reject)=>{
  let isTechnicalInterviewDone=true;//taking the projectFinished as true
  if(isTechnicalInterviewDone==true){
    //if the project finished we will call the resolve method
    resolve("Technical Interview Cleared --go for manager round")
  }
  else{
    reject("Technical interview not cleared Trade carefully")
  }
})
let attnManagerInterview=new Promise((resolve,reject)=>{
  let isattnManagerInterviewDone=true;//taking the projectFinished as true
  if(isattnManagerInterviewDone==false){
    //if the project finished we will call the resolve method
    resolve("Manager Interview Cleared --go for HR round")
  }
  else{
    reject("Manager interview not cleared Trade carefully")
  }
})
let attnHRInterview=new Promise((resolve,reject)=>{
  let isattnHRInterviewDone=true;//taking the projectFinished as true
  if(isattnHRInterviewDone==true){
    //if the project finished we will call the resolve method
    resolve("HR Interview Cleared --You got the job")
  }
  else{
    reject("HR interview not cleared Trade carefully")
  }
})
//now we need to call them one by one
let result=""//assigning the empty string to the result variable
getProject.then((message)=>{
  result+=`${message}-->`
  //here we need to create what happen if the resolve method been called
  //calling the attnTechnical Interview then
  attnTechnicalInterview.then((message)=>{
    result+=`${message}-->`
    attnManagerInterview.then((message)=>{
      result+=`${message}-->`
      attnHRInterview.then((message)=>{
        result+=`${message}-->`
        console.log(result)
      }).catch((message)=>{console.error(message)})
    }).catch((message)=>{console.error(message)})
  }).catch((message)=>{console.error(message)})
}).catch((message)=>{
  console.error(message)
})
