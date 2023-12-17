import { NextPage } from 'next';
import SignInForm from '@/components/SignInForm';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import SignInPageLayout from '@/components/SignInPageLayout';

const SignInPage: NextPage = () => {
  return (
    <SignInPageLayout>
      <SignInForm />
      <GoogleSignInButton />
    </SignInPageLayout>
  );
};

export default SignInPage;
