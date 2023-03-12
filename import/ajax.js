   

const $ajax={
        get:(data,clb)=>{
            fetch(data.url,{
        method:"GET",
        headers:{
            "X-Master-Key":data.key
        }
    })
    .then((res) => res.json())
    .then((data) => {
        if(clb == undefined){
            console.error("Not callback function !")
            console.log(data)
        }
        if(clb !== undefined){
            clb(data)
        }
    })   
    return 'GET'
        },
    post:(data,clb)=>{
        fetch(data.url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "X-Master-Key":data.key
        },
        body:JSON.stringify(data.data)
    })
    .then((res) => {
        if(clb == undefined){
            console.error("Not callback function !")
            console.log(data)
        }
        if(clb !== undefined){
            clb(res)
        }
    })
    .then((data) => {return 'POST';})   
    return 'POST'
    },
    help:()=>{
          window.location="https://damsea.github.io/import/description/ajax.txt";
       }
    }
