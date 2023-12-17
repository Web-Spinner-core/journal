import { FunctionComponent } from 'react';
import Link from 'next/link';

const CreateAccountLink: FunctionComponent = () => {
  return (
    <Link href="/auth/register">
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        Create an account
      </a>
    </Link>
  );
};

export default CreateAccountLink;
