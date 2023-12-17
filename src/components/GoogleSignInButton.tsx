import { FunctionComponent } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

interface GoogleSignInButtonProps {}

const GoogleSignInButton: FunctionComponent<GoogleSignInButtonProps> = () => {
  return (
    <Button
      onClick={() => signIn('google')}
      className="google-btn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center mt-6"
    >
      <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
