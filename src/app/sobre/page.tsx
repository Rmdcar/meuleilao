import styles from "./styles.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.about}>
        <ul>
        <li>         
          Preços abaixo do mercado: Possibilidade de adquirir imóveis com
          descontos significativos.
        </li>
        <li>
          Variedade de imóveis: Opções para todos os gostos e necessidades,
          desde apartamentos até terrenos.
        </li>

        <li>Oportunidade de investimento: boa rentabilidade.</li>
        </ul>
      </div>
    </>
  );
}
