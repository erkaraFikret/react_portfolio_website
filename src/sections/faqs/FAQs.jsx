import './faqs.css'
import './data'
import data from './data'
import FAQ from './FAQ'

function FAQs() {
    return (
        <section id='faqs'>
            <h2>Frequently Asked Questions</h2>
            <p>
                Here ara some questions I usuaslly get. Click to toggle the answer, 
                and if you stişş have some more questions, shoot me a message
                from the contact section!
            </p>
            <div className="container faqs_container">
                {
                    data.map(faq => (
                        <FAQ key={faq.id} faq={faq}/>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQs