export class brainHttp{
  constructor(){

  }
  static get(url){
    return new Promise((resolve,reject)=>{
      fetch(url).then((response)=>{
        response.json().then((data)=>{
          resolve(data)
        }).catch((err)=>{
          reject(err)
        })
      })
    })
  }
  static post=(url,data)=>{
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((response)=>{
        response.json().then((data)=>{
          resolve(data)
        }).catch((err)=>{
          reject(err)
        })
      })
    })
  }

  static put=(url,data)=>{
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((response)=>{
        response.json().then((data)=>{
          resolve(data)
        }).catch((err)=>{
          reject(err)
        })
      })
    })
  }

  static delete=(url)=>{
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method:"DELETE",
        headers:{"content-type":"application/json"},
        // body:JSON.stringify(data)
      }).then((response)=>{
        response.json().then((data)=>{
          resolve(data)
        }).catch((err)=>{
          reject(err)
        })
      })
    })
  }
}
