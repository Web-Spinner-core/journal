import { useState, FormEvent, FunctionComponent } from 'react';
import { signIn } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface SignInFormProps {}

const SignInForm: FunctionComponent<SignInFormProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    // Perform sign in
    await signIn('credentials', { email, password });
  };

  return (
    <form onSubmit={handleSignIn} className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <Label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</Label>
        <Input id="email" type="email" placeholder="name@edu.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-6">
        <Label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password</Label>
        <Input id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit">
          Sign In
        </Button>
        <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Create an account
        </a>
      </div>
    </form>
  );
};

export default SignInForm;
