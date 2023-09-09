import { Link } from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/logo vmc.png'
import {SlSocialInstagram} from 'react-icons/sl';
import {SlSocialFacebook} from 'react-icons/sl';
import {SlSocialGoogle} from 'react-icons/sl';
import {LiaMapMarkerSolid} from 'react-icons/lia';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillCreditCard} from 'react-icons/ai';

function Footer () {
    return (
        
           
            
            <footer >
            <div className='img-container-footer'>
               <Link to={'/'}>
                    <img src={Logo} alt='' /> 
                </Link>
            </div>
                
                
            <div>
                <h3>Redes Sociais</h3>
                <ul className='redes-sociais'>
                    <li>
                        <Link to={'https://instagram.com/valemulticlean'}> <SlSocialInstagram/> </Link>
                    </li>
                    <li>
                        <Link to={'https://facebook.com/valemulticlean'} > <SlSocialFacebook/> </Link>
                    </li>
                    <li>
                        <Link to={'https://www.google.com/search?client=firefox-b-d&q=vale+multi+clean#ip=1'} > <SlSocialGoogle/> </Link>
                    </li>
                </ul>
            </div>
                
            <div>
                <h3>Institucional</h3>
                <ul className='navigation'>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/services'} >Serviços</Link>
                    <Link to={'/contato'} >Contato</Link>
                    <Link to={'/'} >Sobre nós</Link>
                </ul>
            </div>
                
            <div className='container-enderecos'>
                <h3>Atendimento</h3>
                <div className='enderecos-container'>
                    <p><LiaMapMarkerSolid/>   Endereço: Jd. Farid Libos Londrina-pr</p>
                    <p><BsFillTelephoneFill/>   WhatsApp: (43)98486-6569</p>
                    <p><AiOutlineMail/> Email: valemulticlean@gmail.com</p>
                    <p><AiFillCreditCard/>   Pagamento: Pix, dinheiro e cartão até 12x<i>(pag. no cartão sujeito as taxas da maquininha)</i></p>
                </div>
            </div>

            
            </footer>
        
        
    )
}

export default Footer;