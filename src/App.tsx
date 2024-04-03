import './App.css';
import { useState } from 'react';
import { AskForADate } from './AskForDate';
import { DateOptions } from './DateOptions';
function App() {
  const [yesSelected,setYesSelected] = useState(false);

  const yesClickedHandler = ()=>{
    setYesSelected(true);
  }

  return (
    <div className="App h-screen bg-[url('assets/floralbg.jpg')] bg-cover">
      <div className="flex justify-center items-center h-full">
        {
          yesSelected?
            <DateOptions />
          :
          <AskForADate yesClickedCallbk={yesClickedHandler} />}
      </div>
    </div>
  );
}

export default App;
