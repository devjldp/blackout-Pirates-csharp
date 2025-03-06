import { useState } from 'react';

const LogIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create the user data object
    const userData = {
      userName,
      password,
    };

    // Send the data to the backend using fetch
    fetch('http://localhost:5127/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Send as JSON
      },
      body: JSON.stringify(userData), // Convert the data to JSON
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => console.log('Success:', data)) // Handle successful response
      .catch((error) => console.error('Error:', error)); // Handle error
  };

  return (
    <>
      <h1 className="text-white">LogIn</h1>
      <div className="text-white">
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User</label>
          <input
            type="text"
            id="user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // Update state on input change
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default LogIn;
