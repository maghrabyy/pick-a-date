import {motion} from 'framer-motion';
import openedGiftBox from '../src/assets/oponedGift.png';
import { useEffect } from 'react';


export type dateOptionType = {
  dateType:string
  dateLocation:string
}
type SelectedGiftType = {
  selectedDateOption:dateOptionType
}
export const SelectedGift = ({selectedDateOption}:SelectedGiftType)=>{
    useEffect(()=>{
          setTimeout(()=>{
            window.open(selectedDateOption.dateLocation)
          },1300)
      },[selectedDateOption.dateLocation])
    return <motion.div 
    transition={{duration:1}} 
    initial={{opacity:0,scale:0}} 
    animate={{opacity:1,scale:1}} 
    className="selected-gift">
      <h1 className='text-4xl text-center py-3 '>{selectedDateOption.dateType}?</h1>
      <img src={openedGiftBox} width={350} alt="opened gift box" />
    </motion.div>
}