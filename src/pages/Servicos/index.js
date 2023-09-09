import './styles.css';
import Imagem1 from '../../assets/1(10).png';
import Imagem2 from '../../assets/2(10).png';
import Imagem3 from '../../assets/3(5).png';
import Imagem4 from '../../assets/4(1).png';
import Imagem5 from '../../assets/5.png';
import Imagem6 from '../../assets/6.png';

/* import BannerVmc from '../../assets/banner-vmc.png' */
function Servicos() {

    const serviços = [
        {name: 'Lavagem e higienização de sofás', imagem: Imagem2, explicaçao: 'Limpeza e higienização a seco eficiente na remoção de manchas e sujeiras pesadas'},
        {name: 'Lavagem e higienização de tapetes', imagem: Imagem1, explicaçao: 'Lavagem e higienização a seco eficiente na remoção de manchas e sujeiras pesadas'},
        {name: 'Limpeza e higienização de colchões', imagem: Imagem5, explicaçao: 'Limpeza e higienização a seco eficiente na remoção de manchas e sujeiras pesadas'},
        {name: 'Limpeza e higienização de cadeiras', imagem: Imagem3, explicaçao: 'Limpeza e higienização a seco eficiente na remoção de manchas e sujeiras pesadas'},
        {name: 'Limpeza e higienização de poltronas', imagem: Imagem4, explicaçao: 'Limpeza e higienização a seco eficiente na remoção de manchas e sujeiras pesadas'},
        {name: 'Limpeza e higienização de interna automotiva', imagem: Imagem6, explicaçao: 'Limpeza e higienização a seco eficiente na remoção de manchas e sujeiras pesadas'}
    ]

    return (
        <div className='servicos-container'>
            

            <div className='servicos-titulo-container'>
                <h2>Serviços - Limpeza e higienização seco de estofados em geral / Lavagem e higienização de tapetes</h2>
                <p>Trabalhamos sempre em busca da excelência e com preços acessíveis, além de nosso atendimento ser humanizado para o seu bem-estar.</p>

                <br/>
                <h1>Serviços</h1>

            </div>

            
            <div className='cards-container'>
                
                    {serviços.map((serviço, index) => (
                      <div key={index} className='card'>
                        <h5>{serviço.name}</h5>
                        <hr/>
                        <img src={serviço.imagem} alt='' /> 
                        <p>{serviço.explicaçao}</p>
                      </div> 
                    ))}
                
                
            </div>   
        </div>
        
    )
}

export default Servicos;