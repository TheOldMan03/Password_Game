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
