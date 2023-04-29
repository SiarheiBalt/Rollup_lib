import React from 'react';
import './Button.css'

interface ButtonProps {
    label: string;
}

console.log(2)
const Button = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default Button;