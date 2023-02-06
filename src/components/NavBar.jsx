import { Hamburger, LanguageSelector, Menu } from "./index"

export const NavBar = () => {
  return (
    <div className='flex justify-between container'>

      <a href="/" className="md:text-lg" id="logo">ADRIAN KERVIN</a>

      <div className="flex gap-20">   

        <Menu />   
        
        <LanguageSelector />

        <Hamburger />

      </div>

    </div>
  )
}
