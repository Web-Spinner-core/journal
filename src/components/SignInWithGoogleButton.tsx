import { functionComponent } from 'react';
import Button from '@/components/ui/button';

const SignInWithGoogleButton: functionComponent = () => {
  return (
    <div className="mt-6">
      <Button className="google-btn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center" type="button">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInWithGoogleButton;
