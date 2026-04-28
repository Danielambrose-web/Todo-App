import React, { useState } from "react";

const New = () => {
  //   let x = 30;
  //   const array = ["home", "about", "contact", "copyright"];
  // let data ='x' ;

  const [X, setX] = useState(0);
  function clicked() {
    setX(X+1);
  }
  return (
    <div>
      {/* {x}
      {array.map((content) => {
        return <p> {content}</p>;
      })} */}

      {/* {data === 'boy'?<h2>MALES</h2>:<h3>Females</h3>} */}
      <button onClick={clicked}>Clicked</button>
      {/* {X} */}
      {/* {X=== 10?<p>completed</p>:<p>contd</p>} */}
     <Try data={X}/>
    </div>
  );
};

export default New;
