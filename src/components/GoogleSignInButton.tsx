import React from 'react';

export function GoogleSignInButton() {
  return (
    <button
      className="google-btn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
      type="button"
      // TODO: Implement sign in with Google logic
    >
      <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
      Sign in with Google
    </button>
  );
}
