// Richiamare la data attuale 

let date = new Date()
console.log(date)

// Mostrarla in una pagina HTML 
    
document.getElementById('screen').innerHTML = date

// Mostrare elementi singoli della data

console.log(date.getDate())
console.log(date.getHours())

document.getElementById('hours').innerHTML = date.getHours()
document.getElementById('minutes').innerHTML = date.getMinutes()
document.getElementById('seconds').innerHTML = date.getSeconds()


// Creare un sistema per la formattazione in formato europeo 

let dateIT = date.toLocaleDateString('it-IT')


// Mostrare la data formattata in una pagina HTML 

document.getElementById('date').innerHTML = dateIT


