import Image from 'next/image';
import strengths from '../../assets/strengths.png';
import './competencies.sass';

export default function Competencies() {
    return (
        <section className="competencies">
            
            <figure className="competencies__titles">
                <Image src={strengths} alt="competencies_icon" height={40} className="competencies__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Kompetencer</h2>
                </figcaption>
            </figure>

            <section className="competencies__list">
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Vite</li>
                    <li>HTML</li>
                    <li>CSS/SASS</li>
                    <li>JavaScript</li>
                    <li>API fetches</li>
                    <li>Wordpress</li>
                    <li>PHP</li>
                    <li>Responsivt design</li>
                </ul>
            </section>

        </section>
    )
}