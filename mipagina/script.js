
const alto = window.screen.height
const ancho = window.screen.width
const listaEstrellas = []
function crearEstrellas(){
    for(let i=0;i<30;i++){
        let stars = document.createElement("div")

        let size = Math.floor(Math.random()*10)

        stars.style.height = `${size}px`
        stars.style.width = `${size}px`
        stars.style.position = "absolute"
        stars.style.background = "white"
        stars.style.borderRadius = "50%"
        stars.style.boxShadow = "0 0 20px 5px rgba(0, 150, 255, 0.8)"
        
        let posY = Math.floor(Math.random()*alto)
        let posX = Math.floor(Math.random()*ancho)
        stars.style.top = `${posY}px`
        stars.style.left = `${posX}px`

        let duracion = Math.random()*3 +1
        let retraso = Math.random() * 5
        stars.style.animation = `parpadeo ${duracion}s ease-in-out ${retraso}s infinite`
        
        let velocidad = Math.random()*1 +0.5
        document.body.appendChild(stars)
        listaEstrellas.push({
            el:stars,
            x:posX,velocidad
        })
        
    }
}
function moverEstrellas(){
    listaEstrellas.forEach(estrella =>{
        estrella.x -= estrella.velocidad
        if (estrella.x < -1){
            estrella.x = ancho
        }
        estrella.el.style.left = `${estrella.x}px`
    })
    requestAnimationFrame(moverEstrellas)
}
document.addEventListener("DOMContentLoaded", () => {
    crearEstrellas()
    moverEstrellas()
})
