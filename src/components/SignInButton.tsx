import { functionComponent } from 'react';
import Button from '@/components/ui/button';

const SignInButton: functionComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign in
      </Button>
    </div>
  );
};

export default SignInButton;
