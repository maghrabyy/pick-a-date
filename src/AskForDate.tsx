import { useState } from "react";
import tekaTakaImg from '../src/assets/tekataka.png';

type AskForADateType = {
  yesClickedCallbk:()=>void
}
export const AskForADate = ({yesClickedCallbk}:AskForADateType)=>{
    const [isHovered,setIsHovered] = useState(false);

    const changeNoBtnPosition = (e:any) =>{    
      setIsHovered(true)
        const randXNum = Math.floor(Math.random()*(window.innerWidth - 50))
        const randYNum = Math.floor(Math.random()*(window.innerHeight - 50))
        e.target.style.top = `${randYNum}px`
        e.target.style.left = `${randXNum}px`;
      }
    return <div className="ask-for-a-date px-2">
    <h1 className='sm:text-4xl text-[1.4rem] text-center py-4'>Do you wanna go on a date with me?</h1>
    <div className={`flex gap-2 ${isHovered? 'static' : 'relative'}`}>
      <button onClick={yesClickedCallbk} className='yesBtn bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md font-semibold shadow-sm shadow-green-700'>Yes</button>
      <button onMouseEnter={changeNoBtnPosition} onClick={changeNoBtnPosition} className='noBtn bg-red-500 text-white px-4 py-2 rounded-md font-semibold shadow-sm shadow-red-700 absolute left-[calc(100%-55px)] duration-300 ease-out'>No</button>
    </div>
    <img src={tekaTakaImg} alt="teka taka" />
</div>
} 