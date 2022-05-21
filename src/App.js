
import './App.css';
import Sidebar from './Componentes/Sidebar';
import Chat from './Componentes/Chat';
import { Switch } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Login from './Componentes/Login';
import { useState } from 'react';
import { useStateValue } from './Componentes/StateProvider';
import { User } from 'firebase';
function App() {
// const [{user}, dispatch] = useStateValue();

  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {/* {!user ? ( // si no hay usuario hacer login, si hay usuario renderizar.
        <h1>LOGIN</h1>
      ) : ( */}
        <div className="app__body">
        <Router>
            <Sidebar/>
            
            <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>
        </Router>
      </div>

      )}
      </div>
  );
}

export default App;
