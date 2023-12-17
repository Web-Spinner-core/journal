import React from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '@/components';
import { Button } from '@/components';
import { GoogleSignInButton } from '@/components';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

  function onSubmit(data: SignInFormData) {
    // TODO: Implement sign in logic
    console.log(data);
  }

  return (
    <form
      className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="Email"
        id="email"
        type="email"
        placeholder="name@edu.com"
        register={register('email', { required: 'Email is required' })}
        error={errors.email}
      />
      <InputField
        label="Password"
        id="password"
        type="password"
        placeholder="******************"
        register={register('password', { required: 'Password is required' })}
        error={errors.password}
      />
      <div className="flex items-center justify-between">
        <Button label="Sign In" onClick={() => {}} />
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Create an account
        </a>
      </div>
      <div className="mt-6">
        <GoogleSignInButton />
      </div>
    </form>
  );
}
