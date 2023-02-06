import { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-scroll';

import { Social } from "./index";

export const Hamburger = () => {

  const {status} = useSelector(state => state.ui);

  const [menu, setMenu] = useState(false);

  

  const openMenu = () => {

    if(!menu) {
      setMenu(true)
    } else {
      setMenu(false)
    }
    
  }

  return (
    <>

      <div className={`z-40 nav__burger lg:hidden ${menu ? 'fixed right-6 md:right-9' : ''}`} onClick={openMenu}>
          <div className={`nav__line ${menu ? 'nav__line-active' : ''}`}></div>
          <div className={`nav__line ${menu ? 'nav__line-active' : ''}`}></div>
      </div>

      <div className={`${menu ? 'z-40 flex flex-col justify-center items-center gap-24 fixed h-screen bg-[#191919] top-0 left-0 right-0' : 'hidden'}`}>

        <Link 
          onClick={openMenu} 
          to={status ? 'projects' : 'proyectos'} 
          spy={true} 
          smooth={true} 
          offset={-10} 
          duration={700} 
          className="animate__animated animate__fadeInDown text-2xl underline underline-offset-8"
        >
          {status ? 'Projects' : 'Proyectos'}
        </Link>



        <Link 
          onClick={openMenu} 
          to={status ? 'technologies' : 'tecnologías'} 
          spy={true} 
          smooth={true} 
          offset={-10} 
          duration={700}  
          className="animate__animated animate__fadeInDown text-2xl underline underline-offset-8"
        >
            {status ? 'Technologies' : 'Tecnologías'}
          </Link>


        <Link 
          onClick={openMenu} 
          to={status ? 'about me' : 'sobre mi'} 
          spy={true} 
          smooth={true} 
          offset={-10} 
          duration={700} 
          className="animate__animated animate__fadeInDown text-2xl underline underline-offset-8"
        >
          {status ? 'About me' : 'Sobre mi'}
          </Link>

        <Social />

      </div>

    </>
  )
}
