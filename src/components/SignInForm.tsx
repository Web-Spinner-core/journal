import { FunctionComponent } from 'react';
import Label from '@/components/ui/label';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

const SignInForm: FunctionComponent = () => {
  return (
    <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <Label htmlFor="username" value="Username" />
        <Input id="username" type="text" placeholder="username@edu" />
      </div>
      <div className="mb-6">
        <Label htmlFor="password" value="Password" />
        <Input id="password" type="password" placeholder="******************" />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" color="blue" text="Sign in" />
      </div>
    </form>
  );
};

export default SignInForm;
