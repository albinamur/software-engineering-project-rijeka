import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password,
      });
      if (response.data.success) {
        setIsLoggedIn(true);
        router.push('/');
      } else {
        // handle invalid login
      }
    } catch (error) {
      // handle error
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
      {isLoggedIn && (
        <div>
          <h2>Welcome back, {email}!</h2>
          <p>Here are some additional options:</p>
          {/* show additional options for logged-in users */}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
