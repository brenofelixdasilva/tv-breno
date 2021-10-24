const tela = document.getElementById('tela');
console.log('tela');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {

    //adiciona o iframe ao apertar o botão para ligar a tv
    if(btn.checked == true){
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.youtube.com/embed/gnIZ7RMuLpU";
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

/* <iframe width="560" height="315" src="https://www.youtube.com/embed/gnIZ7RMuLpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */