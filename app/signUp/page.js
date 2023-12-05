import Link from 'next/link';
import SignUp from '../_utils/SignUp';

export default function signUpPage() {
  return (
    <main>
      <div>
        <p>SIGN UP PAGE</p>
        <p>-</p>
        <Link href="/">Back to Log In Page (link)</Link>
      </div>
      <SignUp />
    </main>
  )
}
