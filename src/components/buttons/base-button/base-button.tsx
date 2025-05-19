import "./base-button.scss";

interface BaseButtonProps {
    size?: string;
    layout: "filled-base-button" | "outlined-base-button";
    children: React.ReactNode;
}

export const BaseButtonComponent = ({ size, layout, children }: BaseButtonProps) => {
    // Define o estilo do botão dinamicamente
    const customStyle = size === "full" ? { width: "100%" } : size ? { width: size } : {};

    return (
        <button className={`${layout}`} style={customStyle}>
            {children}
        </button>
    );
};
