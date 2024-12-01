import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CheckoutWrapper, CheckoutForm, SubmitButton } from './CheckoutPage.styled';
import ValidationError from '../../components/ValidationError/ValidationError';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().max(20, 'Maximum length is 20').required('First name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    deliveryMethod: Yup.string().oneOf(['standard', 'express'], 'Invalid delivery method').required('Delivery method is required'),
  });

  const initialValues = {
    firstName: '',
    email: '',
    address: '',
    phone: '',
    deliveryMethod: '',
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    navigate('/success');
  };

  return (
    <CheckoutWrapper>
      <h1>Checkout</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <CheckoutForm>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={ValidationError} />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={ValidationError} />

            <label htmlFor="address">Address</label>
            <Field name="address" type="text" />
            <ErrorMessage name="address" component={ValidationError} />

            <label htmlFor="phone">Phone Number</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component={ValidationError} />

            <label htmlFor="deliveryMethod">Delivery Method</label>
            <Field name="deliveryMethod" as="select">
              <option value="">Select...</option>
              <option value="standard">Standard</option>
              <option value="express">Express</option>
            </Field>
            <ErrorMessage name="deliveryMethod" component={ValidationError} />

            <SubmitButton type="submit">Submit</SubmitButton>
          </CheckoutForm>
        </Form>
      </Formik>
    </CheckoutWrapper>
  );
};

export default CheckoutPage;
