import {Link} from 'react-scroll';

export const ArrowScroll = () => {
  return (
    <>

        <Link  
            to="logo"
            spy={true} 
            smooth={true} 
            offset={-10} 
            duration={700} 
            >
            <div className='cursor-pointer arrow__scroll hover:scale-110 duration-300'>
                <div className='arrow__scroll__line'></div>
                <div className='arrow__scroll__line'></div>
                <div className='arrow__scroll__line'></div>
            </div>
        </Link>


    </>
  )
}
