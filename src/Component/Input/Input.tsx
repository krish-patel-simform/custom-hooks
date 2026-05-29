import './input.style.css'
import type { InputProps } from './input.type'


export default function Input({name,type,leftIcon,rightIcon,placeholder,containerStyle,...rest}:InputProps) {
  return (
    <div className='input-container' style={containerStyle}>
        {leftIcon}
      <input name={name} className='input' type={type} placeholder={placeholder} {...rest} />
      {rightIcon}
    </div>
  )
}
