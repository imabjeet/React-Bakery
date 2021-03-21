import React from "react";
import Button from "../../components/Buttons/Button.components";
import FormTitle from "../../components/FormTitle/FormTitle.components";
import { TextField } from "../../components/InputFields/InputField.components";
import "./LoginPage.styles.css";

function LoginPage() {
  return (
    <div className="fillforms">
      <form>
        <FormTitle
          title="Already have an account with us?"
          disc="Use the form below to Sign In"
        />
        <TextField type="text" placeholder="Email" />
        <TextField type="password" placeholder="Password" />
        <div class="btn_div">
          <Button style="custom-button blue" type="submit" name="SIGN IN" />
          <Button
            type="button"
            style="custom-button red"
            name="SIGN IN WITH GOOGLE"
          />
        </div>
      </form>
      <form>
        <FormTitle
          title="Register with us, it's FREE"
          disc="Sign Up with your email and password"
        />
        <TextField type="text" placeholder="Name" />
        <TextField type="text" placeholder="Email" />
        <TextField type="password" placeholder="Password" />
        <TextField type="password" placeholder="Confirm Password" />
        <div class="btn_div">
          <Button style="custom-button blue" type="submit" name="SIGN UP" />
          <Button style="custom-button yellow" type="reset" name="RESET" />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
