
const RadioInput = ({radioOption,formik,name}) => {
    return (
        <div className='formcontrol'>
            {radioOption.map((r) => {
                return (
                    <>
                    < input type = "radio" name = {name} id = { r.value } value = { r.value } onChange = { formik.handleChange } checked = { formik.values[name] === `${r.value}`} />
                    <label htmlFor={r.value}>{r.label}</label>
                    </>
            )
        })}
                    
        {formik.errors[name] && formik.touched[name] && <div className='error'>{formik.errors[name] }</div>}
                </div> );
}
 
export default RadioInput;