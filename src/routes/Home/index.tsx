import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import { api } from "../../utils/api";
import emptyList from "../../assets/emptyList.png";
import { render } from "react-dom";
import { PopUpVaga } from "../../components/PopUpVaga";
import { ContainerInfoComp } from "../../components/ContainerInfo";

export default function App() {
  const [vagasApi, setVagasApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idVaga, setIdVaga] = useState<any>("");
  const [isSelectedVaga, setIsSelectedVaga] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("/starjobs")
      .then(({ data }: any) => {
        setTimeout(() => {
          setVagasApi(data);
          setIsLoading(false);
        }, 3000);
      })
      .catch((err: Error) => {
        render(
          <img width={250} src={emptyList} alt="" />,
          document.getElementById("vagasDestaque")
        );
        console.log(err);
      });
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSelectedVaga(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsSelectedVaga]);

  return (
    <>
      {isSelectedVaga && (
        <PopUpVaga
          children={
            <ContainerInfoComp
              setSelectedVaga={setIsSelectedVaga}
              button={true}
              vaga={idVaga}
              vagasApi={vagasApi}
            />
          }
        />
      )}
      <Main />
      <Footer
        idVaga={idVaga}
        isSelectedVaga={isSelectedVaga}
        setIdVaga={setIdVaga}
        setIsSelectedVaga={setIsSelectedVaga}
        isLoading={isLoading}
        vagasApi={vagasApi}
      />
    </>
  );
}
