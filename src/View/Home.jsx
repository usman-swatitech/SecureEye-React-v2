import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const loginKey = localStorage.getItem('myKey');
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginKey) {
      navigate('/signin');
    }
  }, [loginKey, navigate]);

  if (!loginKey) {
    return null;
  }

  return (
    <div className='main-content'>
      <div className='frame-container'>
      </div>
    </div>
  );
};

export default App;
