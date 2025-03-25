'use client'

import React from 'react';
import styles from './page.module.css'

export default function Page() {
  const states = [
    { name: "Acre", abbreviation: "AC", url: "https://doc-0s-08-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/nes73prqn4vbd4nmn4k7vul1kop05j0l/l8sgkfrbaqfu07edc5hd964ms71rsnag/1742907975000/3/109773888817604989957/APznzaY3q3h0qsRuZ9O-Ox9wnErJjf8xov_9eVuol8uAKB8Ap5ZIuT8GGeRLZezWovndm6bIu4Q041x_4W62amacNbwLL1IiroXxOPEdGchszEeVeWsh8gSPYGpN9SF0M8bs1QdaPqFgaRyUm1w0VejkmSqpPJRZiaagR5ebu5n5hgB87oVdMJveZDtyh-ciQYiBKX_LAf8ZNavTp96ZFpPdW3khKlC8V3Jc92UW5mkM0T-tIy5DeIo6HX5ZUZ_l-jt951dDq1scYl2ON8AInmVQtTV3lZCvWmvyt8OiwPln3ylIN9-kFoYglaghFp88urP9ysqMw3PrCArYY2oSMN7Y-Q6mcD9BY7wbeUNo6Lf3tGKCrqEHDGEa2XqQzVu4rcDefZHXbbV_RIleDSdktfEFkQLsEwonP3f1dl_PF7-34QFkGxYkBxgQcKBEyvX9e7X5-xkBW-hzjdqjHvy7YHTdO6tjFkpvWKp7bh3j9IAlbhM8051m11tYyOHB0yIMhucaybKNlWuXMyqQoddSAjIBYUp4OFzLVArg2o6KlgG_Bs9fJhgQuKQ9nmNO3oJ-BCybyCQuEM3odAZtZOi-8Spneu_H5BahCZa3UYKn7LgF-Ng7Ks9-xycDImhOKtArufYsxSFs7kE9aycB6kLNBeQImytpv58e9OH2r3dVZJLgvBFkHl71pxwR1zwU4zQDw4TxGdNOaXSgWd3KLNWVAxn8MMaOqmR5hQvyi8WUa85ZCm7Gkwm1-24sTNoZZwEq5bXy5UwSvfhMspTLOxvr4E_DWQK2m8Y6JHW6ZYPETwzB-mRYTvNPFU5X_AcYqtjJaB9RgpAm4eXNdXbdknnCtwOYTlvIj0LPvmHGUNhWAS2ianjEaiOUyy0DrMjERmiwBa90AqJS2sZnT35QF40fb7IYcJJTubbrFPUUMeBxbBZUfRX7juDuUYHPgAypdjExMKW0jxIm2V9dbKqby4oMkqB9-Pfowghy-5v9dJ-A2s85DGoiWP0-AdTyUJkXbDEckU5wZkaFBpdAKC3xDyjpOxOZPNOmpQKHzXFpd0LjUSaXatF4RtIoZc4Ec_Sf_UinQ5qRMTuAAkwOe-wOPTtKBJwYF6zQgF2MRltIY5lyQDjP5UMgHU2AqWUMQFrvHi1KyCrhEaqC6KH_1avNwztnkGKtK2RnrKoryg3sQWUDubhcgQFs6wKM5vFA1yWSHa3zRjjgNYXZ4MhhuifAwf-qzqVEPNhj47Xk6M20_KVaGNWeQbiScXxTlaEMOhnzXj2cnfxoB2eqRXMDcgJI2RyoY6EaS7ElGBMBFxS832nThg4Y6hbd2OA_IUS_AURWvIlVIsljFdg5DTnyj9AbFZfFtbvR25RQ8Wg56wOYlBD9CqegazbH1AY2FQEh5YLHIXSGN5Rk65yvTRKIi4u2LSM6gO8H2LXCLPVGNLBfPRKDV3OVL_V_Ziu-Nk7kNgKbGXyxz2GtzKHBn5gha5-EQ0NaWA7jqL7s56jmtY2irLlITXrDrFv7pmwiySjqR1u2aDE8fHlzVd_Nx3bnDT8tlf2J27xII02YTNRG9H5JR6EaPQNa0PJs7d5A1OdrNqqFsey-eDJD7GAtmHx3VVN04Z-fLxvLP-s01z0Cqr3ewDigOHut23ngBelbaHsAcxxF3TLorS67rlLO1bEaQi4G2Ct1UoMghY02BJmWAX9bNDbfRE6qyy48T0MO-l6DJoV_INraaRha0oAuGkkqEfIlddy-M5HqT7yJ9fmSMdjqwIac2-2XTxzMzjNyhXpziNKQ2JK1SV31vREdJHJaZIokJ9GcxdKTL4TMoONHGolJQWZJi8IPCR-WoXtoCGDTtV4rnkdxtrdj37mC9io1jxyMIfPE6SsOJmk63M_zxBDf_t7svykfzPhoQhIJ8hCt0Kd56DBnfrwCVPfqiV-VJklZmubEyvK0tlvVHsYLOzlrXIjJOnUk-_3UI19M55VzhrkRnP_K-Vk8MNRooVzvhKh5gK_151wAchI0H9bbbdEFWMV3cJv2VbLOXQ6RW17vx027XnOmqDKN5rDj06dn?authuser=0&nonce=1bmehk2duhprs&user=109773888817604989957&hash=kd2ditls9o9m91o7c2ri0u2k7b70629f" },
    { name: "Alagoas", abbreviation: "AL", url: "https://exemplo.com/registro/AL" },
    { name: "Amapá", abbreviation: "AP", url: "https://exemplo.com/registro/AP" },
    { name: "Amazonas", abbreviation: "AM", url: "https://exemplo.com/registro/AM" },
    { name: "Bahia", abbreviation: "BA", url: "https://exemplo.com/registro/BA" },
    { name: "Ceará", abbreviation: "CE", url: "https://exemplo.com/registro/CE" },
    { name: "Distrito Federal", abbreviation: "DF", url: "https://exemplo.com/registro/DF" },
    { name: "Espírito Santo", abbreviation: "ES", url: "https://exemplo.com/registro/ES" },
    { name: "Goiás", abbreviation: "GO", url: "https://exemplo.com/registro/GO" },
    { name: "Maranhão", abbreviation: "MA", url: "https://exemplo.com/registro/MA" },
    { name: "Mato Grosso", abbreviation: "MT", url: "https://exemplo.com/registro/MT" },
    { name: "Mato Grosso do Sul", abbreviation: "MS", url: "https://exemplo.com/registro/MS" },
    { name: "Minas Gerais", abbreviation: "MG", url: "https://exemplo.com/registro/MG" },
    { name: "Pará", abbreviation: "PA", url: "https://exemplo.com/registro/PA" },
    { name: "Paraíba", abbreviation: "PB", url: "https://exemplo.com/registro/PB" },
    { name: "Paraná", abbreviation: "PR", url: "https://exemplo.com/registro/PR" },
    { name: "Pernambuco", abbreviation: "PE", url: "https://exemplo.com/registro/PE" },
    { name: "Piauí", abbreviation: "PI", url: "https://exemplo.com/registro/PI" },
    { name: "Rio de Janeiro", abbreviation: "RJ", url: "https://exemplo.com/registro/RJ" },
    { name: "Rio Grande do Norte", abbreviation: "RN", url: "https://exemplo.com/registro/RN" },
    { name: "Rio Grande do Sul", abbreviation: "RS", url: "https://exemplo.com/registro/RS" },
    { name: "Rondônia", abbreviation: "RO", url: "https://exemplo.com/registro/RO" },
    { name: "Roraima", abbreviation: "RR", url: "https://exemplo.com/registro/RR" },
    { name: "Santa Catarina", abbreviation: "SC", url: "https://exemplo.com/registro/SC" },
    { name: "São Paulo", abbreviation: "SP", url: "https://exemplo.com/registro/SP" },
    { name: "Sergipe", abbreviation: "SE", url: "https://exemplo.com/registro/SE" },
    { name: "Tocantins", abbreviation: "TO", url: "https://exemplo.com/registro/TO" }
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