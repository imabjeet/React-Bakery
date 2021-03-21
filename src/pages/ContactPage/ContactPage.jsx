import React from "react";
import {
  TextField,
  TextArea
} from "../../components/InputFields/InputField.components";
import Button from "../../components/Buttons/Button.components";
import FormTitle from "../../components/FormTitle/FormTitle.components";
import "./ContactPage.styles.css";

function ContactPage() {
  return (
    <form className="contact">
      <FormTitle
        styles="contact_page"
        title="Contact Us"
        disc="Please fill this form in a decent manner"
      />
      <TextField type="text" placeholder="Full Name" />
      <TextField type="text" placeholder="Email" />
      <TextField type="text" placeholder="Mobile No" />
      <TextArea placeholder="Message" />
      <div class="btn_div">
        <Button style="single-button blue" type="submit" name="Submit" />
      </div>
    </form>
  );
}

export default ContactPage;
