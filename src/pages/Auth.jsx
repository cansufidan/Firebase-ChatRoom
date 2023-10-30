import { signInWithPopup, signInWithRedirect } from "firebase/auth"
import { auth, provider } from "../firebase/firebase.Config"

const Auth = () => {

    const handleClick = () => {
        signInWithRedirect(auth, provider)
    }

  return (
    <div className="auth">
        <h1>Chat Room</h1>
        <p>Sign in to continue</p>

        <button onClick={handleClick}>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>
            <span>Sign in with Google</span>
        </button>
    </div>
  )
}

export default Auth