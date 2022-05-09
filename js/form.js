const temas = document.querySelector('.btn')

temas.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == 'light-theme') {
        this.textContent == "dark"
    }
    else{
        this.textContent == "light"
    }
    // console.log("Tema atual:" + className)
})