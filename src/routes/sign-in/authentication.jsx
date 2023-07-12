import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className="sign-in-container">
        <SignIn />
      </div>
      <div className="sign-up-container">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
