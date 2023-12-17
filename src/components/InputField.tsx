import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError | undefined;
}

export function InputField({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-300 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...register}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </div>
  );
}
