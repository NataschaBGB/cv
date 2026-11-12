import Image from 'next/image';
import drivinglicense from '../../assets/drivinglicense.png'
import './drivers-license.sass';


export default function DriversLicense() {
    return (
        <section className="drivers-license">

            <figure className="drivers-license__titles">
                <Image src={drivinglicense} alt="nataschabjerning_drivinglicense" height={40} className="drivers-license__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Kørekort</h2>
                </figcaption>
            </figure>
            
            <h3>Kategori B</h3>
        
        </section>
    )
}