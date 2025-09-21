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
