import { functionComponent } from 'react';
import AuthForm from '@/components/AuthForm';

const AuthPage: functionComponent = () => {
  const handleSignInSubmit = (username: string, password: string) => {
    // Logic for handling sign in with username and password
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <AuthForm onSubmit={handleSignInSubmit} />
      </div>
    </div>
  );
};

export default AuthPage;
