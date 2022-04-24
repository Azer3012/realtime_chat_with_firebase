import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import styles from './Style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";
import authError from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  email: '',
  password: '',
};
const Login = () => {
  const navigation = useNavigation();
  const [loading,setLoading]=useState(false)

  const handleSignUp = () => {
    navigation.navigate('Sign');
  };

  const handleFormSubmit =async (formValues) => {
    console.log(formValues);

    
    try {
      setLoading(true)

    await auth().signInWithEmailAndPassword(formValues.email,formValues.password)

    setLoading(false)

    navigation.navigate('Messages')
      
    } catch (error) {
      setLoading(false)
      console.log(error);
      showMessage({
        message:authError(error.code),
        type:'danger'
      })
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('email')}
              value={values.email}
              placeholder="Enter your email"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Enter your password"
            />
            <Button theme="primary" text="Sign in" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>

      <Button theme="secondary" text="Sing up" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default Login;
