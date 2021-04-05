import React, {useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Layout from "../components/layout"


const ContactPage = () => {
 
const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required!'),
        lastName: Yup.string().required('Last name is required!'),
        email: Yup.string().email('Invalid email address!').required('Email address is required!'),
        phoneNumber: Yup.number().required('Phone number is required!').integer().positive(),
          
  });
  const [submitted, setSubmitted] = useState(false);
 
  const showThankYou = (
    <Layout>
    <div className="msg-confirm">
       <h1> Thank you </h1>
       <p>Awesome! Your message was sent.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
    </Layout>
  
  );

  const showForm = (  
    <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
                
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                setSubmitted(true);
              }}
              render={({ errors, touched }) => (
                <Form>
    
                  <div className="form-row">
                    <div className={`form-group col-md-6 ${errors.firstName && touched.firstName && 'has-error'}`}>
                      <label htmlFor="firstName">First Name</label>
                      <Field name="firstName" className="form-control" placeholder="First Name" type="text" />
                      { errors.firstName && touched.firstName && <span className="help-block">{errors.firstName}</span> }
                    </div>
                    <div className={`form-group col-md-6 ${errors.lastName && touched.lastName && 'has-error'}`}>
                      <label htmlFor="lastName">Last Name</label>
                      <Field name="lastName" className="form-control" placeholder="Last Name" type="text" />
                      { errors.lastName && touched.lastName && <span className="help-block">{errors.lastName}</span> }
                    </div>
                  </div>
                  <div className="form-row">
                    <div className={`form-group col-md-6 ${errors.email && touched.email && 'has-error'}`}>
                      <label htmlFor="email">Email</label>
                      <Field name="email" className="form-control" placeholder="teddy@pixventive.com" type="email" />
                      <small id="emailHelp" className="form-text text-muted">We`ll never share your email with anyone else.</small>
                      { errors.email && touched.email && <span className="help-block">{errors.email}</span> }
                    </div>
                    <div className={`form-group col-md-6 ${errors.phoneNumber && touched.phoneNumber && 'has-error'}`}>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Field name="phoneNumber" className="form-control" placeholder="Phone Number" type="text" />
                      { errors.phoneNumber && touched.phoneNumber && <span className="help-block">{errors.phoneNumber}</span> }
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-12">
                       <button type="submit" className="Button ButtonPrimary  css-57q1e7">Send</button>
                    </div>
                  </div>
                </Form>
        )} />
  );

  return (
    <Layout> 
    <section id="contact">
    <div className="container">
    <div className="row">
        <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12">  
    <div className="page contact-page">
       <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
    </div>
    </div>
    </div>
   </section>   
    </Layout>
  );


};


export default ContactPage;

