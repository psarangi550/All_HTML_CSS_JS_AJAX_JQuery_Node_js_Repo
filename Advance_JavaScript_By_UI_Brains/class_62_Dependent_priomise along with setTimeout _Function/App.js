//here we are going  for the dependent promises along with the setTimeout function
//here the same condition while project completed attn the Technical Interview
//once the technical Interview Over go fopr the manager interview
//once manager interview over go for the hr interview
// once the hr interview been over then that means you got the job


let getProjectDone=new Promise((resolve,reject)=>{
 //lets suppose this call back function takes 2000 ms or 2 sec per resolve and reject call back method
  setTimeout(()=>{
    //lets suppose we make the project
    let isProjectDone=false//making the project done for the task
    if(isProjectDone==true){
    resolve("Project finished-->please appear for the manager round")
    }
    else{
      reject("Project not finished please trade carefully")
    }
  },1000)//putting a delay for 200ms
})
let attnTechnicalInterview=new Promise((resolve,reject)=>{
  //lets suppose this call back function takes 2000 ms or 2 sec per resolve and reject call back method
  setTimeout(()=>{
    //lets suppose we make the project
    let isTechnicalInterviewDone=true//making the project done for the task
    if(isTechnicalInterviewDone==true){
      resolve("Technical interview finished-->please appear for the Manager round")
    }
    else{
      reject("technical interview not cleared please trade carefully")
    }
  },6000)//putting a delay for 200ms
})
let attnManagerInterview=new Promise((resolve,reject)=>{
  //lets suppose this call back function takes 2000 ms or 2 sec per resolve and reject call back method
  setTimeout(()=>{
    //lets suppose we make the project
    let isManagerInterviewDone=true//making the project done for the task
    if(isManagerInterviewDone==true){
      resolve("Manager interview finished-->please appear for the HR round")
    }
    else{
      reject("Manager interview not cleared please trade carefully")
    }
  },11000)//putting a delay for 200ms
})
let attnHRInterview=new Promise((resolve,reject)=>{
  //lets suppose this call back function takes 2000 ms or 2 sec per resolve and reject call back method
  setTimeout(()=>{
    //lets suppose we make the project
    let isHRInterviewDone=true//making the project done for the task
    if(isHRInterviewDone==true){
      resolve("HR interview finished-->you got the Job")
    }
    else{
      reject("HR interview not cleared please trade carefully")
    }
  },16000)//putting a delay for 200ms
})
//let result=""
//now we need to call all of then
getProjectDone.then((message)=>{
  //result+=`${message}`
  console.log(message)
  attnTechnicalInterview.then((message)=>{
    console.log(message)
    attnManagerInterview.then((message)=>{
      console.log(message)
      attnHRInterview.then((message)=>{
        console.log(message)
      }).catch((message)=>{console.log(message)})
    }).catch((message)=>{console.log(message)})
  }).catch((message)=>{console.log(message)})
}).catch((message)=>{
  console.log(message)
  })
