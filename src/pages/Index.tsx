import {IndexForm} from '../components/IndexForm';
import portada from '../assets/images/portada.svg';
import talentoHumano from '../assets/images/talentoHumano.svg';
import marketingDigital from '../assets/images/MarketingMulticanal.svg';
import tesoreria from '../assets/images/FinanzasColaborativas.svg'
import logistica from '../assets/images/logistica.svg';
import '../styles/index.css';
import { IndexFooter } from '../components/Footer';
import { Pillar } from '../components/Pillar';
export const Index = ( ) => {
    return (
        <div className="page">
            <article className='header'>
                <img src = {portada} alt="Portada" className='front-page'/>
                <IndexForm/>
            </article>
            <article className='content'>
                <p className='welcome'>Hola, te damos la bienvenida a este maravilloso espacio, donde podras recibira apoyo en lo que necesites con respecto a Administracion y direccion de empresas, de una forma dinamica y creativa.</p>
                <Pillar image={marketingDigital} title='Marketing Multicanal' text='Como por medio de la tecnologia, podemos hacer crecer exponencialmente nuestros negocios, y generar un fuerte impacto en la web.'/>
                <Pillar image={talentoHumano} title='Gestión de Talento Humano' text='Estrategias ajustadas, para encontrar a las personas ideas para lo que se requiere solucionar en la empresa.'/>
                <Pillar image={tesoreria} title='Tesoreria' text='Hacer crecer exponencialmente el valor de tu negocio.'/>
                <Pillar image={logistica} title='Logistica' text='Como organizar tu negocio, para lograr metas previamente establecidas'/>
            </article>
            <IndexFooter/>            
        </div>
    )
}