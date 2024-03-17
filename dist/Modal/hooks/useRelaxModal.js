import { useRelaxContext } from "../context";
export const useRelaxModal = () => {
    const { openModal } = useRelaxContext();
    return { openModal };
};
