"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function AtletasData({ params }) {
  const [atleta, setAtleta] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAtleta = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/atletas?id=${params.id}`
        );
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await res.json();

        // Se data for um array, pegue o primeiro item.

        setAtleta(data[0]);

        setLoading(false);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchAtleta();
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container align center h-screen mx-auto grid grid-rows-auto">
      <div className="grid lg:grid-cols-2 cols-1">
        <img src="/imagens/banners/banner-home.png" alt="Banner" />
        <div className="text-violet-100 text-4xl" >
        <img src={`https://flagsapi.com/${atleta.nationality.abbr}/flat/64.png`}/> 
          <h1 className="text-violet-100 text-4xl">
          Nome: {atleta?.name || "Nome não disponível"}
          </h1>
         
          <p>Idade: {atleta?.age || "Idade não disponível"}</p>
          
        </div>
      </div>
    </div>
  );
}
