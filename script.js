
const alto = window.screen.height
const ancho = window.screen.width
const listaEstrellas = []
const planet = document.createElement("div")
const detallesPlanet = document.createElement("div")
function crearEstrellas(){
    for(let i=0;i<30;i++){
        let stars = document.createElement("div")

        let size = Math.floor(Math.random()*10)

        //Propiedades
        stars.style.height = `${size}px`
        stars.style.width = `${size}px`
        stars.style.position = "absolute"
        stars.style.background = "white"
        stars.style.borderRadius = "50%"
        stars.style.boxShadow = "0 0 20px 5px rgba(0, 150, 255, 0.8)"
        
        //Posicion
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
function crearPlaneta(){
    
    planet.style.background = "rgba(1, 1, 49, 0.45)"
    planet.style.height = `20vh`
    planet.style.width = `20vh`
    planet.style.position = "absolute"
    planet.style.borderRadius = "50%"
    planet.style.boxShadow = "0 0 10vh 5px rgba(35, 35, 100, 0.7)"
    planet.style.top = `10vh`

    detallarPlaneta()
    document.body.appendChild(planet)
}
function detallarPlaneta(){
    planet.appendChild(detallesPlanet)
    //Parte brillante
    detallesPlanet.style.background = "rgba(238, 238, 241, 0.46)"
    detallesPlanet.style.height = `18vh`
    detallesPlanet.style.width = `18vh`
    detallesPlanet.style.position = "absolute"
    detallesPlanet.style.borderRadius = "50%"
    detallesPlanet.style.boxShadow = "inset 0 0 2vh 1vh rgba(1, 1, 49, 0.45)"
    detallesPlanet.style.top = `1vh`
    detallesPlanet.style.left = `1vh`
}
let posX = 30
function moverPlaneta(){
    posX += 0.1
    if (posX >ancho){
        posX = -200
    }
    planet.style.left = `${posX}px`
    requestAnimationFrame(moverPlaneta)
}
document.addEventListener("DOMContentLoaded", () => {
    crearEstrellas()
    moverEstrellas()
    crearPlaneta()
    moverPlaneta()
})
