
import { ISelectComponent } from "../../../types/inputsProperties";
import { LabelComponent } from "../../labels/label/label"
import "./select.scss";

export const SelectComponent = ({ name, label, size = "medium", children }: ISelectComponent) => {
    return (
        <>
            <LabelComponent size={size} name={name}>{label}</LabelComponent>
            <select name={name} className={`select-${size}`} id="">
                {children}
            </select>
        </>
    )
}