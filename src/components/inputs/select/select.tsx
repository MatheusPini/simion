import { ReactNode } from "react"
import { LabelComponent } from "../../labels/label/label"
import "./select.scss";

type TSizeInput = "small" | "medium" | "large"
interface ISelectComponent {
    name: string
    label: string
    children: ReactNode
    size?: TSizeInput
}
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