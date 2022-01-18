import React from "react";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ name }) => {
    let navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "yellow",
        borderStyle: "solid",
        margin: "3px",
        minHeight: "50px",
        minWidth: "150px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor: "pointer"
      }}
      onClick={()=>{navigate(`/${name}`)}}
    >
      {name}
    </div>
  );
};

export default PokeCard;
