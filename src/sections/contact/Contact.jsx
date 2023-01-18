import './contact.css'
import data from './data'

function Contact() {
    return (
        <section id='contact'>
            <h2>Get In Touch</h2>
            <p>
                Shoot me a message via any of the links below!
            </p>
            <container className="container contact_container">
                {
                    data.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
                }
            </container>
        </section>
    )
}

export default Contact