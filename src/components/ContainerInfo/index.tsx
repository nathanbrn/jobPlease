import { X } from "@phosphor-icons/react";
import { VagaProps } from "../../types/vaga";
import {
  ContainerDados,
  ContainerDescription,
  ContainerInfo,
  ContainerInfoDados,
  ContainerTitleVaga,
  Title,
} from "./styles";

export function ContainerInfoComp({
  vagasApi,
  vaga,
  button,
  setSelectedVaga,
  firstVaga,
}: {
  vagasApi: VagaProps[];
  vaga: string | null;
  button?: any;
  setSelectedVaga?: any;
  firstVaga?: VagaProps;
}) {
  const selectedVaga = vagasApi.find((v) => v._id === vaga);

  if (!selectedVaga) {
    return (
      <ContainerInfo>
        <div
          key={firstVaga?._id}
          style={{
            padding: "12px",

            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <ContainerTitleVaga
            style={{
              position: "relative",
            }}
          >
            <h2>{firstVaga?.title}</h2>
            <div>
              {firstVaga?.salary === "" ? (
                <></>
              ) : (
                <span>{firstVaga?.salary}</span>
              )}
              <span>{firstVaga?.location}</span>
              <span>{firstVaga?.experience}</span>
            </div>
            <a target="_blank" href={firstVaga?.url}>
              Candidatar-se a vaga
            </a>
            {button && (
              <button
                onClick={() => setSelectedVaga(false)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "24px",
                }}
              >
                <X />
              </button>
            )}
          </ContainerTitleVaga>
          <ContainerDados>
            <div>
              <Title>Dados da vaga</Title>
            </div>
            <ContainerInfoDados>
              <div>
                <h4>Tipo de vaga</h4>
                <p>{firstVaga?.type}</p>
              </div>
              <div>
                <h4>Horário</h4>
                <p>{firstVaga?.hour}</p>
              </div>
            </ContainerInfoDados>
          </ContainerDados>
          <ContainerDescription>
            <h3>Descrição</h3>
            <p>{firstVaga?.description}</p>
            <div>
              <div>
                <h5>Requisitos</h5>
                <ul>{firstVaga?.requirements}</ul>
              </div>
              <div>
                <h5>Diferencial</h5>
                <ul>{firstVaga?.differentials}</ul>
              </div>
              <div>
                <h5>Beneficios</h5>
                <ul>{firstVaga?.benefits}</ul>
              </div>
            </div>
          </ContainerDescription>
        </div>
      </ContainerInfo>
    );
  }

  return (
    <ContainerInfo>
      <div
        key={selectedVaga._id}
        style={{
          padding: "12px",

          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <ContainerTitleVaga
          style={{
            position: "relative",
          }}
        >
          <h2>{selectedVaga.title}</h2>
          <div>
            {selectedVaga.salary === "" ? (
              <></>
            ) : (
              <span>{selectedVaga.salary}</span>
            )}
            <span>{selectedVaga.location}</span>
            <span>{selectedVaga.experience}</span>
          </div>
          <a target="_blank" href={selectedVaga?.url}>
            Candidatar-se a vaga
          </a>
          {button && (
            <button
              onClick={() => setSelectedVaga(false)}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              <X />
            </button>
          )}
        </ContainerTitleVaga>
        <ContainerDados>
          <div>
            <Title>Dados da vaga</Title>
          </div>
          <ContainerInfoDados>
            <div>
              <h4>Tipo de vaga</h4>
              <p>{selectedVaga.type}</p>
            </div>
            <div>
              <h4>Horário</h4>
              <p>{selectedVaga.hour}</p>
            </div>
          </ContainerInfoDados>
        </ContainerDados>
        <ContainerDescription>
          <h3>Descrição</h3>
          <p>{selectedVaga.description}</p>
          <div>
            <div>
              <h5>Requisitos</h5>
              <ul>{selectedVaga.requirements}</ul>
            </div>
            <div>
              <h5>Diferencial</h5>
              <ul>{selectedVaga.differentials}</ul>
            </div>
            <div>
              <h5>Beneficios</h5>
              <ul>{selectedVaga.benefits}</ul>
            </div>
          </div>
        </ContainerDescription>
      </div>
    </ContainerInfo>
  );
}
