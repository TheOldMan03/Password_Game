import { getCaptcha } from "./Conditions/Captcha";
import { ReturnWordle } from "./Conditions/Wordle";


export const CountCheck=(num)=>{
    if(num>=5){
        return true;
    }

    else{
        return false;
    }
}

export const NumberCheck=(pwd)=>{
    const Regex=/\d/;
    return Regex.test(pwd);
}

export const UpperCheck=(pwd)=>{
    const Regex=/[A-Z]/
    return Regex.test(pwd)
}

export const SpecialCheck=(pwd)=>{
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(pwd);
}

export const AddUptoFive=(pwd)=>{
    const Regex=/[0-9]/
    let sum=0;


    let i=0;
    for(i=0;i<pwd.length;i++){
        if(Regex.test(pwd[i])){
            sum+=Number(pwd[i]);
        }
    }

    if(sum===25){
        return true;
    }

    else{
        return false;
    }
}

export const MonthofYear=(pwd)=>{
    const months=["january","february","march","april","may","june","july","august","september","october","november","december"]
    const lowerCase=pwd.toLowerCase();


    for(let i of months){
        if(lowerCase.includes(i.toLowerCase())){
            return true;
        }
    }
    
    return false;

}

export const HasRomanNumeral=(pwd)=>{
    const Roman=["I","V","X","L","C","D","M"]

    for(let i of Roman){//Niko,lets go bowling
        if(pwd.includes(i)){
            return true;
        }
    }

    return false;
}

export const HasSponsors=(pwd)=>{
    const sponsor=["pepsi","starbucks","shell"]

    for(let i of sponsor){
        if(pwd.toLowerCase().includes(i)){
            return true;
        }
    }

    return false;
}

export const CaptchaCheck=(pwd)=>{
    if(pwd.includes(getCaptcha())){
        return true;
    }

    return false;
}


export const CheckWordle=(pwd)=>{

    if(pwd.includes(ReturnWordle())){
        return true;
    }

    return false;

}



export const Check2letterElem=(pwd)=>{
    const elem=["He","Li","Be","Ne","Na","Mg","Al","Si","Cl","Ar","Ca","Sc","Ti","Cr","Mn","Fe","Ni","Co","Cu","Zn","Ga"]
}
