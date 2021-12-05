
const Select = ({formik,selectOption,name}) => {
    return (<div className='formcontrol'>
        <select name={name}   {...formik.getFieldProps({ name })}>
            {selectOption.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
        </select>
         {formik.errors[name] && formik.touched[name] && <div className='error'>{formik.errors[name] }</div>}

    </div> );
}
 
export default Select;