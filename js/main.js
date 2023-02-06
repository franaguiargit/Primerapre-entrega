const nombre = prompt("Ingrese su nombre: ")

let nota1 = parseInt (prompt(`${nombre} ingrese la primera nota del primer semestre: `))
let nota2 = parseInt (prompt(`${nombre} ingrese la segunda nota del primer semestre: `))
let nota3 = parseInt (prompt(`${nombre} ingrese la tercera nota del primer semestre: `)) 

const promediosemestre1 = (nota1 + nota2 + nota3) / 3

alert(`Para aprobar el primer sgemestre ${nombre} deberia tener un promedio mayor o igual a 4`)

alert("El promedio de las 3 notas del primer semestre es: "+promediosemestre1)

if (promediosemestre1 >= 4){
    alert(`${nombre} esta aprobado/a`)

} else if (promediosemestre1 < 4) {
    alert(`${nombre} no esta aprobado/a`)
}

let nota1Semestre2 = parseInt (prompt(`${nombre} la primera nota del segundo semestre: `))
let nota2Semestre2 = parseInt (prompt(`${nombre} la primera nota del segundo semestre: `))
let nota3Semestre2 = parseInt (prompt(`${nombre} la primera nota del segundo semestre: `))

alert(`Para aprobar el segundo Semestre ${nombre} deberia tener un promedio mayor o igual a 4`)

const promedioSemestre2 = (nota1Semestre2+ nota2Semestre2 + nota3Semestre2) / 3

alert("El promedio de las 3 notas del segundo semestre es: "+promedioSemestre2)

/*  if (promediosemestre2 >= 4){
    alert("Usted esta aprobado")

} else if (promediosemestre2 < 4) {
    alert("Usted no esta aprobado")
}  */
const promedioAnual = (promediosemestre1 + promedioSemestre2) / 2

alert("Su promedio anual equivalente a las notas de los 2 semestres es: "+promedioAnual)


while(promedioAnual >= 4){
    alert(`Felicitaciones ${nombre}!!, usted aprobó el año.`)
}

while(promedioAnual < 4){
    alert(`${nombre} usted no aprobó el año.`)
}


        
     
        
    