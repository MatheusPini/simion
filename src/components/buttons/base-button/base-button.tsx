import { BaseButtonProps } from "../../../types/inputsProperties";
import "./base-button.scss";

export const BaseButtonComponent = ({ width, layout, children, size = "medium" }: BaseButtonProps) => {
    const customStyle = width === "full" ? { width: "100%" } : width ? { width: width } : {};

    return (
        <button className={`${layout} button-${size}`} style={customStyle}>
            {children}
        </button>
    );
};
