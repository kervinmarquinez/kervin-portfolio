import { useSelector } from 'react-redux';
import {Link} from 'react-scroll';

export const Button = ({value}) => {

  const {status} = useSelector(state => state.ui)
  
  return (

    <Link to={status ? 'projects' : 'proyectos'} spy={true} smooth={true} offset={-10} duration={500}  id={`${value.toLowerCase()}__button`} className={`animate__animated animate__fadeInDown cursor-pointer uppercase font-medium md:text-lg tracking-wider border-solid border border-white mb-4 px-9  py-2 hover:text-xl duration-300`}>{value}</Link>

  )
}
