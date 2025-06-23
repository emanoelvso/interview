import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
enum Status {
  INITIAL = 'initial',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

function App() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);

  const handleAmount = (event: any) => {
    setAmount(event.target.value);
  }

  const handleDescription = (event: any) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event: any) => {
      event.preventDefault();
      setStatus(Status.LOADING);
      fetch('http://localhost:3000/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: parseInt(amount, 10),
            description: description
          })})
        .then(response => response.json())
        .then(data => setStatus(Status.SUCCESS));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="text" name="amount" onChange={handleAmount}></input>
      </label>
      <label>
        Description:
        <input type="text" name="description" onChange={handleDescription}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
    {status === Status.SUCCESS ? 'Success' : status === Status.LOADING ? 'Loading' : ''}
    </>
  );
}

export default App;
