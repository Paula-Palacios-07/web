const validateString = (cad)=>{
    //Ternario: abreviacion del if else    
    let response =(cad.length>=3) ? true : false;
    console.log(response);
    return response;
}

const validateAvg = (num) =>{
   let response = (num>=0 && num<=5) ? true : false;
   return response;
}

const checkAvg = (value) =>{
    let result = (value >=3 && value <=5) ? "APROBADO" :
    "REPROBRADO";
    return result;
}
export{ validateString,validateAvg as vAvg, checkAvg}
