const ip={
    get:(f)=>{
        fetch("https://api.db-ip.com/v2/free/self", {
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
          })
          .then((response)=>response.json())
          .then((data) => {
            f(data)
          })
          return 'REQ-GET:'+true;
    }
}
