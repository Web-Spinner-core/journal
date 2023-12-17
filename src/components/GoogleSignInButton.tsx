import { FunctionComponent } from 'react';
import '@/styles/GoogleSignInButton.css';

const GoogleSignInButton: FunctionComponent = () => {
  return (
    <button className="google-btn hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex justify-center items-center">
      <div className="google-icon-wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" className="google-icon" />
      </div>
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
