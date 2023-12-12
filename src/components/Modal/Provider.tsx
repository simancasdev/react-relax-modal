import {RelaxModal} from ".";
import {setModalConfig} from "./helpers";
import {RelaxModalContext} from "./context";
import {DEFAULT_CONFIG} from "./default-values";
import {Modal, RelaxModalConfig} from "./interfaces";
import {useCallback, useEffect, useMemo, useState} from "react";

interface RelaxModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const RelaxModalProvider: React.FC<RelaxModalProviderProps> = ({
  children,
}) => {
  const [stack, setStack] = useState<Modal[]>([]);
  const [activeModal, setActiveModal] = useState<Modal>();

  const openModal = useCallback(
    (
      element: JSX.Element,
      config: Partial<RelaxModalConfig> = DEFAULT_CONFIG
    ): void => {
      const newModal: Modal = {
        element,
        config: setModalConfig(config),
      };
      setStack((prevModals) => [...prevModals, newModal]);
      setActiveModal(newModal);
    },
    []
  );

  const closeModal = useCallback((): void => {
    setStack((prev) => {
      const removed = prev.pop();
      if (removed && removed["config"]["onClosed"]) {
        removed["config"]["onClosed"]();
      }
      return [...prev];
    });
  }, [stack]);

  useEffect(() => {
    const currentModal = stack[stack.length - 1];
    if (currentModal) {
      const {autoCloseMS} = currentModal["config"];
      if (typeof autoCloseMS === "number") {
        setTimeout(() => {
          closeModal();
        }, autoCloseMS);
      }
    }
  }, [stack]);

  const values = useMemo(
    () => ({
      stack,
      openModal,
      closeModal,
      activeModal,
    }),
    [stack]
  );
  return (
    <RelaxModalContext.Provider value={values}>
      {children}
      {stack.map(({element, config}, key) => (
        <RelaxModal
          key={key}
          element={element}
          config={config as RelaxModalConfig}
        />
      ))}
    </RelaxModalContext.Provider>
  );
};
