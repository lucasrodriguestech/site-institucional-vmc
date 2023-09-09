import { Link } from 'react-router-dom';
import './styles.css';
import { HiOutlineViewList } from 'react-icons/hi'
import Logo from '../../assets/logo horizontal.png';
import { useState } from 'react';

function Header () {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
        <header>
            <Link to='/'>
               <img src={Logo} alt='logo-vmc' /> 
            </Link>
            

            
                <div className='icon-container' onClick={() => setOpenMenu(!openMenu)}>
                    
                     <HiOutlineViewList 
                        color='black'
                        size={25}
                    />  
                </div>

        <div className='dropdown-content-desktop'>

                    <Link to='/' >Home</Link>
                    <Link to='/services' >Serviços</Link>
                    <Link to='/contato' >Contato</Link>
                    <Link to='/' >Sobre nós</Link>
                </div>
                
            
        </header>
        {openMenu ?     <div className='dropdown-content'>
                    <Link to='/' >Home</Link>
                    <Link to='/services' >Serviços</Link>
                    <Link to='/contato' >Contato</Link>
                    <Link to='/' >Sobre nós</Link>
                </div> : ''}
                
        </>
        
    )
}

export default Header;