import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in.styles.scss';

const defaultformField = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultformField);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultformField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        case 'auth/invalid-email':
          alert('Invalid email ');
          break;
        default:
          alert('Something went wrong');
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your name and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInwithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
