import React from "react";
const RadioInput = ({radioOption,formik,name}) => {
    return (
        <div className='formcontrol'   {...formik.getFieldProps(name)}>
            {radioOption.map((r) => {
                return (
                    <React.Fragment key={r.value}>
                        < input type="radio" name={name} id={r.value} value={r.value} onChange={formik.handleChange} checked={formik.values[name] === r.value}/>
                    <label htmlFor={r.value}>{r.label}</label>
                    </React.Fragment>
            )
        })}
                
        {formik.errors[name] && formik.touched[name] &&<div className='error'>{formik.errors[name]}</div>}
             </div> );
}
 
export default RadioInput;