import React from "react";
import { useEffect, useState } from "react";
import { getPokeList } from "../services/pokemon";
import PokeCard from "../components/PokeCard";

const Home = () => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    getPokeList().then(({ data }) => {
      //console.log("ahah: ", data?.results);
      setPokeList(data?.results || []);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "100vh",
        alignContent: "center",
      }}
    >
      {pokeList?.map((item) => (
        <PokeCard name={item?.name} key={item?.name} />
      ))}
    </div>
  );
};

export default Home;
