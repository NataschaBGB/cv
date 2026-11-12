import Image from 'next/image';
import qualifications from '../../assets/qualifications.png';
import './qualifications.sass';


export default function Qualifications() {

    return (

        <section className='qualifications'>
            <figure className="qualifications__titles">
                <Image src={qualifications} alt="qualifications_icon" height={40} className="qualifications__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Kvalifikationer</h2>
                </figcaption>
            </figure>

            <section className="qualifications__list">
                <ul>
                    <li>Detaljeorienteret</li>
                    <li>Tidsstyring</li>
                    <li>Kreativ tænkning</li>
                    <li>Ansvarlig</li>
                    <li>Tålmodig</li>
                    <li>Samarbejde</li>
                </ul>
            </section>
        </section>

    )

}