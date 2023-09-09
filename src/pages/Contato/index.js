import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {LiaMapMarkerSolid} from 'react-icons/lia';

function Contato() {

    const navigate = useNavigate();

    const endereços = [
        {titulo: 'Telefone:', telefone:' (43)98486-6569', icone: {BsFillTelephoneFill}},
        {titulo: 'Londrina-pr:', icone: {LiaMapMarkerSolid}}
    ]

    const handleNavigate = () => {
        
    }

    return (
        <div className='contato-container'>
            <div className='enderecos-container'>
                <h1>Fale conosco</h1>
                <h3>Atendimento: Segunda à sábado das 09:00 às 18:00</h3>
                <span><BsFillTelephoneFill />WhatsApp: (43)98486-6569</span>
                <span><LiaMapMarkerSolid/>Endereço: Londrina-pr </span>

            </div>

            <hr />

            <div className='orcamento-container'>
                <h2>Faça um orçamento conosco</h2>
                <h3>Entre em contato através do WhatsApp clicando no botão abaixo!</h3>
                <Link to={'https://wa.me/5543984866569'}><button>WhatsApp</button></Link>
            </div>


            


        </div>
    )
}

export default Contato;