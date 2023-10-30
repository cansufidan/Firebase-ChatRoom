import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase.Config';
import Auth from './pages/Auth';
import { onAuthStateChanged, signOut} from 'firebase/auth';
import Chat from './pages/Chat';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).catch((err) => console.log("Hata", err))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value);
  };

  if(!isAuth){
    return(
      <div className="container">
        <Auth/>
      </div>
    );
    }

  return (
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom}/>
      ) : (
    <form onSubmit={handleSubmit} className="room-container">
      <h1>Choose Room</h1>
      <p>Which room will you enter?</p>
      <input type="text"/>

      <button type='submit'>Enter the Room</button>

      <button 
      onClick={handleLogout} 
      className='logout' 
      type='button'
      >
      Log Out
    </button>
    </form>
      )}
    </div>
  );
}

export default App
