import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    phoneNumber:"",
    password: "",
    passwordConfirm:''
}
// const validate = (values) => {
//     let errors = {};
//     console.log(errors)
    
//     if (!values.name) {
//         errors.name='Name is required'
//     }
//      if (!values.email) {
//         errors.email='Email is required'
//     }
//      if (!values.password) {
//         errors.password='Password is required'
//     }
//     return errors;
// }
const SingUpForm = () => {
    const onSubmit = (values) => {
        
    }
    const validationSchema = yup.object({
        name: yup.string().required('Name is required').min(6,'Must be more than 6 characters'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        phoneNumber:yup.string().required('phone Number is required').matches(/^[0-9]{11}$/,'Must be type number and 11 characters'),
        password:yup.string()
                .required('No password provided.') 
                .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordConfirm:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
        
    })
    
    const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true, });
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='formcontrol'>
                    <label htmlFor="name">Name</label>
                    <input type="text" {...formik.getFieldProps('name')} name='name' />
                     {formik.errors.name && formik.touched.name && <div className='error'>{formik.errors.name }</div>}
                </div >
                <div className='formcontrol'>
                    <label htmlFor="name">Email</label>
                    <input type="email" {...formik.getFieldProps('email')} name='email' />
                     {formik.errors.email && formik.touched.email && <div className='error'>{formik.errors.email }</div>}
                </div>
                <div className='formcontrol'>
                    <label htmlFor="name">Phone Number</label>
                    <input type="email" {...formik.getFieldProps('phoneNumber')} name='phoneNumber' />
                     {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className='error'>{formik.errors.phoneNumber }</div>}
                </div>
                <div className='formcontrol'>
                    <label htmlFor="name">Password</label>
                    <input type="text"{...formik.getFieldProps('password')} name='password' />
                    {formik.errors.password && formik.touched.password && <div className='error'>{formik.errors.password }</div>}
                </div>
                <div className='formcontrol'>
                    <label htmlFor="name">Password confirmation</label>
                    <input type="text"{...formik.getFieldProps('passwordConfirm')} name='passwordConfirm' />
                    {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <div className='error'>{formik.errors.passwordConfirm }</div>}
                </div>
                
                <button type='submit' disabled={!formik.isValid}>Sing Up</button>
            </form>
        

    </div> );
}
 
export default SingUpForm;