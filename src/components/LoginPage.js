import './LoginPage.css';
import Login from './Login.js';
import SignUp from './SignUp.js';

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <h1> Welcome to the Hackspiration Board! </h1>
      <Login></Login>
      <SignUp></SignUp>
    </div>
  )
};

export default LoginPage;

