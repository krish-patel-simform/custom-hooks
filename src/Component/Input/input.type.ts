import type { InputHTMLAttributes, ReactNode } from "react";

type InputType = 'text' | 'search' | 'checkbox' | 'email' | 'password'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    leftIcon ?: ReactNode,
    rightIcon?:ReactNode,
    type:InputType,
    placeholder?:string,
    containerStyle?:object,
    name:string
}