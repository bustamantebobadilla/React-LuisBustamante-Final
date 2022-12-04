import React from "react";

const productos= [
    {id:'1', nombre:'clases personalizadas', idioma:'Inglés', disponibilidad: '16', precio:'250'},
    {id:'2', nombre:'regularizacion', idioma:'Inglés', disponibilidad: '11', precio:'250'},
    {id:'3', nombre:'grupos de conversación', idioma:'Inglés', disponibilidad: '27', precio:'200'},
    {id:'4', nombre:'clases personalizadas', idioma:'Español', disponibilidad: '18', precio:'250'},
    {id:'5', nombre:'regularizacion', idioma:'Español', disponibilidad: '22', precio:'200'},
    {id:'6', nombre:'grupos de conversación', idioma:'Español', disponibilidad: '13', precio:'200'},
    {id:'7', nombre:'clases personalizadas', idioma:'Frances', disponibilidad: '12', precio:'300'},
    {id:'8', nombre:'regularizacion', idioma:'Frances', disponibilidad: '7', precio:'250'},
    {id:'9', nombre:'grupos de conversación', idioma:'Frances', disponibilidad: '9', precio:'250'},

]
const gFetch = (numero) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const condition = true
        if (condition) {

            resolve (productos)

        } else {
            reject ('nada')
        }
        },3000)
    })
}

gFetch()
.then (respuesta => respuesta)
.catch (err => console.log(err))
.then (data => console.log(data))
.finally (()=>console.log('ultimo'))
