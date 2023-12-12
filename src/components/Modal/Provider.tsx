import {RelaxModal} from ".";
import {RelaxModalContext} from "./context";
import {RelaxModalConfig} from "./interfaces";
import {DEFAULT_CONFIG} from "./default-values";
import {useCallback, useEffect, useMemo, useState} from "react";

interface RelaxModalProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const RelaxModalProvider: React.FC<RelaxModalProviderProps> = ({
  children,
}) => {
  const [config, setConfig] = useState<RelaxModalConfig>(DEFAULT_CONFIG);
  const [element, setElement] = useState<JSX.Element | undefined>();

  const openModal = useCallback(
    (
      element: JSX.Element,
      config: Partial<RelaxModalConfig> = DEFAULT_CONFIG
    ): void => {
      setElement(element);
      setConfig((prev) => {
        const newConfig = config;
        if ("closeButton" in config) {
          newConfig["closeButton"] = {
            ...DEFAULT_CONFIG["closeButton"],
            ...config["closeButton"],
          };
        }
        return {...prev, ...newConfig};
      });
    },
    []
  );

  const closeModal = useCallback((): void => {
    setElement(undefined);
    setConfig(DEFAULT_CONFIG);
  }, []);

  useEffect(() => {
    const {autoCloseMS} = config;
    if (typeof autoCloseMS === "number") {
      setTimeout(() => {
        closeModal();
      }, autoCloseMS);
    }
  }, [config]);

  const values = useMemo(
    () => ({
      config,
      element,
      openModal,
      closeModal,
    }),
    [element]
  );
  return (
    <RelaxModalContext.Provider value={values}>
      {children}
      <RelaxModal />
    </RelaxModalContext.Provider>
  );
};
