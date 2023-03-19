import { UseForm } from "../hooks/useForm";
import { Form } from "../models/Form";
import { FormEvent } from "react";
import "../styles/form.css";
import { validatePhone } from "../validations/validatePhone";
const initialForm: Form = {
    name: "",
    email: "",
    phone: "",
};
export const IndexForm = () => {
    const [ form, handleChange ] = UseForm<Form>(initialForm);
    const { name, email, phone } = form;
    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (e.currentTarget.checkValidity() && validatePhone(phone)) {
            e.preventDefault();
            e.stopPropagation()
        }
          e.currentTarget.classList.add('was-validated')
    }
    return (
        <form className="form-index needs-validation" onSubmit={handleSubmit} noValidate>
            <p>
                Llena el formulario 
                <br/>
                para obtener mayor informacion
            </p>
            <section className="field">
                <label htmlFor="name">Nombre:</label>
                <br />
                <input type="text" name="name" id="name" className="text-form" value={name} onChange={handleChange} required/>
                <div className="invalid-feedback">
                    Por favor ingrese un nombre
                </div>
            </section>
            <section className="field">
                <label htmlFor="email">Email:</label>
                <br />
                <input type={'email'} name="email" id="email" className="text-form" value={email} onChange={handleChange} required/>
                <div className="invalid-feedback">
                    Error en formato de Email
                </div>
            </section>
            <section className="field">
                <label htmlFor="phone">Telefono:</label>
                <br />
                <input type={'text'} name="phone" id="phone" className="text-form" value={phone} onChange={handleChange} required/>
                <div className="invalid-feedback">
                    Error en formato de telefono
                </div>
            </section>            
            <br />
            <input type='submit' value={'Enviar'} className='btn-form'/>
        </form> 
    );
};
