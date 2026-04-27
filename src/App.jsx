import React from 'react'
import { useState } from 'react';
import Try from './component/Try';

const App = () => {
  // return (
  //   <div>
  //     {/* <New/> */}

  //   </div>
  // )

    const [X, setX] = useState(0);
    function clicked() {
      setX(X+1);
    }
    return (
      <div>
        <button onClick={clicked}>Clicked</button>
       <Try data={X} fn ={setX}/>
      </div>
    );
}

export default App
