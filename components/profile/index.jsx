import Image from 'next/image';
import profile from '../../assets/profile.png';
import './profile.sass';

export default function Profile() {
  
    return (
        <>
            <section className="profile">
                    
                <figure className="profile__titles">
                    <Image src={profile} alt="nataschabjerning_profile" height={50} className="profile__image" />
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Om Mig</h2>
                    </figcaption>
                </figure>

                <section className="profile__text">
                    <p>Som nyuddannet men passioneret frontend-udvikler fra Brøndby, har jeg stærke kompetencer inden for specielt front-end udvikling. Med min erfaring i HTML, SCSS, JQuery, JavaScript, PHP og Wordpress, brænder jeg for at skabe brugervenlige og funktionelle weboplevelser, der lever op til kundernes forventninger.</p>
                    
                    <p>Jeg er stille, men altid imødekommende og klar til at prøve nye ting. Med et godt øje for detaljer og evnen til at dykke dybt i en opgave, kan jeg bidrage med et kreativt blik, ikke kun på design af hjemmesider, men i mange aspekter af hverdagens gøremå<br/>
                    Jeg trækker erfaring som hjælpelærer på en rideskole, pædagog i børnehave, pædagog og dyrepasser på fritidshjem og medarbejder i dagligvarebutikker med mig, som har givet mig gode kommunikationsevner med både voksne og børn.</p>
                    
                    <p>Min hverdag er oftest brugt foran computeren, når jeg enten koder eller gamer, selvom diverse kreative projekter, såsom hækling, puslespil og Lego, også kan fange min opmærksomhed i timevis.</p>
                </section>

            </section>
        </>
    )
}