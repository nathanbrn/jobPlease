import { Check, Money, Suitcase, Timer } from "@phosphor-icons/react";
import {
  Container,
  ContainerHeader,
  ContainerRemuneration,
  ContainerVagas,
} from "./styles";

import emptyList from "../../assets/emptyList.png";

import { api } from "../../utils/api";

import { useEffect, useState } from "react";
import { render } from "react-dom";
import ReactLoading from "react-loading";
import LogoEnterprice from "../../assets/LogoEnterprice.jpg";
import { ContainerInfoComp } from "../../components/ContainerInfo";
import { VagaProps } from "../../types/vaga";

export function Vagas() {
  const [vagasApi, setVagasApi] = useState([]);
  const [vaga, setVaga] = useState<string | null>(null);
  const firstVaga = vagasApi.map((vaga: VagaProps) => vaga)[0];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/jobs")
      .then(({ data }: any) => {
        setVagasApi(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        render(
          <img width={500} src={emptyList} alt="" />,
          document.getElementById("vagas")
        );
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        id="vagas"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        {isLoading ? (
          <ReactLoading type="bubbles" width="10%" color="#f0e68c" />
        ) : vagasApi.length > 0 ? (
          <Container>
            <ContainerVagas>
              {vagasApi.map((vaga: VagaProps) => (
                <button
                  onClick={() => setVaga(vaga._id || null)}
                  key={vaga._id}
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: "12px",

                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",

                    cursor: "pointer",

                    backgroundColor: "#F0E68C",
                  }}
                >
                  <ContainerHeader>
                    <div>
                      <img width={50} height={50} src={LogoEnterprice} alt="" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <h2>{vaga.title}</h2>
                      <p>{vaga.enterprice}</p>
                      <p>{vaga.location}</p>
                      <p>{vaga.experience}</p>
                    </div>
                  </ContainerHeader>
                  <ContainerRemuneration>
                    {vaga.salary === "" ? (
                      <></>
                    ) : (
                      <span>
                        <Money />
                        {vaga.salary}
                      </span>
                    )}
                    <span>
                      <Suitcase />
                      Tempo integral
                      <Check />
                    </span>
                    {vaga.hour === "" ? (
                      <></>
                    ) : (
                      <span>
                        <Timer />
                        {vaga.hour}
                      </span>
                    )}
                    <details
                      style={{
                        backgroundColor: "#F0E68C",
                      }}
                    >
                      <summary
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          padding: "4px",
                          borderRadius: "4px",
                          color: "#FFF",
                        }}
                      >
                        Ver mais
                      </summary>
                      <strong
                        style={{
                          backgroundColor: "#F0E68C",
                        }}
                      >
                        Descrição:
                      </strong>
                      <p
                        style={{
                          textAlign: "left",
                          marginBottom: "8px",
                          backgroundColor: "#F0E68C",
                        }}
                      >
                        {vaga.description}
                      </p>
                      <strong
                        style={{
                          backgroundColor: "#F0E68C",
                        }}
                      >
                        Requisitos:
                      </strong>
                      <p
                        style={{
                          textAlign: "left",
                          marginBottom: "8px",
                          backgroundColor: "#F0E68C",
                        }}
                      >
                        {vaga.requirements}
                      </p>
                      <a
                        style={{
                          backgroundColor: "#ff7f50",
                          color: "#FFF",
                          padding: "8px",
                          borderRadius: "8px",
                        }}
                        target="_blank"
                        href={vaga.url}
                      >
                        Candidatar-se
                      </a>
                    </details>
                  </ContainerRemuneration>
                </button>
              ))}
            </ContainerVagas>
            <ContainerInfoComp
              firstVaga={firstVaga}
              vaga={vaga}
              vagasApi={vagasApi}
            />
          </Container>
        ) : (
          <img src={emptyList} alt="" />
        )}
      </div>
    </>
  );
}
