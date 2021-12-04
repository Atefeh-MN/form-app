import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Input from '../common/Input';
import RadioInput from '../common/RadioInput';

const initialValues = {
    name: '',
    email: '',
    phoneNumber:"",
    password: "",
    passwordConfirm: '',
    gender:''
}

const SingUpForm = () => {
    const [formValues, setFormValues] = useState(null);
    const radioOtion = [{ label: 'Male', value: '0' },
    { label: 'Female', value: '1' }];
    
    useEffect(() => {
       axios.get(' http://localhost:3001/users/1').then(res=>setFormValues(res.data)).catch(err=>err) 
    },[])

    const onSubmit = (values) => {
        
    }
    const validationSchema = yup.object({
        name: yup.string().required('Name is required').min(6, 'Must be more than 6 characters'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        phoneNumber: yup.string().required('phone Number is required').matches(/^[0-9]{11}$/, 'Must be type number and 11 characters'),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        gender: yup.string().required('Select a gender is required')
        
    });
    
    const formik = useFormik({ initialValues:formValues||initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize:true});
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label='Name' name='name' />
                <Input formik={formik} label='Email' name='email' type='email' />
                <Input formik={formik} label='Phone Number' name='phoneNumber' />
                <Input formik={formik} label='Password' name='password' />
                <Input formik={formik} label='Password Confirmation' name='passwordConfirm' />
                <RadioInput formik={formik} radioOption={radioOtion} name='gender'/>
               <button type='submit' disabled={!formik.isValid}>Sing Up</button>
            </form>
        

    </div> );
}
 
export default SingUpForm;