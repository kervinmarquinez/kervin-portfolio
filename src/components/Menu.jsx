import { useSelector } from "react-redux";

import {Link} from 'react-scroll';


export const Menu = () => {

    const {status} = useSelector(state => state.ui)


    return (

        <div className="hidden lg:flex lg:gap-10">

            <Link  
            to={status ? 'projects' : 'proyectos'} 
            spy={true} 
            smooth={true} 
            offset={-10} 
            duration={700} 
            className="cursor-pointer text-xl hover:text-[#605C5C] duration-300"
            >
            {status ? 'Projects' : 'Proyectos'}
            </Link>

            <Link  
            to={status ? 'technologies' : 'tecnologías'} 
            spy={true} 
            smooth={true} 
            offset={-10} 
            duration={700}  
            className="cursor-pointer text-xl hover:text-[#605C5C] duration-300"
            >
                {status ? 'Technologies' : 'Tecnologías'}
            </Link>

            <Link  
            to={status ? 'about me' : 'sobre mi'} 
            spy={true} 
            smooth={true} 
            offset={-10} 
            duration={700} 
            className="cursor-pointer text-xl hover:text-[#605C5C] duration-300"
            >
            {status ? 'About me' : 'Sobre mi'}
            </Link>

        </div>
    )
}
