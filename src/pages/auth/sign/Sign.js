import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import styles from './Style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";


import {Formik} from 'formik';
import authError from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};
const Sign = () => {
  const navigation = useNavigation();

  const [loading,setLoading]=useState(false)

  const handleLogin = () => {
    navigation.goBack();
  };

  const handleFormSubmit=async (formValues)=>{
    console.log(formValues);

    if(formValues.password!==formValues.confirmPassword){
      showMessage({
        message:'Dont match passwords',
        type:'warning'
      })

      return
    }

    try {
      setLoading(true)
     await auth().createUserWithEmailAndPassword(formValues.email,formValues.confirmPassword)
     showMessage({
       message:'Succes',
       type:'success'
     })

     setLoading(false)

     navigation.navigate('Login')
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
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
            <Input
              onType={handleChange('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Repeat your password"
            />
            <Button onPress={handleSubmit} theme="primary" text="Sign Up" loading={loading} />
          </>
        )}
      </Formik>

      <Button theme="secondary" text="Go Back" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default Sign;




