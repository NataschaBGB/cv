import Image from 'next/image';
import language from '../../assets/language.png'
import './languages.sass'


export default function Languages() {
  
    return (

        <section className="languages">
            
            <figure className="languages__titles">
                <Image src={language} alt="nataschabjerning_languages" height={40} className="languages__image" />
                <figcaption className="paper">
                    <div className="top-tape"></div>
                    <h2>Sprog</h2>
                </figcaption>
            </figure>
            
            <table className="languages__table">
                <tbody>
                    <tr>
                        <th>Sprog</th>
                        <th>Tale</th>
                        <th>Skrive</th>
                    </tr>
                    <tr>
                        <td>Dansk</td>
                        <td>Flydende</td>
                        <td>Flydende</td>
                    </tr>
                    <tr>
                        <td>Engelsk</td>
                        <td>Flydende</td>
                        <td>Flydende</td>
                    </tr>
                </tbody>
            </table>
            
        </section>
    );
}