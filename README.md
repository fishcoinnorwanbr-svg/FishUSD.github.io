# FishUSD.github.io

app.js
"use strict"

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle ("ligth-theme");
  
    var className = document.body.className;
    if(className = "dark-theme") {
        this.textContext = "Dark";
    }
    else {
        this.textContext = "Ligth";
    
    }  

}
    
    
    
);





index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple website</title>
    <link rel="stylesheet" href="men.css">
</head>
<body class="ligth-theme">
    <h1>FishCoin</h1><image SRC=c:\Users\Lilian\OneDrive\Imagens\Screenshots\backgroundFISHUSD.png></image> 
    <p id= "msg">  FishUSD tera que ter um BRIEFING apresentavel para darmos suporte a informações notaveis
    .</p>
    <ul>
        <selection class="video"></selection>
                <div class="video"></div>
                <iframe SRC="SRC/c:\Users\Lilian\Downloads\Front-end  FishUSD.mp4"></iframe>
        <li>Produtos FishUSD</li>
    </ul>


    <div>
         <button class="btn">tema</button>
    </div>


    <script src="app.js"></script>
    <noscript>Voce precisa habilitar JavaScript para ver este site completo.</noscript>
  
</body>
</html>



men.css
:root {
    --yellow: #b4a30a;
    --black: #000000;
    --blue: #00a2ff;
}

* {
    color:var(--fontColor);
    font-family: 'Finger Paint', monospace;
}

body {
    background: var(--bg);
}

ul {
    font-family: 'Finger Paint', monospace;
}

li {
    list-style: circle;
}

.list {
    list-style: square;

}
.ligth-theme {
   --bg:var(--black);
   --fontColor:var(--yellow);
   --btnbg: var(--blue);
   --fontColor:var(--yellow);
}

.dark-theme {
    --bg: var(--blue);
    --fontColor:var(--yellow);
    --btnbg: var(--black);
    --fontColor: var(--yellow);
}


.btn {
    position: absolute;
    top:  20px;
    left: 250px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    color: var(--btnfontColor);
    background-color: var(--btnbg);
}

.btn:focus {
    outline-style: none;
}
