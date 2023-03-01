var aes='https://ummx.github.io/import/script/aes.js';
var telegram_api='https://ummx.github.io/import/script/telegram-api.js';
var sha256='https://blcobar.github.io/import/sha256.js';
var loading="https://blcobar.github.io/import/loading.js";
var sendfile='https://damsea.github.io/import/sendfile.js';

function import_script(url){
    const para = document.createElement("script");
para.src = url;
document.head.appendChild(para);
return 'import script !'
}
