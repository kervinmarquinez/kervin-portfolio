import { useSelector } from "react-redux"

export const Download = ({value}) => {

    const {status} = useSelector(state => state.ui)

    return (
        <a href={status ? "../assets/cv/en.pdf" : "../assets/cv/es.pdf"} download className='uppercase font-medium tracking-wider border-solid border border-white px-5 py-2 hover:text-xl duration-300'>{value}</a>
    )
}
