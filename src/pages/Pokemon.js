import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../services/pokemon";
const Pokemon = () => {
  let params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});
  useEffect(() => {
    getPokemonDetails(params?.pokemonName).then(({ data }) => {
      setPokemonDetails(data);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginBottom: 30,
        marginTop: 30,
      }}
    >
      <h1>{pokemonDetails?.name}</h1>
      <img
        src={
          pokemonDetails?.sprites?.other?.dream_world?.front_default ||
          pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default
        }
      />
      <span style={{ marginBottom: "10px", marginTop:'10px'}}>
        <b>Type:</b>
        {pokemonDetails?.types?.map((item) => (
          <span
            style={{
              color: "white",
              backgroundColor: "blue",
              borderRadius: "5px",
              marginLeft: "5px",
              padding: "0px 5px 5px 5px",
            }}
          >
            {item?.type?.name}
          </span>
        ))}
      </span>
      <span style={{ marginBottom: "10px" }}>
        <b>Stats:</b>
        {pokemonDetails?.stats?.map((item) => (
          <span
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "5px",
              marginLeft: "5px",
              padding: "0px 5px 5px 5px",
            }}
          >{`${item?.stat?.name} :${item?.base_stat}`}</span>
        ))}
      </span>
      <h2>Attacks:</h2>
      <span style={{ display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
        {pokemonDetails?.moves?.map((item) => (
          <span
            style={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "5px",
              marginLeft: "5px",
              marginTop:'5px',
              padding: "0px 5px 5px 5px",
            }}
          >{item?.move?.name}</span>
        ))}
      </span>
    </div>
  );
};

export default Pokemon;
