import { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import validate from '../Utils/validateInfo';
import { firebaseApp } from '../Firebase/firebaseConfig';

const useForm = (isNewUser) => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const initialValue = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const signInUser = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        const user = {};
        user.email = res.user.email;
        user.name = res.user.displayName;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const user = {};
        user.errorMessage = error.message;
        setUser(user);
        setLoading(false);
      });
  };
  const createNewUser = () => {
    const user = {};
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((result) => {
        const currentUser = firebaseApp.auth().currentUser;
        currentUser
          .updateProfile({
            displayName: values.username,
          })
          .catch((error) => {
            user.errorMessage = error.message;
          });
        user.name = values.username;
        user.email = result.user.email;
        setUser(user);
        console.log(user);
        history.replace(from);
      })
      .catch((error) => {
        user.errorMessage = error.message;
        setUser(user);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values, isNewUser));
    if (isFormValid) {
      setLoading(true);
      if (isNewUser) {
        createNewUser();
      } else {
        signInUser();
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) setIsFormValid(true);
  }, [errors]);
  return { values, loading, errors, isFormValid, handleChange, handleSubmit };
};

export default useForm;
