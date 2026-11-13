import Image from 'next/image';
import experience from '../../assets/experience.png'
import './experience.sass'

export default function Experience() {
    
    return (
        <section className="experiences">

            <figure className="experiences__titles">
                <Image src={experience} alt="experiences_image" height={50} className="experiences__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Arbejdserfaring</h2>
                </figcaption>
            </figure>

            <article className="experiences__experience">
                <div className='experiences__title'>
                    <h3>Chainbox | Praktik</h3>
                    <p>April 2023 -<br/> November 2023</p>
                </div>
                <div className="experiences__list">
                    <ul>
                        <li>PHP</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
            </article>
            
            <article className="experiences__experience">
                <div className='experiences__title'>
                    <h3>Personalezonen | Praktik</h3>
                    <p>December 2023 -<br/> Juli 2024</p>
                </div>    
                <div className="experiences__list">
                    <ul>
                        <li>PHP</li>
                        <li>WordPress</li>
                        <li>Responsivt design</li>
                        <li>jQuery</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </article>

            <article className="experiences__experience">
                <div className='experiences__title'>
                    <h3>Personalezonen | Webudvikler</h3>
                    <p>August 2024 -<br/> Februar 2025</p>
                </div>
                <section className="experiences__text">
                    <p>I min tid i virksomheden har jeg opnået mere erfaring med HTML, SCSS, jQuery, JavaScript, PHP og WordPress.<br/>
                    Jeg har blandt andet udviklet en kalender og en FAQ-sektion til en stor zoologisk have ved hjælp af HTML, SCSS, PHP, WordPress og jQuery, ligesom jeg har kodet en hel hjemmeside til en internetcafé helt fra bunden.</p>
                </section>
            </article>
        </section>

    )
}