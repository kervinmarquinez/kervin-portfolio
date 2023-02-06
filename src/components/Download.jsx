import { useSelector } from "react-redux"

export const Download = ({value}) => {

    const {status} = useSelector(state => state.ui)

    return (
        <a href={status ? "https://docs.google.com/document/d/14cSgmGZ80FJnQyX1hUIn3jRBLApnzQXYF3ijfANMnAU/edit?usp=sharing" : "https://docs.google.com/document/d/1z52aaMKU4CFytG1PgXVK6iT7Hr4FESjFnBFf9QmoqgI/edit?usp=sharing"} target="_blank" className='uppercase font-medium tracking-wider border-solid border border-white px-5 py-2 hover:text-xl duration-300'>{value}</a>
    )
}
