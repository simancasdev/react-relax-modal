export const DEFAULT_CONFIG = {
    style: undefined,
    closeKey: "Escape",
    alignment: "center",
    onClosed: undefined,
    closeOnBackdrop: true,
    onBackdrop: undefined,
    autoCloseMS: undefined,
    backgroundColor: "rgba(0,0,0, .6)",
    animation: {
        animate: { transform: "translateY(0)", opacity: 1 },
        initial: { transform: "translateY(4rem)", opacity: 0 },
    },
    closeButton: {
        show: false,
        icon: undefined,
        style: undefined,
        onClose: undefined,
        defaultIconColor: "#fff",
    },
};
