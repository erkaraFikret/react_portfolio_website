import React from 'react'
import Card from '../../components/Card'

function Testimonial({testimonial}) {
    return (
        <div>
            <Card className="light">
                <p>{testimonial.quote}</p>
                <div className="testimonial_client">
                    <div className="testimonial_client_avatar">
                        <img src={testimonial.avatar} alt="" />
                    </div>
                    <div className="testimonial_client_details">
                        <h6>{testimonial.name}</h6>
                        <small>{testimonial.profession}</small>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Testimonial