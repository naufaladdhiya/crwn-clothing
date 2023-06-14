import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultformField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformField);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultformField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // add validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    }

    // create user in firebase auth and firestore db if no errors occur in auth creation process and reset form fields
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      
      await createUserDocumentFromAuth(user, { displayName });
      
      // reset form fields if user creation is successful
      resetFormFields();
    } catch (error) {
      // handle error if user creation fails
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Email already in use');
          break;
        case 'auth/password-too-short':
          alert('Password too short');
          break;
        case 'auth/invalid-email':
          alert('Invalid email');
          break;
        case 'auth/weak-password':
          alert('Weak password');
          break;
        case 'auth/passwords-dont-match':
          alert("Passwords don't match");
          break;
        default:
          alert(error);
          break;
      }
    }
  };

  // update form fields as user types
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          required
          value={displayName}
          onChange={handleChange}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
