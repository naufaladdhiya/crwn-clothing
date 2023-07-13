import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignIn from "../../components/sign-in/sign-in.component";

import {
  AuthenticationContainer,
  SignInContainer,
  SignUpContainer,
} from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInContainer>
        <SignIn />
      </SignInContainer>

      <SignUpContainer>
        <SignUpForm />
      </SignUpContainer>
    </AuthenticationContainer>
  );
};

export default Authentication;
