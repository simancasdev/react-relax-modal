import {useEffect} from "react";
import {useRelaxContext} from "../context";

export const useKeydown = () => {
  const {closeModal, activeModal} = useRelaxContext();

  useEffect(() => {
    if (typeof activeModal === "undefined") return;
    const {closeKey} = activeModal["config"];
    if (typeof closeKey === "undefined") return;

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
  }, [activeModal]);
};
