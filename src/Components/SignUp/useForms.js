import { useState, useEffect } from 'react';
import validate from './validateInfo';

const useForm = (isNewUser) => {
  const initialValue = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values, isNewUser));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) setIsFormValid(true);
  }, [errors, isSubmitting]);
  return { values, errors, isFormValid, handleChange, handleSubmit };
};

export default useForm;
