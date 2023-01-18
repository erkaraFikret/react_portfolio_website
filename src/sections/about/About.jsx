import './about.css'
import AboutImage from '../../assets/fikret.jpg'
import CV from '../../assets/güncel.pdf'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'


function About() {


    return (
        <section id='about'>
            <div className="container about_container">
                <div className="about_left">
                    <div className="about_portrait">
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
                <div className="about_right">
                    <h2>About Me</h2>
                    <div className="about_cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        I am constantly trying to improve myself in order to work with professional teams in the software world I have been in for a while. I'm always motivated to do more!

                    </p>
                    <p>
                        Hi, my name is Fikret Erkara from Eskişehir, Turkey.

                        I'm junior react developer. My top priority is to fully equip myself in this field.Get in touch today with the details of your project let's get started! Check out my resume below!
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About