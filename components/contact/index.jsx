import Image from 'next/image';
import contact from '../../assets/contact.png';
import smartphone from '../../assets/smartphone.png';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';
import './contact.sass';

export default function Contact() {
    
    return (
        <section className="contact">
            
            <figure className="contact__titles">
                <Image src={contact} alt="contact_icon" height={40} className="contact__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Kontakt</h2>
                </figcaption>
            </figure>

            <section className="contact__content">
                
                <figure className="contact__phone">
                    <Image src={smartphone} alt="nataschabjerning_phone" height={40} className="contact__icon" />
                    <h3>23 95 04 12</h3>
                </figure>
                
                <figure className="contact__email">
                    <Image src={mail} alt="nataschabjerning_mail" height={null} className="contact__icon" />
                    <a href="mailto:nannabjerning@hotmail.com">nannabjerning@hotmail.com</a>
                </figure>
            
                <figure className="contact__linkedin">
                    <Image src={linkedin} alt="nataschabjerning__linkedin" height={40} className="contact__icon" />
                    <a href="https://www.linkedin.com/in/natascha-gutenberg-bjerning/" target="_blank">LinkedIn Profil</a>
                </figure>

            </section>
        </section>
    )

}