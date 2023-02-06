
import { useSelector } from 'react-redux';

import { Download, Social} from './index';

export const About = ({value}) => {

   const {status} = useSelector(state => state.ui)
  
    return (

    <section className='container'>

    <h2 id={value.toLowerCase()} className='text-xl font-medium tracking-wider uppercase mb-2'>{value}</h2>
    <hr className='mb-8'/>

    <div className='flex flex-col justify-center items-center'>

        <figure className='w-52 mb-2'>
            <img src="../src/assets/images/amarquinez.png" alt="Adrian Kervin photo" />
        </figure>
        <h3 className='font-bold text-xl lg:text-3xl mb-2 lg:mb-10'>{status ? 'Who is Adrian Kervin?' : '¿Quién es Adrián Kervin?'}</h3>
        <p className='leading-7 mb-7 lg:mb-10 max-w-4xl'>{status ? "Since I was a child I have always been interested in everything related to graphic design and later in web design. So, I decided to turn my professional career around and focus on what I am most passionate about, the development of websites and web apps." : "Desde pequeño siempre he tenido inquietud por todo lo relacionado con el diseño gráfico y más adelante con el diseño web. De esta forma, decidí darle un vuelco a mi carrera profesional y enfocarme en lo que más me apasiona, el desarrollo de sitios y aplicaciones web."}</p>
        <p className='leading-7 mb-7 lg:mb-10 max-w-4xl'>{status ? "Passionate about video games, esports and music, I consider myself a person who is always looking for new challenges and knowledge to learn. If you want to know more about me I invite you to download my CV or contact me by email, no problem!" : "Apasionado de los videojegos, los esports y de la música, me considero una persona que siempre busca nuevos retos y conocimientos por aprender. Si quieres saber más sobre mí te invito a descargar mi CV o contactar conmigo por email, ¡sin ningún problema!"}</p>
        <Download value={status ? 'Download CV' : 'Descargar CV'} />
        <span className='mt-7 lg:mt-10 mb-7 lg:mb-10'>Email: kervinmarquinez@gmail.com</span>
        <Social />
        

    </div>



    </section>

  )
}
