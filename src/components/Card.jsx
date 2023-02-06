import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store/ui/uiSlice";
import { Technology } from "./Technology";

export const Card = ({title, subtitle, id, technology, en, es, image, linkOne, linkTwo}) => {

    const { modal, status } = useSelector(state => state.ui)

    const dispatch = useDispatch()

    const openModal = () => {

        dispatch(toggleModal(id))

    }

    return (
        <>  
            <div className="mb-5">
                <p className="text-l font-medium uppercase ">{title} //</p>
                <p className="text-l font-medium uppercase text-[#605C5C]">{subtitle}</p>
            </div>

            <div className="relative mb-5">
                <img src={image} alt={image} />
                <div onClick={openModal} className="cursor-pointer open__modal">
                    <div className="open__modal__line"></div>
                    <div className={`open__modal__line ${modal ? 'hidden' : ''}`}></div>
                </div>
            </div>

            <div className={`${(modal == id) ? 'z-40 flex flex-col justify-center items-center fixed h-screen bg-[#19191992] top-0 left-0 right-0 ' : 'hidden'}`}>
                <div className="m-5 p-5 flex flex-col relative bg-[#191919] max-w-xl border border-[#ffffff94] animate__animated animate__fadeInUp">

                    <div className="flex px-5">
                        <p className="text-l font-medium uppercase mb-5">{title} // <span className="text-[#605C5C]">{subtitle}</span></p>
                        <div onClick={openModal} className="cursor-pointer close__modal">
                            <div className="close__modal__line"></div>
                            <div className="close__modal__line"></div>
                        </div>
                    </div>

                    <div className="flex flex-col px-5">

                        <div className="mb-5">
                            {
                                status ? (<p>{en}</p>) : (<p>{es}</p>)
                            }
                        </div>
                        
                    </div>

                    <div className="flex flex-wrap px-5 gap-4 mb-5">
                            <Technology value={technology} />
                    </div>

                    <div className="flex justify-end gap-5 px-5">

                    <a href={linkOne} target="_blank"><img src="../src/assets/icons/github.svg"/></a>
                    <a href={linkTwo} target="_blank"><img src="../src/assets/icons/web.svg"/></a>

                    </div>

                </div>
            </div>
        </>
    )
}
