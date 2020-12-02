import React, {useState} from 'react'
import './styles.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();
    //do something with the content logged
  };

  const handleRegisterButton = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <img src="" className="login__image" alt="" />
      <div className="login__container">
        <h1>Sign In Here</h1>
        <form>
          <h5>Email/Username</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signIn"
            type="submit"
            onClick={handleSubmitButton}
          >
            Sign In
          </button>
          <p>If you don't own an account yet please go the signup page</p>
          <button onClick={handleRegisterButton} className="login__register">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;