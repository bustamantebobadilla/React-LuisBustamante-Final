let obj= [
    {id:'1', nombre:'Clases personalizadas', idioma:'Inglés', disponibilidad: '16', precio:'$ 250',  foto: "./media/You_logo.jpg"},
    {id:'2', nombre:'Regularizacion', idioma:'Inglés', disponibilidad: '11', precio:'$250',foto: "./media/You_logo.jpg"},
    {id:'3', nombre:'Grupos de conversación', idioma:'Inglés', disponibilidad: '27', precio:'$ 200',foto:"./media/You_logo.jpg"},
    {id:'4', nombre:'Clases personalizadas', idioma:'Español', disponibilidad: '18', precio:'$ 250',foto: "./media/You_logo.jpg"},
    {id:'5', nombre:'Regularizacion', idioma:'Español', disponibilidad: '22', precio:'$ 200',foto: "./media/You_logo.jpg" },
    {id:'6', nombre:'Grupos de conversación', idioma:'Español', disponibilidad: '13', precio:'$ 200',foto: "./media/You_logo.jpg" },
    {id:'7', nombre:'Clases personalizadas', idioma:'Frances', disponibilidad: '12', precio:'$ 300',foto:"./media/You_logo.jpg" },
    {id:'8', nombre:'Regularizacion', idioma:'Frances', disponibilidad: '7', precio:'$ 250',foto: "./media/You_logo.jpg"},
    {id:'9', nombre:'Grupos de conversación', idioma:'Frances', disponibilidad: '9', precio:'$ 250',foto:"./media/You_logo.jpg"},
]

export const gFetch = (id)=>{
    return new Promise((resolve, reject) => {
      const condition = true;
      if (condition) {
        setTimeout(() => {
          resolve(obj);
        }, 3000);
      } else {
        reject("nada");
      }
    });

}