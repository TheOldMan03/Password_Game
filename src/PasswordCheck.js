import { getCaptcha } from "./Conditions/Captcha/Captcha.js";
import { LN } from "./Conditions/Translate/Translate.js";
import { randomizer_RT } from "./redux/riddleStates/randomizer.js";
import { gethexColor } from "./Conditions/Colorbox/Colorcondition.js";
import { resetRTimer,setRTimer } from "./redux/riddleStates/rt_redux.js";
import store from "./redux/store.js";

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
    const specialChars = /[`!@#$%^&*()_+\-={};':"|,.<>/?~]/;
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

    if(sum===50){
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
        "He", "Li", "Be","Ne",
        "Na", "Mg", "Al", "Si", "Cl", "Ar","Ca",
        "Sc", "Ti","Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
        "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr","Zr",
        "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
        "Sb", "Te","Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
        "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
        "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
        "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
        "Pa","Np","Pu","Am","Cm","Bk","Cf","Es","Fm",
        "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
        "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
    ];

    for(let i=0;i<periodicTable.length;i++){
        if(pwd.includes(periodicTable[i])){
            return true
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

export const PeriodicSum=(pwd)=>{
    const periodicTable = {
        'H': 1,'He': 2,'Li': 3,'Be': 4,'B': 5,'C': 6,'N': 7,'O': 8,'F': 9,'Ne': 10,'Na': 11,
        'Mg': 12,'Al': 13,'Si': 14,'P': 15,'S': 16,'Cl': 17,

        'Ar': 18,'K': 19,'Ca': 20,'Sc': 21,'Ti': 22,'V': 23,'Cr': 24,'Mn': 25,
        'Fe': 26,'Ni': 28,'Co': 27,'Cu': 29,'Zn': 30,'Ga': 31,'Ge': 32,'As': 33,'Se': 34,
        'Br': 35,'Kr': 36,'Rb': 37,'Sr': 38,'Y': 39,'Zr': 40,'Nb': 41,'Mo': 42,'Tc': 43,
        'Ru': 44,'Rh': 45,'Pd': 46,'Ag': 47,'Cd': 48,'In': 49,'Sn': 50,'Sb': 51,'Te': 52,'I': 53,

        'Xe': 54,'Cs': 55,'Ba': 56,'La': 57,'Ce': 58,'Pr': 59,'Nd': 60,'Pm': 61,'Sm': 62,'Eu': 63,
        'Gd': 64,'Tb': 65,'Dy': 66,'Ho': 67,'Er': 68,'Tm': 69,'Yb': 70,'Lu': 71,'Hf': 72,
        'Ta': 73,'W': 74,'Re': 75,'Os': 76,'Ir': 77,'Pt': 78,'Au': 79,'Hg': 80,'Tl': 81,
        'Pb': 82,'Bi': 83,'Po': 84,'At': 85,'Rn': 86,'Fr': 87,'Ra': 88,'Ac': 89,'Th': 90,
        'Pa': 91,'U': 92,'Np': 93,'Pu': 94,'Am': 95,'Cm': 96,'Bk': 97,'Cf': 98,'Es': 99,
        'Fm': 100,'Md': 101,'No': 102,'Lr': 103,'Rf': 104,'Db': 105,'Sg': 106,'Bh': 107,'Hs': 108,
        'Mt': 109,'Ds': 110,'Rg': 111,'Cn': 112,'Nh': 113,'Fl': 114,'Mc': 115,'Lv': 116,'Ts': 117,'Og': 118
    };

    let sum=0
    let str=""
    let singlePass=false
    let initialChar=""

    for(let i=0;i<pwd.length;i++){

        if(str.length===2){
            str=""
            singlePass=false
            initialChar=""

            i--
            //reset the value
        }

        str+=pwd[i]

        if(!(str in periodicTable)){
            continue
        }

        else{

            if(!singlePass){
                singlePass=true
                sum+=periodicTable[str]
                initialChar=str
            }

            else{
                sum-=periodicTable[initialChar]
                sum+=periodicTable[str]
            }

            //this procedure is followed bcus if suppose the while iterating through the password
            //if the 1st character is H followed by e(which is He)

            //without employing this algo(ie line 296-305)...it would compute both H and He ka atomic number which would be 3
            //this is not a big issue tbh...buts its like a bug

            //employing this algo it would check say H and compute the sum and set singlePass to true
            //if the next character is say 'e' and singlePass is true then it would decrement what had calculated earlier
            //and add the new value 

            //so now the calculation would be sum=1....then sum=0 then sum=2

        }
    }

    if(pwd[[pwd.length-1]] in periodicTable){
        sum+=periodicTable[pwd[pwd.length-1]]
    }


    if(sum===200){
        return true
    }

    return false

}

export const LanguageBarrier=(pwd)=>{
    const EnglishWords=[
        "science","maths","pineapple","bread","light","chair","focusonyourstudies"
    ]

    const Index=LN();
    const LC=pwd.toLowerCase();

    if(LC.includes(EnglishWords[Index])){
        return true;
    }

    return false;
}

export const Riddlemethis=(pwd)=>{
    const riddlewords=["footsteps","coin","egg","towel","promise","silence","river","bottle","age","piano","clock","comb","glove","phone","legs","future"];
    const randomIndex=store.getState().RTRandom.value;
    const dispatch=store.dispatch

    if(randomIndex===-1){
        let x=Math.floor(Math.random()*riddlewords.length);
        dispatch(randomizer_RT(x));
        return;
    }


    if(pwd.includes(riddlewords[randomIndex])){
        dispatch(resetRTimer())
        return true;
    }


    dispatch(setRTimer())
    return false;
}


export const affirmations=(pwd)=>{
    const affirm=["iamloved","iamworthy","iamenough"];

    for(let i of affirm){
        if(pwd.toLowerCase().includes(i)){
            return true;
        }
    }

    return false

}

export const colorcode=(pwd)=>{
    const colorhexstring=gethexColor()

    if(pwd.includes(colorhexstring)){
        return true
    }

    return false
}

export const pwdlength=(pwd)=>{
    const WC=store.getState().wc.value.toString()

    if(pwd.includes(WC)){
        return true;
    }

    return false
}

export const primenumcheck=(pwd)=>{
    const primeNos=["2", "3", "5", "7", "11", "13", "17", "19", "23", "29", "31", "37", "41", 
    "43", "47", "53", "59", "61", "67", "71", "73", "79", "83", "89", "97", "101", 
    "103", "107", "109", "113", "127", "131", "137", "139", "149", "151", "157", "163", 
    "167", "173", "179", "181", "191", "193", "197", "199", "211", "223", "227", "229", 
    "233", "239", "241", "251", "257", "263", "269", "271", "277", "281", "283", "293", 
    "307", "311", "313", "317", "331", "337", "347", "349", "353", "359", "367", "373", 
    "379", "383", "389", "397", "401", "409", "419", "421", "431", "433", "439", "443", 
    "449", "457", "461", "463", "467", "479", "487", "491", "499"]

    for(let i=0;i<primeNos.length;i++){
        if(pwd.includes(primeNos[i])){
            return true;
        }
    }

    return false;

}

