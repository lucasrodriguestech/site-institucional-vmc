import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';



function RoutesApp() {
    return (
        <>
            
            <Header /> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/services' element={<Servicos/>}/>
                <Route path='/contato' element={<Contato/>}/>
            </Routes>
            <Footer />
        </>
        
        
    )
}

export default RoutesApp;