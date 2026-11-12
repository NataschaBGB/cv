import './qualifications.sass';


export default function Qualifications() {

    return (

        <section className='qualifications'>
            <figure className="qualifications__titles">
                <img src="../../public/assets/qualifications.png" alt="qualifications_icon" className="qualifications__image" />
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