import 'animate.css';

import { Card } from './index';
import { projects } from '../db/projects';

export const Projects = ({value}) => {

  return (
    <section className='container'>
        <h2 id={value.toLowerCase()} className='text-xl font-medium tracking-wider uppercase mb-2'>{value}</h2>
        <hr className='mb-8'/>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-5'>
          { 

            projects.map(project => (
              <div key={project.id} className='flex flex-col'>
              <Card 
              id={project.id}
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              technology={project.technology}
              en={project.en}
              es={project.es}
              image={project.image}
              linkOne={project.linkOne}
              linkTwo={project.linkTwo}
              
            />
              </div>
            ) )

          }
        </div> 
        
    </section>
  )
}
