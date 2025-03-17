"use client";

import { useState, useEffect } from "react";
import { FlickerAlerts } from "flicker-alerts";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function Page() {
  const [valor, setValor] = useState("");
  const [campo, setCampo] = useState("");
  const [resultados, setResultados] = useState<any[]>([]);
  const router = useRouter();

  const clearForm = () => {
    setValor("");
    setCampo("");
    setResultados([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!campo || !valor) {
      FlickerAlerts.showAlert({
        type: "warning",
        title: "Atenção!",
        message: "Preencha os campos abaixo",
        position: "top-right",
        duration: 5000,
      });
      return;
    }

    try {
      // Remove caracteres não numéricos se o campo for "cadastro"
      const valorLimpo =
        campo === "cadastro" ? valor.replace(/\D/g, "") : valor;

      const { data, error } = await supabase
        .from("imoveis")
        .select(
          "id, numero, uf, cidade, bairro, endereco, preco, avaliacao, desconto, descricao, modalidade, link"
        )
        .ilike(campo, `%${valorLimpo}%`);

      if (error) throw error;

      if (data.length === 0) {
        FlickerAlerts.showAlert({
          type: "info",
          title: "Nenhum resultado encontrado!",
          message: "Tente outro valor de busca.",
          position: "top-right",
          duration: 5000,
        });
      }

      setResultados(data);
      router.push(`/pesquisa/${campo}/${encodeURIComponent(valorLimpo)}`);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      FlickerAlerts.showAlert({
        type: "danger",
        title: "Erro!",
        message: "Falha ao buscar dados. Tente novamente.",
        position: "top-right",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <div className={styles.searchBox}>
        <div className={styles.boxForm}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="busca">Busca por</label>
              <select
                className={styles.selects}
                name="busca"
                id="busca"
                value={campo}
                onChange={(e) => setCampo(e.target.value)}
              >
                <option value=""> Selecione</option>
                <option value="uf">UF</option>
                <option value="cidade">Cidade</option>
                <option value="bairro">Bairro</option>
              </select>
            </div>
            <div>
              <input
                className={styles.inputSearch}
                type="text"
                placeholder="Digite o valor"
                onChange={(e) => setValor(e.target.value)}
                value={valor}
                minLength={2}
              />
            </div>
            <div className={styles.buttonDiv}>
              <button type="submit">Enviar</button>
              <button onClick={clearForm} type="button">
                Limpar
              </button>
              <button onClick={() => router.back()} className="button-back">
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
