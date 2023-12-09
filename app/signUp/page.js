import Link from 'next/link';
import SignUp from '../_utils/SignUp';


export default function signUpPage() {
  return (
    <main className='mt-52'>
      <SignUp />
      <div>     
        
       <p className='text-center text-blue-200'><Link href="/">Back to Log In Page</Link></p>
      </div>
      
    </main>
  )
}
