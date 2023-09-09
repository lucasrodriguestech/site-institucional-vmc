import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Imagem1 from '../../assets/1(10).png';
import Imagem2 from '../../assets/2(10).png';
import Imagem3 from '../../assets/3(5).png';
import Imagem4 from '../../assets/4(1).png';
import Imagem5 from '../../assets/5.png';
import Imagem6 from '../../assets/6.png';
import Cliente1 from '../../assets/logo-inspire.png'; 
import Cliente2 from '../../assets/logo-metronorte.png'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/bundle';
import {BsCheckAll} from 'react-icons/bs' 


function Home () {
    
    const imagens = [
        Imagem1,
        Imagem2,
        Imagem3,
        Imagem4,
        Imagem5,
        Imagem6
    ]


    const servicos = [
        'Sofás', 'Cadeiras', 'Poltronas', 'Colchões', 'Bancos automotivos', 'Lavagem e higienização de tapetes'
    ]
    

    return (
        
            <div className='container-home'>
                <h1>Limpeza e higienização seco em geral</h1>
                <p>Proporcionamos inovação e qualide através de nossos serviços executados de forma profissional e eficiente,
                    limpeza a seco eficiente na remoção de manchas, maus odores e sujeiras pesadas. Utilizamos equipamentos e produtos de primeira qualidade, tudo isso para
                    que o resultado seja o melhor possível, conte conosco para deixar seu lar mais limpo e higienizado.    
                </p>
                <h2>Serviços oferecidos</h2>
                <Swiper 
                    className='swiper-container'
                    modules={[Navigation, Pagination]} 
                    navigation={true}
                    pagination={{clickable: true}}
                    autoplay={{delay: 10}}
                    direction={'horizontal'}
                    /* reverseDirection={true}  */
                    slidesPerView="1"
                    spaceBetween={50}
                >
                    {imagens.map((imagem, index) => (
                        <SwiperSlide className='slide-item' key={index}>
                            <img src={imagem} alt='' />
                            <p>{index}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

            <div className='servicos-lista'>
                <h2>Serviços oferecidos</h2>
                {servicos.map((servico, index) => (
                    <div key={index}>
                        <BsCheckAll /><span>{servico}</span>
                    </div>
                ))}
            </div>

                
            <div className='orcamento-container'>
                <h2>Faça um orçamento conosco</h2>
                <h3>Entre em contato através do WhatsApp clicando no botão abaixo!</h3>
                <Link to={'https://wa.me/5543984866569'  }><button>WhatsApp</button></Link>
            </div>
                
            </div>

            
        
        
    )
}

export default Home;