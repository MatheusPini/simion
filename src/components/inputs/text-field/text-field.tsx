import { ITextFieldComponent } from "../../../types/inputsProperties"
import { LabelComponent } from "../../labels/label/label"
import "./text-field.scss"

export const TextFieldComponent = ({ label, name, type, placeholder, size = "medium" }: ITextFieldComponent) => {
    return (
        <>
            <LabelComponent size={size} name={name}>{label}</LabelComponent>
            <input className={`input-${size}`} type={type} name={name} placeholder={placeholder} />
        </>
    )

}