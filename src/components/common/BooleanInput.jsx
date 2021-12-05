
const BooleanInput = ({formik,name,label}) => {
    return (
        <div className='formcontrol'  {...formik.getFieldProps( name)}>
            
            < input type="checkbox" name={name} id={name} value={true} onChange={formik.handleChange} checked={formik.values[name]} />
                    <label htmlFor={name}>{label}</label>

                    
        {formik.errors[name] && formik.touched[name]&& <div className='error'>{formik.errors[name] }</div>}
                </div> );
}
 
export default BooleanInput;