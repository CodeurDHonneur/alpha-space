import React from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';

type FormInputProps = {
    label: string;
    name: string;
    type: string;
    defaultValue: string | undefined;
    placeholder: string;
}

const FormInput = ({ label, name, type, defaultValue, placeholder }: FormInputProps) => {
    return (
        <div>
            <Label className='' htmlFor={name}>
                {label || name}
            </Label>
            <Input
                id={name}
                name={name}
                type={type}
                defaultValue={defaultValue ? defaultValue : ""} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormInput