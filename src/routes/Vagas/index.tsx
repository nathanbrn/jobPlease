import {
  Container,
  ContainerHeader,
  ContainerRemuneration,
  ContainerVagas,
} from "./styles";
import { Money, Suitcase, Check, Timer } from "@phosphor-icons/react";

import emptyList from "../../assets/emptyList.png";

import { api } from "../../utils/api";

import LogoEnterprice from "../../assets/LogoEnterprice.jpg";
import { useState } from "react";
import { VagaProps } from "../../types/vaga";
import ReactLoading from "react-loading";
import { ContainerInfoComp } from "../../components/ContainerInfo";
import { useQuery } from "react-query";

export function Vagas() {
  const [vaga, setVaga] = useState<string>();

  const { data, isLoading, isError } = useQuery("jobs", async () => {
    const { data } = await api.get("/jobs");
    return data;
  });

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          style={{
            margin: "auto",
          }}
          width={500}
          src={emptyList}
          alt=""
        />
      </div>
    );
  }

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
        ) : data?.data.length > 0 ? (
          <Container>
            <ContainerVagas>
              {data?.data.map((vaga: VagaProps) => (
                <button
                  onClick={() => setVaga(vaga._id)}
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
            <ContainerInfoComp vaga={vaga} vagasApi={data?.data} />
          </Container>
        ) : (
          <img src={emptyList} alt="" />
        )}
      </div>
    </>
  );
}
