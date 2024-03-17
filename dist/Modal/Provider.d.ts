/// <reference types="react" />
import { RelaxModalConfig } from "./types";
interface RelaxModalProviderProps {
    debug?: boolean;
    children: JSX.Element | JSX.Element[];
    rootConfig?: Partial<RelaxModalConfig>;
}
export declare const RelaxModalProvider: React.FC<RelaxModalProviderProps>;
export {};
