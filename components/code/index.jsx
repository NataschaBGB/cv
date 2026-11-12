import Image from 'next/image';
import code from '../../assets/code.png'
import './code.sass'

export default function Code() {
    
    return (
        <section className="code">
            
                <figure className="code__titles">    
                    <figcaption className="paper">
                        <div className="top-tape"></div>
                        <h2>Klik for at se koden</h2>
                    </figcaption>
                    <a href="https://github.com/NataschaBGB/cv" target='_blank'>
                        <Image src={code} alt="code_icon" height={null} className="code__image" />
                    </a>
                </figure>

        </section>
    )
}