import Image from 'next/image';
import education from '../../assets/education.png'
import './educations.sass'


export default function Educations() {
    
    return (
            <section className="educations">

                <figure className="educations__titles">
                    <Image src={education} alt="educations_image" height={50} className="educations__image" />
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Uddannelse</h2>
                    </figcaption>
                </figure>

                <article className='educations__education'>
                    <div className="educations__title">
                        <h3>STU | AspIT</h3>
                        <p>August 2021 - Juli 2024</p>
                    </div>
                    <div className="educations__list">
                        <ul>
                            <li>Web Introduktion</li>
                            <li>Web Construction</li>
                            <li>Web Development</li>
                            <li>Databaser</li>
                            <li>Programmering Introduktion</li>
                            <li>Applikation Programmering</li>
                            <li>IT Introduktion</li>
                        </ul>
                    </div>                
                    
                </article>

                <article className='educations__education'>
                    <div className="educations__title">
                        <h3>Webudvikler | Roskilde Tekniske Skole</h3>
                        <p>August 2025 - Oktober 2026</p>
                    </div>
                    <div className="educations__list">
                        <ul>
                            <li>JavaScript</li>
                            <li>SASS</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                            <li>Vite</li>
                            <li>React</li>
                            <li>React Router</li>
                            <li>CRUD</li>
                        </ul>
                    </div>
                </article>
                 
            </section>
    )

}