"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"; // Importando o CSS

export default function Page() {
  const [paymentOption, setPaymentOption] = useState<string>("à vista");
  const [auctionValue, setAuctionValue] = useState<number>(0);
  const [saleValue, setSaleValue] = useState<number>(0);
  const [brokerCommission, setBrokerCommission] = useState<number>(5);
  const [itbi, setItbi] = useState<number>(1.5);
  const [registration, setRegistration] = useState<number>(0);
  const [lawyerFee, setLawyerFee] = useState<number>(0);
  const [reform, setReform] = useState<number>(0);
  const [otherCosts, setOtherCosts] = useState<number>(0);
  const [salePeriod, setSalePeriod] = useState<number>(0);
  const [iptu, setIptu] = useState<number>(0);
  const [condominium, setCondominium] = useState<number>(0);
  const [realEstateCommission, setRealEstateCommission] = useState<number>(5);
  const [realEstateCommissionValue, setRealEstateCommissionValue] = useState<number>(0);
  const [capitalGainsTax, setCapitalGainsTax] = useState<number>(15);
  const [totalCosts, setTotalCosts] = useState<number>(0);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setPaymentOption(event.target.value);
  };

  // Função para garantir que valores inválidos sejam tratados como 0
  const safeValue = (value: any): number => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  // Função para calcular os custos totais
  const calculateTotalCosts = (): number => {
    const brokerCommissionValue = (safeValue(brokerCommission) / 100) * safeValue(auctionValue);
    const itbiValue = (safeValue(itbi) / 100) * safeValue(auctionValue);
    const total =
      brokerCommissionValue +
      itbiValue +
      safeValue(registration) +
      safeValue(reform) +
      safeValue(lawyerFee) +
      safeValue(iptu) * safeValue(salePeriod) +
      safeValue(otherCosts) +
      safeValue(condominium) * safeValue(salePeriod) +
      safeValue(auctionValue);
    setTotalCosts(total);
    return total;
  };

  // Função para calcular o ganho de capital
  const calculateCapitalGains = (): number => {
    const realEstateCommissionValue = (safeValue(realEstateCommission) / 100) * safeValue(saleValue);
    const capitalGains =
      safeValue(saleValue) -
      realEstateCommissionValue -
      totalCosts +
      safeValue(otherCosts) +
      safeValue(condominium) * safeValue(salePeriod) +
      safeValue(iptu) * safeValue(salePeriod) +
      safeValue(lawyerFee);
    return capitalGains > 0 ? capitalGains : 0;
  };

  // Função para calcular o lucro líquido
  const calculateNetProfit = (): number => {
    const realEstateCommissionValue = (safeValue(realEstateCommission) / 100) * safeValue(saleValue);
    const capitalGainsTaxValue =
      (safeValue(capitalGainsTax) / 100) * calculateCapitalGains();
    const realSaleValue =
      safeValue(saleValue) - realEstateCommissionValue - capitalGainsTaxValue;
    const netProfit = realSaleValue - totalCosts;
    return netProfit;
  };

  // Função para calcular o lucro mensal
  const calculateMonthlyProfit = (): number => {
    const netProfit = calculateNetProfit();
    return safeValue(salePeriod) > 0 ? parseFloat((netProfit / safeValue(salePeriod)).toFixed(2)) : 0;
  };

  // Função para formatar valores em moeda
  const formatCurrency = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // Função para limpar os campos
  const handleClear = (): void => {
    setAuctionValue(0);
    setSaleValue(0);
    setBrokerCommission(5);
    setItbi(1.5);
    setRegistration(0);
    setLawyerFee(0);
    setReform(0);
    setOtherCosts(0);
    setSalePeriod(0);
    setIptu(0);
    setCondominium(0);
    setRealEstateCommission(5);
    setCapitalGainsTax(15);
  };

  // Atualiza os custos totais sempre que os valores mudam
  useEffect(() => {
    calculateTotalCosts();
  }, [
    auctionValue,
    brokerCommission,
    itbi,
    registration,
    lawyerFee,
    reform,
    otherCosts,
    salePeriod,
    iptu,
    condominium,
  ]);

  // Atualiza o valor da comissão do corretor
  useEffect(() => {
    setRealEstateCommissionValue((safeValue(realEstateCommission) / 100) * safeValue(saleValue));
  }, [realEstateCommission, saleValue]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Calculadora do Leilão</h1>

      <div>
        <h2 className={styles.sectionTitle}>Valor geral do imóvel</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Itens</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Valor estimado da Arrematação</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={auctionValue || ""}
                  onChange={(e) => setAuctionValue(safeValue(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Valor estimado da Venda</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={saleValue || ""}
                  onChange={(e) => setSaleValue(safeValue(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.sectionTitle}>Custos da Arrematação</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Itens</th>
              <th>Percentual</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comissão do Leiloeiro</td>
              <td>
                <input
                  type="number"                  
                  className={styles.inputPercent}
                  value={brokerCommission}
                  onChange={(e) =>
                    setBrokerCommission(safeValue(e.target.value))
                  }
                />{" "}
                %
              </td>
              <td>{formatCurrency((safeValue(brokerCommission) / 100) * safeValue(auctionValue))}</td>
            </tr>
            <tr>
              <td>ITBI</td>
              <td>
                <input
                  type="number"
                  className={styles.inputPercent}
                  value={itbi}
                  onChange={(e) => setItbi(safeValue(e.target.value))}
                />{" "}
                %
              </td>
              <td>{formatCurrency((safeValue(itbi) / 100) * safeValue(auctionValue))}</td>
            </tr>
            <tr>
              <td>Registro</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={registration || ""}
                  onChange={(e) => setRegistration(safeValue(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Valor do advogado para desocupação do imóvel</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={lawyerFee || ""}
                  onChange={(e) => setLawyerFee(safeValue(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.sectionTitle}>Extras Pós Imissão</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Itens</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reforma</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={reform || ""}
                  onChange={(e) => setReform(safeValue(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={otherCosts || ""}
                  onChange={(e) => setOtherCosts(safeValue(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.sectionTitle}>Pós Arrematação</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Itens</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prazo da Venda (meses)</td>
              <td>
                <input
                  type="number"
                  placeholder="0 meses"
                  className={styles.input}
                  value={salePeriod || ""}
                  onChange={(e) => setSalePeriod(safeValue(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>IPTU Mensal</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={iptu || ""}
                  onChange={(e) => setIptu(safeValue(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>Condomínio Mensal</td>
              <td>
                <input
                  type="number"
                  placeholder="R$ 0,00"
                  className={styles.input}
                  value={condominium || ""}
                  onChange={(e) => setCondominium(safeValue(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.sectionTitle}>Total de Custos</h2>
        <p className={styles.totalCosts}>
          Soma do total de custos: {formatCurrency(totalCosts)}
        </p>

        <h2 className={styles.sectionTitle}>Pós Venda</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Itens</th>
              <th>Percentual</th>
              <th>Valores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comissão do Corretor de Imóveis pela Venda</td>
              <td>
                <input
                  type="number"
                  className={styles.inputPercent}
                  value={realEstateCommission}
                  onChange={(e) =>
                    setRealEstateCommission(safeValue(e.target.value))
                  }
                />{" "}
                %
              </td>
              <td>{formatCurrency(realEstateCommissionValue)}</td>
            </tr>
            <tr>
              <td>Imposto sobre Ganho de Capital</td>
              <td>
                <input
                  type="number"
                  className={styles.inputPercent}
                  value={capitalGainsTax}
                  onChange={(e) =>
                    setCapitalGainsTax(safeValue(e.target.value))
                  }
                />{" "}
                %
              </td>
              <td>
                {formatCurrency(
                  (safeValue(capitalGainsTax) / 100) * calculateCapitalGains()
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.sectionTitle}>Valor Real de Venda</h2>
        <p className={styles.totalCosts}>
          Valor Real de Venda:{" "}
          {formatCurrency(
            safeValue(saleValue) -
              realEstateCommissionValue -
              (safeValue(capitalGainsTax) / 100) * calculateCapitalGains()
          )}
        </p>

        <h2 className={styles.sectionTitle}>Lucro Líquido</h2>
        <p className={styles.profit}>
          Lucro Líquido: {formatCurrency(calculateNetProfit())}
        </p>
        <p className={styles.monthlyProfit}>
          Equivale a lucro mensal de:{" "}
          {formatCurrency(calculateMonthlyProfit())}
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => window.history.back()}>
          Voltar
        </button>
        <button className={styles.button} onClick={handleClear}>
          Limpar
        </button>
      </div>
    </div>
  );
}