import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import { api } from "../../utils/api";
import { PopUpVaga } from "../../components/PopUpVaga";
import { ContainerInfoComp } from "../../components/ContainerInfo";
import { useQuery } from "react-query";

export default function Home() {
  const [idVaga, setIdVaga] = useState<any>("");
  const [isSelectedVaga, setIsSelectedVaga] = useState<boolean>(false);

  const { data, isLoading, isError } = useQuery("starjobs", async () => {
    const { data } = await api.get("/starjobs");
    return data;
  });

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

  if (isError) {
    return (
      <>
        {isSelectedVaga && (
          <PopUpVaga
            children={
              <ContainerInfoComp
                setSelectedVaga={setIsSelectedVaga}
                button={true}
                vaga={idVaga}
                vagasApi={data?.data}
              />
            }
          />
        )}
        <Main />
        <Footer
          isError={isError}
          idVaga={idVaga}
          isSelectedVaga={isSelectedVaga}
          setIdVaga={setIdVaga}
          setIsSelectedVaga={setIsSelectedVaga}
          isLoading={isLoading}
          vagasApi={data?.data}
        />
      </>
    );
  }

  return (
    <>
      {isSelectedVaga && (
        <PopUpVaga
          children={
            <ContainerInfoComp
              setSelectedVaga={setIsSelectedVaga}
              button={true}
              vaga={idVaga}
              vagasApi={data?.data}
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
        vagasApi={data?.data}
      />
    </>
  );
}
