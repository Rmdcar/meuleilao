'use client'

import React from 'react';
import styles from './page.module.css'

export default function Page() {
  const states = [
    { name: "Acre", abbreviation: "AC", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//ACRE.pdf" },
    { name: "Alagoas", abbreviation: "AL", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//ALAGOAS.pdf" },
    { name: "Amapá", abbreviation: "AP", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//AMAPa.pdf" },
    { name: "Amazonas", abbreviation: "AM", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//AMAZONAS.pdf" },
    { name: "Bahia", abbreviation: "BA", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//BAHIA.pdf" },
    { name: "Ceará", abbreviation: "CE", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//CEARa.pdf" },
    { name: "Distrito Federal", abbreviation: "DF", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//df.pdf" },
    { name: "Espírito Santo", abbreviation: "ES", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//ESPIRITO%20SANTO.pdf" },
    { name: "Goiás", abbreviation: "GO", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//GOIAS.pdf" },
    { name: "Maranhão", abbreviation: "MA", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//MARANhao.pdf" },
    { name: "Mato Grosso", abbreviation: "MT", url: "    https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//MATO%20GROSSO.pdf" },
    { name: "Mato Grosso do Sul", abbreviation: "MS", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//MATO%20GROSSO%20DO%20SUL.pdf" },
    { name: "Minas Gerais", abbreviation: "MG", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//MINAS%20GERAIS.pdf" },
    { name: "Pará", abbreviation: "PA", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//PARa.pdf" },
    { name: "Paraíba", abbreviation: "PB", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//PARAiba.pdf" },
    { name: "Paraná", abbreviation: "PR", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//PARANa.pdf" },
    { name: "Pernambuco", abbreviation: "PE", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//PERNAMBUCO.pdf" },
    { name: "Piauí", abbreviation: "PI", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//PIAUI.pdf" },
    { name: "Rio de Janeiro", abbreviation: "RJ", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//rj.pdf" },
    { name: "Rio Grande do Norte", abbreviation: "RN", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//rn.pdf" },
    { name: "Rio Grande do Sul", abbreviation: "RS", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//rs.pdf" },
    { name: "Rondônia", abbreviation: "RO", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//RONDonia.pdf" },
    { name: "Roraima", abbreviation: "RR", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//RORAIMA.pdf" },
    { name: "Santa Catarina", abbreviation: "SC", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//sc.pdf" },
    { name: "São Paulo", abbreviation: "SP", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//sp.pdf" },
    { name: "Sergipe", abbreviation: "SE", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//SERGIPE.pdf" },
    { name: "Tocantins", abbreviation: "TO", url: "https://naorsnegnpkilyjjfqaz.supabase.co/storage/v1/object/public/custas//TOCANTINS.pdf" }
  ];

  const handleCardClick = (url: string) => {
    // Abre o link externo em uma nova aba
    window.open(url, '_blank');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Valor do Registro em Cartório por Estado</h1>
      
      <div className={styles.grid}>
        {states.map((state) => (
          <div 
            key={state.abbreviation}
            onClick={() => handleCardClick(state.url)}
            className={styles.card}
          >
            <div className={styles.stateAbbreviation}>{state.abbreviation}</div>
            <div className={styles.stateName}>{state.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}