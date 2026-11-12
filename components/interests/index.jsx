import Image from 'next/image'
import interests from '../../assets/interests.png'
import './interests.sass'

export default function Interests() {
    
    return (
        <section className="interests">
            <figure className="interests__titles">    
                <Image src={interests} alt="interests_icon" height={40} className="interests__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Interesser</h2>
                </figcaption>
            </figure>

            <section className="interests__list">
                <ul>
                    <li>Kodning</li>
                    <li>Kreative projekter</li>
                    <li>Computerspil</li>
                    <li>Læse bøger</li>
                </ul>
            </section>
        </section>
    )
}   