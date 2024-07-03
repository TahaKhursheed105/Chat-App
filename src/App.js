import logo from './logo.svg';
import './App.css';
import List from './Components/list/List';
import Chat from './Components/Chat/Chat';
import Details from './Components/details/Details';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';

function App() {

  const user = true;

  return (
    <div className="container">
      {
        user ? (
          <>

          <List />
          <Chat />
          <Details />

          </>
        ) : (
          <Login />
        )}

        <Notification />
    </div>
  );
}

export default App;
