import {RelaxModalConfig} from "../interfaces";
import {DEFAULT_CONFIG} from "../default-values";

export const setModalConfig = (
  userConfig: Partial<RelaxModalConfig>
): Partial<RelaxModalConfig> => {
  if ("closeButton" in userConfig) {
    userConfig["closeButton"] = {
      ...DEFAULT_CONFIG["closeButton"],
      ...userConfig["closeButton"],
    };
  }

  return {...DEFAULT_CONFIG, ...userConfig};
};
