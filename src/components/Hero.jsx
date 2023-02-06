import { useSelector } from "react-redux"
import { Social, Button } from "./index"

export const Hero = () => {

  const {status} = useSelector(state => state.ui)

  return (
    <section className='flex flex-col justify-center items-center min-h-[calc(100vh-90px)] gap-8 container'>
        
        <h1 className="animate__animated animate__fadeInDown text-4xl md:text-5xl text-center font-bold">{status ? `Hi, I'm Adrian Kervin` : `Hola, mi nombre es Adrián Kervin`}</h1>
        <h2 className="animate__animated animate__fadeInDown text-2xl md:text-3xl">Front-end Developer</h2>
        <p className="animate__animated animate__fadeInDown leading-7 mb-4 max-w-4xl md:text-lg md:leading-9">{status ? "Developer in progress. My adventure began in the marketing enviroment and turned to the development world, where I am looking to start my career as a Front-end developer. I invite you to take a look at my projects and feel free to contact me!" : 'Desarrollador en progreso. Mi aventura comenzó en el entorno del marketing y giró al mundo del desarrollo, donde estoy buscando comenzar mi carrera como desarrollador Front-end. Te invito a echar un vistazo a mis proyectos y ¡no dudes en ponerte en contacto conmigo!'}</p>
        <Button value={status ? 'Projects' : 'Proyectos'} />
        <Social/>

    </section>
  )
}
