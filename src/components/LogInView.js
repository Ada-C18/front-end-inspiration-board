import './LogInView.css';
import LogInForm from './LogInForm.js';
import SignUpForm from './SignUpForm.js';

const LogInView = () => {
  return (
    <div className='LogInView'>
      <h1> Welcome to the Hackspiration Board! </h1>
      <LogInForm></LogInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default LogInView;
