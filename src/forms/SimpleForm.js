import react from "react";  
import { Formik } from "formik";

const SimpleForm = () => {
    return (
        <Formik
            initialValues={{name:''}}
            onSubmit={ (values) => {
                console.log("form values", values);
            }}
        >
            {
                ( {handleSubmit, handleChange, values} ) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={handleChange} 
                            value={values.name}
                            type="text" 
                            name="name" 
                            placeholder="Enter your name"
                        />
                        <button>Submit</button>
                    </form>
                )
            }
        </Formik>
    );
}

export default SimpleForm;