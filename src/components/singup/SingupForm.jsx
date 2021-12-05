import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Input from '../common/Input';
import RadioInput from '../common/RadioInput';
import Select from '../common/SelectComponent';
import CheckBoxInput from '../common/CheckBoxInput';
import BooleanInput from '../common/BooleanInput';

const initialValues = {
    name: '',
    email: '',
    phoneNumber:"",
    password: "",
    passwordConfirm: '',
    gender: '',
    nationality: '',
    intrests: [],
    terms: false,
}

const SingUpForm = () => {
    const [formValues, setFormValues] = useState(null);
    
    const radioOtion = [{ label: 'Male', value: '0' },
    { label: 'Female', value: '1' }];
    const selectOption = [{ label: "select Option", value: '' }, { label: 'Iran', value: 'IR' },
    { label: 'Germany', value: 'GEM' },
        { label: 'USA', value: 'US' }];
    
    const checkBoxOption=[{label:'React.js',value:"React.js"},{label:'Vue.js',value:'Vue.js'}]
    useEffect(() => {
        axios.get('http://localhost:3001/users/1').then(res=>setFormValues(res.data)).catch(err=>err) 
    }, [])
    
   

    const onSubmit = (values) => {
        axios.post('http://localhost:3001/users', values).then(res => console.log(res)).catch(err => console.log(err));
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
        gender: yup.string().required('Select a gender is required'),
        nationality: yup.string().required('select one nationality'),
        intrests: yup.array().min(1).required('at list select one expertise! '),
        terms:yup.boolean().required('You must accept the terms and conditions').oneOf([true], "You must accept the terms and conditions"),
        
    });

    const formik = useFormik({ initialValues: formValues || initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize: true });
    
   return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label='Name' name='name' />
                <Input formik={formik} label='Email' name='email' type='email' />
                <Input formik={formik} label='Phone Number' name='phoneNumber' />
                <Input formik={formik} label='Password' name='password' />
                <Input formik={formik} label='Password Confirmation' name='passwordConfirm' />
                <RadioInput formik={formik} radioOption={radioOtion} name='gender' /> 
                <Select formik={formik} name='nationality' selectOption={selectOption} /> 
                <CheckBoxInput formik={formik} name='intrests' checkBoxOption={checkBoxOption} />
                <BooleanInput formik={formik} name='terms' label='Terms and conditions'/> 
               <button type='submit' disabled={!formik.isValid}>Sing Up</button>
            </form>
        

    </div> );
}
 
export default SingUpForm;