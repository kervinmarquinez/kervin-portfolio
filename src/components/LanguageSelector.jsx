import { useDispatch, useSelector } from "react-redux";

import { changeLanguage } from "../store/ui/uiSlice";

export const LanguageSelector = () => {

  const {status} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const handleLanguage = () => {
    dispatch(changeLanguage())
  }

  return (
    <div className='flex justify-center items-center gap-1'>

        <button onClick={handleLanguage} className={`${status ? 'font-bold underline underline-offset-4 md:text-lg' : 'md:text-lg'}`}>EN</button>
        <p>|</p>
        <button onClick={handleLanguage} className={`${status ? 'md:text-lg' : 'font-bold underline underline-offset-4 md:text-lg'}`}>ES</button>

    </div>
  )
}
