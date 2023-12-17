import { FunctionComponent } from 'react';
import SignInForm from '@/components/SignInForm';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import CreateAccountLink from '@/components/CreateAccountLink';

const LoginPage: FunctionComponent = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
      <div className="w-full max-w-xs mx-auto">
        <SignInForm />
        <CreateAccountLink />
        <GoogleSignInButton />
      </div>
    </div>
  );
};

export default LoginPage;
