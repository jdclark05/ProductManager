import { useState} from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Main from './views/Main';
import OneProductDisplay from './components/OneProductDisplay';
import EditProduct from './components/EditProduct';

function App() {
  const [id, setId] = useState("");

  const oneProdNavigate = ( data ) => {
    let id = data;
    setId(id);
    navigate(`/${id}`);
  }

  const editNavigate = ( data ) => {
    let id = data;
    setId(id)
    navigate(`/${id}/edit`)
  }

  return (
    <div id="appContainer">
            <Router>
                    <Main path="/" onOneProdNavigate={ oneProdNavigate }/>
                    <OneProductDisplay path="/:id" id={ id } onEditNavigate={ editNavigate } />
                    <EditProduct path="/:id/edit" id={ id }/>
            </Router>
    </div>
  );
}

export default App;

