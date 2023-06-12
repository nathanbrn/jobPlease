import {
  Button,
  Container,
  ContainerInfo,
  ContainerNew,
  ContainerVaga,
  ContainerVagancy,
  Image,
  Modal,
  Title,
} from "./styles";

import ReactLoading from "react-loading";

import emptyList from "../../assets/emptyList.png";
import LogoEnterprice from "../../assets/LogoEnterprice.jpg";

import { VagaProps } from "../../types/vaga";

interface FooterProps {
  isLoading: boolean;
  vagasApi: VagaProps[];
  idVaga: any;
  setIdVaga: (id: any) => void;
  isSelectedVaga: boolean;
  setIsSelectedVaga: (b: boolean) => void;
}

export function Footer({
  isLoading,
  vagasApi,
  setIdVaga,
  setIsSelectedVaga,
}: FooterProps) {
  return (
    <Container>
      <Title>Veja nossas vagas em destaque</Title>
      <ContainerVaga id="vagasDestaque">
        {isLoading ? (
          <ReactLoading type="bubbles" color="#f0e68c" height={50} width={50} />
        ) : vagasApi.length === 0 ? (
          <img width={200} src={emptyList} />
        ) : (
          vagasApi.map((vaga: VagaProps) => (
            <ContainerVagancy key={vaga._id}>
              <Modal>
                <ContainerInfo>
                  <div>
                    <Image src={LogoEnterprice} alt="Imagem" />
                  </div>
                  <div>
                    <span>{vaga.enterprice}</span>
                    <h3>{vaga.title}</h3>
                    <span>{vaga.salary}</span>
                  </div>
                </ContainerInfo>
                <ContainerNew>
                  <span>Nova</span>
                </ContainerNew>
                <div>
                  <Button
                    onClick={() => {
                      setIdVaga(vaga._id);
                      setIsSelectedVaga(true);
                    }}
                  >
                    Ver vaga
                  </Button>
                </div>
              </Modal>
            </ContainerVagancy>
          ))
        )}
      </ContainerVaga>
    </Container>
  );
}
