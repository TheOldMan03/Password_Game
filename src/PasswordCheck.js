import { getCaptcha } from "./Conditions/Captcha";

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
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"|,.<>/?~]/;
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

    const captcha=getCaptcha();

    if(captcha===""){
        return false
    }

    if(pwd.includes(captcha)){
        return true;
    }

    return false;
}

export const Check2letterElem=(pwd)=>{
    const periodicTable = [
        "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
        "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
        "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
        "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
        "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
        "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
        "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
        "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
        "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
        "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
        "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
        "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
    ];

    for(let i=0;i<periodicTable.length;i++){
        if(periodicTable[i].length===2){
            if(pwd.includes(periodicTable[i])){
                return true
            }
        }
    }

    return false;
}

export const LeapYearCheck=(pwd)=>{
    const nums=["1","2","3","4","5","6","7","8","9","0"]
    let numString=""

    for(let i=0;i<pwd.length;i++){
        numString=""
        if(nums.includes(pwd[i])){
            while(nums.includes(pwd[i])){
                numString+=pwd[i]
                i++;
            }

            //after generating the number string
            const ActualNum=Number(numString)

            if(ActualNum%4===0 && ActualNum%100===0 && ActualNum%400===0){
                return true;
            }
        }
    }

    return false

}

