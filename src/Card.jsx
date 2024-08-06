import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'

import './App.css'

const Card = () => {
  const [leagues, setLeagues] = useState([]);
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (response) => {
    setToken(response.credential);
    fetchLeagues(response.credential);
};


  const fetchLeagues = (token) => {
    axios.get('http://localhost:8080/api/v1/photoleague/leagues', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
      setLeagues(response.data);
    });
  };

  const addLeague = (itemName) => {
    axios.post('http://localhost:8080/api/v1/photoleague/leagues', { name: itemName }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        setItems([...items, response.data]);
    });
};


return (
  <div>
      <h1>React OAuth2 with Google</h1>
      {!token && (
          <GoogleLogin
              onSuccess={handleLoginSuccess}
              onFailure={() => console.log('Login Failed')}
          />
      )}
      {token && (
          <div>
              <input type="text" id="itemName" />
              <button onClick={() => addItem(document.getElementById('itemName').value)}>Add League</button>
              <ul>
                  {leagues.map(league => (
                      <li key={league.id}>{league.name}</li>
                  ))}
              </ul>
          </div>
      )}
  </div>
);

}

export default Card