import { functionComponent } from 'react';
import Link from 'next/link';

const CreateAccountLink: functionComponent = () => {
  return (
    <div className="mt-4">
      <Link href="/auth/signup">
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Create an account
        </a>
      </Link>
    </div>
  );
};

export default CreateAccountLink;
