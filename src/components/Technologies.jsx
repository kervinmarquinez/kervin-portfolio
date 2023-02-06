import { technologies } from "../db/technologies";

export const Technologies = ({value}) => {



  return (

    <section className='container'>

        <h2 id={value.toLowerCase()} className='text-xl font-medium tracking-wider uppercase mb-2 mt-5'>{value}</h2>
        <hr className='mb-8'/>

        <div className="grid grid-cols-4 gap-3">

        {
            technologies.map(technology => (

                <div key={technology.id} className="flex flex-col items-center mb-5">

                    <img src={technology.image} className="mb-2"/>
                    <p>{technology.title}</p>

                </div>
            ))
        }

        </div>



    </section>
  )
}
