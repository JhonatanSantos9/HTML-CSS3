




function horacompleta(){
    let newdate = new Date()
    let horas = window.document.querySelector('div#hora')
    horas.innerHTML = new Intl.DateTimeFormat('pt-Br', {
        timeStyle: "long"
    }).format(newdate)
    setTimeout('horacompleta()', 500)
}

function datacompleta(){
    let newdate = new Date()
    let horas = window.document.querySelector('div#data')
    horas.innerHTML = new Intl.DateTimeFormat('pt-Br', {
        dateStyle: "long"
    }).format(newdate)
    setTimeout('horacompleta()', 500)
}
