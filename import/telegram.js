const Telegram={
    help:function(){
         window.location="https://damsea.github.io/import/description/telegram.txt";
    },
    sendMessage:(token,data,clb) => {
        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${data.id}&text=${data.data}`)
        .then((res) => {
            res.json();
            if(clb == undefined){
                console.info("Not callback function !")
            }
            if(clb !== undefined){
                clb(res)
            }
        })
        .then((dt) => {
            return "200"
        })
        return "Sending message!"
    },
    data:(p)=>{
      
        var id_token='U2FsdGVkX18y0Q6Qh0mB5YC73ydfHBcibp8PQTvvOQ34btttTlmeQWZrtqK3zEE7p8sbGXFNyWn1zfTKXCE2CC5Vff+I4ZP8vK0KwJgghquTy0Z7Dgdx7R6cdyu14wy/XhEmDe0ML+tsdZvr2Yk4Ww==';
        return JSON.parse(decrypt(id_token,p));
    }
}
