const tela = document.getElementById('tela');
console.log('tela');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');

//adiciona o iframe ao apertar o botão vermelho para ligar a tv
btn.addEventListener('click', function(e) {
    if(btn.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/hqgcfQ4qprY";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão amarelo para ligar a tv
btn2.addEventListener('click', function(e) {
    if(btn2.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/EFpQXOQ4jqI";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão roxo para ligar a tv
btn3.addEventListener('click', function(e) {
    if(btn3.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/3K8iccC8qGg";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão verde para ligar a tv
btn4.addEventListener('click', function(e) {
    if(btn4.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/ZISgrtGa4OE";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão azul para ligar a tv
btn5.addEventListener('click', function(e) {
    if(btn5.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/Ejkb_YpuHWs";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão laranja para ligar a tv
btn6.addEventListener('click', function(e) {
    if(btn6.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/7uOX9drgxkw";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão preto para ligar a tv
btn7.addEventListener('click', function(e) {
    if(btn7.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/S__hkA1yXWU";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

//adiciona o iframe ao apertar o botão vinho para ligar a tv
btn8.addEventListener('click', function(e) {
    if(btn8.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/sYMI7ogy1ZI";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.scrolling = "0";
        iframe.style.background = "#343837";
        iframe.style.borderRadius = "10px";
        iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.cookie = "none";

        tela.appendChild(iframe);
    }
    else {
        const iframeCheck = document.getElementsByTagName('iframe');
        if(iframeCheck.length > 0){
            iframeCheck[0].remove();
        }
    }
})

/* video btn <iframe width="560" height="315" src="https://www.youtube.com/embed/hqgcfQ4qprY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

/* video btn2 <iframe width="560" height="315" src="https://www.youtube.com/embed/EFpQXOQ4jqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

/* video btn4 <iframe width="560" height="315" src="https://www.youtube.com/embed/ZISgrtGa4OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/

/* video btn5 <iframe width="560" height="315" src="https://www.youtube.com/embed/Ejkb_YpuHWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

/* video btn6 <iframe width="560" height="315" src="https://www.youtube.com/embed/7uOX9drgxkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

/* video btn7 <iframe width="560" height="315" src="https://www.youtube.com/embed/S__hkA1yXWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

/* video btn8 <iframe width="560" height="315" src="https://www.youtube.com/embed/sYMI7ogy1ZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */