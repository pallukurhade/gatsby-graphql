import React, { useState } from "react";
import useForm from "react-hook-form";

import Layout from "../components/layout"

const required = "This field is required";

const ContactPage = () => {
 
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch('/', { 
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <Layout>
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
    </Layout>
  
  );

  const showForm = (
    <Layout>
    <div id="contact" className="container">
    <div className="row justify-content-md-center">
    <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-8">
        
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="fname">
        <h5>First Name</h5>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})}
 
          disabled={isSubmitting}
        />
        {errors.name && <div className="msg-error">{errors.name.message}</div>}
      </label>
      <label htmlFor="lname">
      <h5>Last Name</h5>
      <input
        type="text"
        name="lname"
        id="lname"
        placeholder="Your Last name"
        ref={register({ required })}
        disabled={isSubmitting}
      />
      {errors.name && <div className="msg-error">{errors.name.message}</div>}
    </label>
      <label htmlFor="email">
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({ required })}
          disabled={isSubmitting}
          {...register("Last name", {required: true, maxLength: 100})} 
        />
        {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
      </label>

      <label htmlFor="phone">
        <h5>Phone Number</h5>
        <input
          type="text"
          ref={register({ required })}
          name="phone"
          id="phone"
          placeholder="Your message"
          disabled={isSubmitting}
          {...register("Mobile number", {required: true, maxLength: 12})} 
        />
        {errors.question && (
          <div className="msg-error">{errors.phone.message}</div>
        )}
      </label>

      <div className="submit-wrapper">
        <button type="submit" class="btn btn-success" disabled={isSubmitting}>
          Send
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
</Layout>
  );

  return (
    <Layout>   
    <div className="page register-page">
      <div className="text-side">
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
    </Layout>
  );


};


export default ContactPage