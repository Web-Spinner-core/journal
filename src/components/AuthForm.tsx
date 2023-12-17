import { functionComponent } from 'react';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import SignInButton from '@/components/auth/SignInButton';
import SignInWithGoogleButton from '@/components/auth/SignInWithGoogleButton';
import CreateAccountLink from '@/components/auth/CreateAccountLink';

interface AuthFormProps {
  onSubmit: (username: string, password: string) => void;
}

const AuthForm: functionComponent<AuthFormProps> = ({ onSubmit }) => {
  return (
    <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      onSubmit(username, password);
    }}>
      <div className="mb-4">
        <Label htmlFor="username" text="Username" />
        <Input id="username" type="text" placeholder="user@edu.com" />
      </div>
      <div className="mb-6">
        <Label htmlFor="password" text="Password" />
        <Input id="password" type="password" placeholder="******************" />
      </div>
      <SignInButton />
      <CreateAccountLink />
      <SignInWithGoogleButton />
    </form>
  );
};

export default AuthForm;
