import {motion} from 'framer-motion';
import giftBox from '../src/assets/gift.png';
import { useState } from 'react';
import { SelectedGift, dateOptionType } from './SelectedGift';

export const DateOptions = ()=>{
  const [selectedGift,setSelectedGift] = useState(false);
  const [dateOption,setDateOption] = useState<dateOptionType | null>(null);

  const giftClickedHandler = (dateOpt:dateOptionType)=>{
    setSelectedGift(true);
    setDateOption(dateOpt)
  }
  const dateOptions = [
    {
      dateType:'Sushi Date',
      dateLocation:'https://www.google.com/maps/dir//Al+Gabalayah,+Zamalek,+Cairo+Governorate+4270120/@30.0579521,31.1352242,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x145840dfee16b0ef:0x28ceda22395b3295!2m2!1d31.217629!2d30.057964?entry=ttu'
    },
    {
      dateType:'Pizza Date',
      dateLocation:'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEAgEEC4YrwEYxwEYgAQYjgUyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDINCAIQLhivARjHARiABDINCAMQABiDARixAxiABDIQCAQQLhivARjHARiABBiOBTIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTExMjQzajBqOagCALACAQ&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KSMPKCRVQVgUMeKLb6Wn3YIR&daddr=Mecca+El-Mokarrama,+Ad+Doqi,+Dokki,+Giza+Governorate+3751401'
    },
    {
      dateType:'Steak Date',
      dateLocation:'https://www.google.com/maps/dir//30.092627,31.328255/@30.0927296,31.245486,12z/data=!3m1!4b1?entry=ttu'
    },
  ]
  return selectedGift? 
    <SelectedGift selectedDateOption={dateOption!} />
    : <div className="date-option-wraper">
      <motion.h1 initial={{opacity:0}} animate={{opacity:100}} className='text-4xl text-center py-4'>Pick one</motion.h1>
      <div className='date-options flex gap-2'>
      <motion.img
        initial={{opacity:0,translateY:'100%'}}
        animate={{opacity:1,translateY:0}}
        onClick={()=>giftClickedHandler(dateOptions[0])}
        src={giftBox}
        className='sm:w-40 w-24 cursor-pointer hover:scale-105 duration-500'
        alt="gift box" />
      <motion.img
        initial={{opacity:0,translateY:'100%'}}
        animate={{opacity:1,translateY:0}}
        onClick={()=>giftClickedHandler(dateOptions[1])}
        src={giftBox}
        className='sm:w-40 w-24 cursor-pointer hover:scale-105 duration-500 delay-300'
        alt="gift box" />
      <motion.img
        initial={{opacity:0,translateY:'100%'}}
        animate={{opacity:1,translateY:0}}
        onClick={()=>giftClickedHandler(dateOptions[2])}
        src={giftBox}
        className='sm:w-40 w-24 cursor-pointer hover:scale-105 duration-500 delay-500'
        alt="gift box" />
        </div>
    </div>
}