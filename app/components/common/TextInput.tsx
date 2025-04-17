import React from "react";

interface TextInputProps {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    maxLength?: number;
}

// Use React.forwardRef to correctly handle refs
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            id,
            name,
            placeholder,
            value,
            defaultValue,
            onChange,
            onKeyDown,
            onBlur,
            type = "text",
            className = "",
            disabled = false,
            required = false,
            maxLength = 50,
        },
        ref // Forward the ref from parent component
    ) => {
        return (
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`text-input p-2 border rounded mt-1 text-color1 
              placeholder-gray-300 h-14 w-3/4 text-xl ${className}`}
                disabled={disabled}
                required={required}
                ref={ref} // Forward the ref to the actual input element
            />
        );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;
