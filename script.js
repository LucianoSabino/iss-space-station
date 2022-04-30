function apiData () {
    const url = `http://api.open-notify.org/iss-now.json`
    fetch(url).then(response => response.json()).then(data => {
        console.log(data)

        const date = new Date(data.timestamp * 1000);

        let mes = date.getMonth() + 1;

        if (mes <= 9) {
            const dia = `Data: ${date.getDate()}/0${mes}/${date.getFullYear()}`
            const horas = `Horas: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            
            const latitude = `latitude:  ${data.iss_position.latitude}`
            const longitude = `longitude:  ${data.iss_position.longitude}`

            const list = document.querySelector('#localizacao');

            list.innerHTML = `<p>${dia}</p> <p>${horas}</p> <p>${latitude}</p> <p>${longitude}</p>`
            list.innerHTML += `<p>Dados fornecido pela NASA</p>`
        } else {
            const dia = `Data: ${date.getDate()}/${mes}/${date.getFullYear()}`
            const horas = `Horas: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            
            const latitude = `latitude:  ${data.iss_position.latitude}`
            const longitude = `longitude:  ${data.iss_position.longitude}`

            const list = document.querySelector('#localizacao');

            list.innerHTML = `<p>${dia}</p> <p>${horas}</p> <p>${latitude}</p> <p>${longitude}</p>`
            list.innerHTML += `<p>Dados fornecido pela NASA</p>`
        }
       // local.innerHTML = `Lontitude: ` + data.iss_position.longitude
    })
}

function fetchApiData () {
    apiData()
    setInterval(apiData, 2000)
};