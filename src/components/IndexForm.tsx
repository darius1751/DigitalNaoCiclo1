import { UseForm } from "../hooks/useForm";
import { Form } from "../models/Form";
import { FormEvent } from "react";
import "../styles/form.css";
const initialForm: Form = {
    name: "",
    email: "",
    phone: "",
};
export const IndexForm = () => {
    const [ form, handleChange ] = UseForm<Form>(initialForm);
    const { name, email, phone } = form;
    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault();
    }
    return (
        <form className="form-index" onSubmit={handleSubmit}>
            <p>
                Llena el formulario 
                <br/>
                para obtener mayor informacion
            </p>
            <label htmlFor="name">Nombre:</label>
            <br />
            <input type="text" name="name" id="name" className="text-form" value={name} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" name="email" id="email" className="text-form" value={email} onChange={handleChange}/>
            <br />
            <label htmlFor="phone">Telefono:</label>
            <br />
            <input type="text" name="phone" id="phone" className="text-form" value={phone} onChange={handleChange}/>
            <br />
            <input type='submit' value={'Enviar'} className='btn-form'/>
        </form> 
    );
};
