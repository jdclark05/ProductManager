import { useState} from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Main from './views/Main';
import OneProductDisplay from './components/OneProductDisplay';
import EditProduct from './components/EditProduct';
import appBackground from './components/images/simpleLines.png';

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

  const styles = {
    backgroundImage: `url(${appBackground})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'cover',
    width: 'cover',
    height: '100%;',
    padding: '5%',
    marginBottom: '0px',
    backdropFilter: 'opacity(.5)'
};

  return (
    <div id="appContainer" style={styles}>
            <Router>
                    <Main path="/" onOneProdNavigate={ oneProdNavigate }/>
                    <OneProductDisplay path="/:id" id={ id } onEditNavigate={ editNavigate } />
                    <EditProduct path="/:id/edit" id={ id }/>
            </Router>
    </div>
  );
}

export default App;

