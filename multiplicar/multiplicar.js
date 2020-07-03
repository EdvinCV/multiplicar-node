// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log("==========================================".green);
    console.log("========== Tabla de Multiplicar ==========".green);
    console.log("==========================================".green);
    for(let i = 0; i < limite; i++){
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

let crearArchivo = (base) => {
    return new Promise( (resolve, reject ) => {

        if( !Number(base) ){
            reject(`El valor  introducido "${base}", NO es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++){
            data += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if(err){
                reject(err);
            } else {
                resolve(`Se ha creado el archivo: ` + `tabla-${base}.txt`.red);
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


