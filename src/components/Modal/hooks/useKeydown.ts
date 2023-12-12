import {useEffect} from "react";
import {useRelaxContext} from "../context";

export const useKeydown = () => {
  const {closeModal, config} = useRelaxContext();
  const {closeKey} = config;

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      switch (event["key"]) {
        case closeKey:
          closeModal();
          break;
      }
    });

    return () => {
      window.removeEventListener("keydown", () => undefined);
    };
  }, [closeKey]);
};
