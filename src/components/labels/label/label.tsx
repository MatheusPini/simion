import {ReactNode} from 'react'
import "./label.scss"

type TSizeInput = "small" | "medium" | "large"
interface ILabelComponent{
    name: string
    children: ReactNode
    size: TSizeInput
}
export const LabelComponent = ({name, size, children}: ILabelComponent) => {
    return <label className={`label-${size}`} htmlFor={name}>{children}</label>
}