import {  useSelector } from 'react-redux';

import { Hero, NavBar, Projects, Technologies, About, ArrowScroll } from "./components";

function App() {

  const {status} = useSelector(state => state.ui)
  
  return (
    <>

      <NavBar />

      <Hero />

      <Projects value={status ? 'Projects' : 'Proyectos'} />

      <Technologies value={status ? 'Technologies' : 'Tecnologías' }/>

      <About value={status ? 'About me' : 'Sobre mi' }/>

      <footer className='container'>
        <p className='text-center text-xs text-[#605C5C]'>{status ? "WEBSITE CREATED BY ADRIAN KERVIN MARQUINEZ © COPYRIGHT 2023" : "SITIO WEB CREADO POR ADRIAN KERVIN MARQUINEZ © COPYRIGHT 2023"}</p>
      </footer>

      <ArrowScroll />
    
    </>
    
  )
}

export default App
