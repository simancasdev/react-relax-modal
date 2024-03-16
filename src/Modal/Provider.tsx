import {RelaxModal} from "./RelaxModal";
import {RelaxModalContext} from "./context";
import {DEFAULT_CONFIG} from "./default-values";
import {Modal, RelaxModalConfig} from "./types";
import {useCallback, useEffect, useMemo, useState} from "react";

interface RelaxModalProviderProps {
  debug?: boolean;
  children: JSX.Element | JSX.Element[];
  rootConfig?: Partial<RelaxModalConfig>;
}

export const RelaxModalProvider: React.FC<RelaxModalProviderProps> = ({
  children,
  rootConfig,
  debug = false,
}) => {
  const [stack, setStack] = useState<Modal[]>([]);
  const [activeModal, setActiveModal] = useState<Modal>();

  const openModal = useCallback(
    (element: JSX.Element, userConfig?: Partial<RelaxModalConfig>): void => {
      const newModal: Modal = {
        element,
        config: Object.assign({}, DEFAULT_CONFIG, rootConfig, userConfig),
      };
      setStack((prevModals) => [...prevModals, newModal]);
      setActiveModal(newModal);
    },
    []
  );

  const closeModal = useCallback((): void => {
    const removed = stack.slice(-1)[0];
    if (removed) {
      const {onBackdrop, onClosed} = removed["config"];
      if (onClosed) onClosed();
      if (onBackdrop) onBackdrop();
    }
    if (stack.length > 1) {
      const temp: Modal[] = [...stack];
      setActiveModal(temp[stack.length - 2]);
      temp.pop();
      setStack(temp);
    } else {
      setStack([]);
      setActiveModal(undefined);
    }
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

  useEffect(() => {
    if (debug) {
      console.log("Active Modal: ", activeModal);
      console.log("Stack: ", stack);
    }
  }, [debug, activeModal, stack]);

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
