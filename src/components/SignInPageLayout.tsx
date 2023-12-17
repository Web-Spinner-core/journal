import { FunctionComponent, ReactNode } from 'react';

interface SignInPageLayoutProps {
  children: ReactNode;
}

const SignInPageLayout: FunctionComponent<SignInPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xs">
        {children}
      </div>
    </div>
  );
};

export default SignInPageLayout;
