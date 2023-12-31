import React,{useState,useEffect} from 'react'
import '../Condition/Condition.css'
import './Translate.css'
import '../Captcha/Captcha.css'


const RandomizerWord=()=>{
    const LanguageWords=[
        "विज्ञान","गणित","अनानास","रोटी","रोशनी","कुर्सी","अपना पढ़ाई पर ध्यान दें",
        "科学","数学","パイナップル","パン","ライト","椅子","勉強に集中してください",
        "علوم","رياضيات","أناناس","خبز","ضوء","كرسي","ركز على دراستك",
        "Wissenschaft","Mathe","Ananas","Brot","Licht","Stuhl","Konzentrieren Sie sich auf Ihr Studium",
    ]

    const LuckyNumber=Math.floor(Math.random()*28)
    const LuckyLanguage=LanguageWords[LuckyNumber];

    return [LuckyLanguage,LuckyNumber]
}

let val=-1;

const Translate = ({rulename,ruledesc,trueValue}) => {

    const [LanguageW,setLanguageW]=useState("")
    
    function fun(){
        
        let x=RandomizerWord();
        setLanguageW(x[0])
        val=x[1];
        
    }

    useEffect(fun,[])


  return (
    <div className='rule'>
      <div id="upperhalf" className={trueValue? 'true-upper':'false-upper'}>{rulename}</div>

      <div id="lowerhalf" className={trueValue? 'true-lower':'false-lower'}>
        {ruledesc}

        <div className="Capt">
            <div className="captcha_box" id="translate_box">
              {LanguageW}
            </div>

        </div>

      </div>
    </div>
  )
}

export const LN=()=>{
    const engWIndex=val%7;
    return engWIndex;
}

export default Translate
