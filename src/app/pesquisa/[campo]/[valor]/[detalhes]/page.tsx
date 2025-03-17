"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FlickerAlerts } from "flicker-alerts";
import { supabase } from "../../../../../../lib/supabaseClient";
import Link from "next/link";
import styles from './styles.module.css';

interface Imovel {
  id: string;
  numero: string;
  uf: string;
  cidade: string;
  bairro: string;
  endereço: string;
  preço: number;
  avaliação: number;
  desconto: number;
  descrição: string;
  modalidade: string;
  link: string;
}

export default function Page() {
  const [resultados, setResultados] = useState<Imovel[]>([]);
  const [urlImg, setUrlImg] = useState<string>(""); // Estado para armazenar a URL da imagem
  const [urlMatricula, setUrlMatricula] = useState<string>(""); // Estado para armazenar a URL da matrícula
  const params = useParams();
  const router = useRouter();

  // Extrai o id da URL
  const id = params.valor as string;

  // Função para extrair o valor após 'hdnimovel=' no link
  const extrairValorDoLink = (link: string) => {
    if (!link) return ""; // Se o link for vazio, retorna uma string vazia

    // Usa uma expressão regular para encontrar o valor após 'hdnimovel='
    const match = link.match(/hdnimovel=([^&]*)/);
    return match ? match[1] : ""; // Retorna o valor ou uma string vazia caso não exista
  };

  // Busca os dados ao carregar a página
  useEffect(() => {
    const buscarDados = async () => {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from("imoveis")
          .select(
            "id, numero, uf, cidade, bairro, endereço, preço, avaliação, desconto, descrição, modalidade, link"
          )
          .eq("id", id); // Usa o id para buscar o imóvel específico

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

        // Atualiza os resultados com os dados buscados
        setResultados(data);

        // Se houver dados, extrai o link e gera a URL da imagem e da matrícula
        if (data.length > 0) {
          const linkImovel = data[0].link as string; // Garantia de que é uma string
          const estadoImovel = data[0].uf as string; // Garantia de que é uma string
          
          const valorAposIgual = extrairValorDoLink(linkImovel);
          const codigoImg = valorAposIgual.padStart(13, '0'); // Garante que o código tenha 13 dígitos

          const novaUrlImg = `https://venda-imoveis.caixa.gov.br/fotos/F${codigoImg}21.jpg`;
          const matricula = `https://venda-imoveis.caixa.gov.br/editais/matricula/${estadoImovel.trim()}/${codigoImg}.pdf`; // Usando trim() para remover espaços
          setUrlImg(novaUrlImg); // Atualiza o estado da URL da imagem
          setUrlMatricula(matricula); // Atualiza o estado da URL da matrícula
        }
        
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
  }, [id]);

  const formatarPreco = (preço: number) => {
    return preço.toLocaleString("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <div className={styles.results}>
        <h1 className={styles.title}>Detalhes do imóvel</h1>
      </div>
      {resultados.length > 0 && (
        <div className="table-results">
          <table>
            <tbody>
              <tr>
                <th>Estado</th>
                {resultados.map((item, index) => (
                  <td key={index}>{item.uf}</td>
                ))}
              </tr>
              <tr>
                <th>Cidade</th>
                {resultados.map((item, index) => (
                  <td key={index}>{item.cidade}</td>
                ))}
              </tr>
              <tr>
                <th>Endereço</th>
                {resultados.map((item, index) => (
                  <td key={index}>{item.endereço}</td>
                ))}
              </tr>
              <tr>
                <th>Bairro</th>
                {resultados.map((item, index) => (
                  <td key={index}>{item.bairro}</td>
                ))}
              </tr>
              <tr>
                <th>Valor do Imóvel</th>
                {resultados.map((item, index) => (
                  <td key={index}>R$ {formatarPreco(item.preço)}</td>
                ))}
              </tr>
              <tr>
                <th>Valor de Avaliação</th>
                {resultados.map((item, index) => (
                  <td key={index}>R$ {formatarPreco(item.avaliação)}</td>
                ))}
              </tr>
              <tr>
                <th>Valor de desconto</th>
                {resultados.map((item, index) => (
                  <td key={index}>{formatarPreco(item.desconto)}%</td>
                ))}
              </tr>
              <tr>
                <th>Descrição</th>
                {resultados.map((item, index) => (
                  <td key={index}>{item.descrição}</td>
                ))}
              </tr>
              <tr>
                <th>Modalidade de leilão</th>
                {resultados.map((item, index) => (
                  <td key={index}>{item.modalidade}</td>
                ))}
              </tr>
              <tr>
                <th>Página do imóvel</th>
                {resultados.map((item, index) => {
                  const linkPagina = `${item.link}`;
                  return (
                    <td key={index}>
                      <Link
                        href={linkPagina}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver endereço aproximado no Google Maps"
                      >
                         🏦;
                      </Link>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th>Matrícula do imóvel</th>
                <td>
                  {urlMatricula && (
                    <Link
                      href={urlMatricula}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver matrícula do imóvel"
                    >
                      &#x1F4C4;
                    </Link>
                  )}
                </td>
              </tr>
              <tr>
                <th>Google Maps</th>
                {resultados.map((item, index) => {
                  const enderecoCompleto = `${item.endereço}, ${item.bairro}, ${item.cidade}, ${item.uf}`;
                  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    enderecoCompleto
                  )}`;
                  return (
                    <td key={index}>
                      <Link
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver endereço aproximado no Google Maps"
                      >
                        &#x2934;&#xFE0F;
                      </Link>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div>
        {urlImg && (
          <img 
            src={urlImg}
            alt="imagem" 
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.buttonDiv}>
        <button onClick={() => router.back()} className="button-back">
          Voltar
        </button>
      </div>
    </>
  );
}