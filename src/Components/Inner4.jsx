import React, { useContext } from "react";
import Usercontext from "../Context/Usercontext";
function Inner4() {
  const { user, setuser } = useContext(Usercontext);
  const handleclick = () => {
    setuser("baabu");
  };

  // if(number1==5){
  //     return (
  //         <>
  //           <button>login</button>
  //         </>
  //       )
  // }else{
  //     return (
  //         <>
  //           <button>logout</button>
  //         </>
  //       )
  // }
  return (
    <>
      {user}
      <button onClick={handleclick}>user change</button>
    </>
  );
}

export default Inner4;
