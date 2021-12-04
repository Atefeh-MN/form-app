import { useState } from "react";

const SingUpForm = () => {
    const [userData, setUsaerData] = useState({ name: '', email: '', password: '' });
    const ChangeHandler = (e) => {
     setUsaerData({...userData,[e.target.name]:e.target.value})
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div className='formcontrol'>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={ChangeHandler}
                        value={ userData.name} name='name'/>
                </div >
                <div className='formcontrol'>
                    <label htmlFor="name">Email</label>
                    <input type="email" onChange={ChangeHandler}
                        value={userData.email} name='email' />
                </div>
                <div className='formcontrol'>
                    <label htmlFor="name">Password</label>
                    <input type="text"onChange={ChangeHandler}
                        value={ userData.password} name='password' />
                </div>
                <button type='submit'>Sing Up</button>
            </form>
        

    </div> );
}
 
export default SingUpForm;