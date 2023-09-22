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

function Product(num,p){
    return p*num;
}

function RomanEvaluate(rom){
    const RomToNum={
        "M":1000,
        "D":500,
        "C":100,
        "L":50,
        "X":10,
        "V":5,
        "I":1
    }
    let sum=0

    for(let i=0;i<rom.length;i++){
        if(RomToNum[rom[i]]<RomToNum[rom[i+1]]){
            sum-=RomToNum[rom[i]]
        }

        else{
            sum+=RomToNum[rom[i]]
        }
    }

    return sum
}

 export function Evaluate(pwd){
    const Roman=["I","V","X","L","C","D","M"]
    let p=1

    for(let i=0;i<pwd.length;i++){
        if(Roman.includes(pwd[i])){//this means that it found a Roman character
            str=""
            while(Roman.includes(pwd[i])){
                str+=pwd[i]
                i++;
            }

            let y=RomanEvaluate(str)
            p=Product(y,p)

        }
    }

    if(p===120){
        return true
    }

    return false
}

