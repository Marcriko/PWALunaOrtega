function tabla() {
    fetch("https://reqres.in/api/users")
        .then((res) => res.json()
            .then((respuesta) =>

                respuesta.data.forEach(element => {
                    console.log(element)
                    let row = document.createElement("tr")
                    let td2 = document.createElement("td")
                    let td3 = document.createElement("td")
                    let td4 = document.createElement("td")
                    td4.append(element.email)
                    td3.append(element.last_name)
                    td2.append(element.first_name)
                    row.append(td2)
                    row.append(td3)
                    row.append(td4)

                    let cuerpo = document.getElementById("bodyTabla")
                    cuerpo.append(row)
                })

            ))

}
function guardarPersona() {
    let nombre = document.getElementById("firstName").value
    let apellido = document.getElementById("lastName").value
    let correo = document.getElementById("email").value
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td3.append(correo)
    td2.append(apellido)
    td1.append(nombre)
    row.append(td1)
    row.append(td2)
    row.append(td3)

    let cuerpo = document.getElementById("bodyTabla")
    cuerpo.append(row)
    
    document.getElementById("firstName").value =""
    document.getElementById("lastName").value=""
    document.getElementById("email").value=""

    alert("Registro correcto")


}