import { ReactNode } from "react"
import { TSizeInput } from "./dimensions"

export interface ITextFieldComponent {
    name: string
    label: string
    type: "email" | "text" | "password" | "number"
    placeholder?: string
    size?: TSizeInput
}

export interface BaseButtonProps {
    width?: string;
    layout: "filled-base-button" | "outlined-base-button";
    size?: TSizeInput;
    children: React.ReactNode;
}

export interface ISelectComponent {
    name: string
    label: string
    children: ReactNode
    size?: TSizeInput
}