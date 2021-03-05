/* function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

java = document.querySelector(".java");
for (let i = 0; i < 96; i++){
    java.style.width = str(i)+"%"
    await sleep(5000);
} */

init();

function init(){
    let langBars = document.querySelectorAll(".skill");
    let levels = [95, 90, 85, 80, 80, 75, 75];
    for (let i = 0; i < langBars.length; i++){
        loadBar(String(langBars[i].id), levels[i]);
    }
}

function loadBar(lang, skill){
    let i = 0;
    if(i == 0){
        i = 1;
        let elem = document.querySelector("#"+lang);
        let width = 1;
        let id = setInterval(frame, 15);
        function frame(){
            if(width >= skill){
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}