let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollArriba = document.documentElement.scrollTop
    for(var i=0; i< animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado -290 < scrollArriba){
            animado[i].style.opacity = 1;
        }
    }
}
window.addEventListener("scroll", mostrarScroll);
