
import React from "react";
const CheckBoxInput = ({ checkBoxOption, formik, name }) => {
    return (
        <div className='formcontrol'  {...formik.getFieldProps( name)}>
        {checkBoxOption.map((r) => {
                return (
                     <React.Fragment key={r.value} >
                    < input type = "checkbox" name = {name} key={r.value} id = { r.value } value = { r.value } onChange = { formik.handleChange } checked = { formik.values[name].includes(r.value)} />
                    <label htmlFor={r.value}>{r.label}</label>
                    </React.Fragment>
            )
        })}
            
        {formik.errors[name] && formik.touched[name] &&<div className='error'>{formik.errors[name] }</div>}
        </div>
    );
}
 
export default CheckBoxInput;