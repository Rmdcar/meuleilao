"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FlickerAlerts } from "flicker-alerts";
import { supabase } from "../../../../../lib/supabaseClient";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Page() {
  const [resultados, setResultados] = useState<any[]>([]);
  const [filtro, setFiltro] = useState("");
  const params = useParams();
  const router = useRouter();

  // Extrai os parâmetros da URL
  const campo = params.campo as string;
  const valor =
    typeof params?.valor === "string"
      ? decodeURIComponent(params.valor.replace(/_/g, " "))
      : "";

  // Busca os dados ao carregar a página
  useEffect(() => {
    const buscarDados = async () => {
      if (!campo || !valor) return;

      try {
        const coluna = campo.toLowerCase();
        const { data, error } = await supabase
          .from("imoveis")
          .select(
            "id, numero, uf, cidade, bairro, endereco, preco, avaliacao, desconto, descricao, modalidade, link"
          )
          .ilike(coluna, `%${valor}%`);

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

    buscarDados();
  }, [campo, valor]);

  return (
    <>
      {resultados.length > 0 && (
        <div className={styles.resultados}>
          <table>
            <thead>
              <tr>
                <th>
                  Bairro{" "}
                  <input
                    type="text"
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Filtrar"
                  />
                </th>
                <th>
                  Endereço <br />{" "}
                  <input
                    type="text"
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Filtrar"
                  />
                </th>
                <th>
                  Preço{" "}
                  <input
                    type="text"
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Filtrar"
                  />
                </th>
                <th>
                  Valor de avaliação{" "}
                  <input
                    type="text"
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Filtrar"
                  />
                </th>
                <th>
                  Desconto{" "}
                  <input
                    type="text"
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Filtrar"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {resultados
                .filter((item) =>
                  Object.values(item).some((val) =>
                    String(val).toLowerCase().includes(filtro.toLowerCase())
                  )
                )
                .map((item, index) => {
                  const enderecoCompleto = `${item.endereço}, ${item.bairro}, ${item.cidade}`;
                  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    enderecoCompleto
                  )}`;

                  return (
                    <tr key={index}>
                      <td>{item.bairro}</td>
                      <td>{item.endereço}</td>

                      <td className={styles.editCollum}>
                        R${" "}
                        {Number(item.preço).toLocaleString("pt-BR", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className={styles.editCollum}>
                        R${" "}
                        {Number(item.avaliação).toLocaleString("pt-BR", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className={styles.editCollum}>
                        {" "}
                        {Number(item.desconto).toLocaleString("pt-BR", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        %
                        <Link
                          href={`/pesquisa/id/${encodeURIComponent(
                            item.id
                          )}/detalhes`}
                          title="Detalhes do imóvel"
                        >
                          {" "}
                          &#128200;
                        </Link>
                        <Link
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver endereço aproximado no Google Maps"
                        >
                          {" "}
                          &#x2934;&#xFE0F;
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
      <div className={styles.buttonDiv}>
        <button onClick={() => router.back()}>Voltar</button>
      </div>
    </>
  );
}
