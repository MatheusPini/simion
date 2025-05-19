import { LabelComponent } from "../../labels/label/label"
import "./text-field.scss"

type TTextFieldComponent = "email" | "text" | "password"
type TSizeInput = "small" | "medium" | "large"
interface ITextFieldComponent {
    name: string
    label: string
    type: TTextFieldComponent
    placeholder?: string
    size?: TSizeInput
}
export const TextFieldComponent = ({ label, name, type, placeholder, size = "medium" }: ITextFieldComponent) => {
    return (
        <>
            <LabelComponent size={size} name={name}>{label}</LabelComponent>
            <input className={`input-${size}`} type={type} name={name} placeholder={placeholder} />
        </>
    )

}