import './contact.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://oftac-backend.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setSuccessMessage('Email sent successfully.');
            } else {
                setSuccessMessage('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSuccessMessage('An error occurred while sending the email.');
        }
    };
    
    return (
        <div>
            <Navbar />
            <div className="" id="section-map">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            title="Kyangwali map"
                            width="100%" 
                            height="400" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=Kyangwali%20Refugee%20settlement&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe><br/>
                    </div>
                </div>
            </div>
            <div className='section-bg'>
                <div className='contact container p-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h3>Get in touch with us...</h3>
                            <h4>OFTAC</h4>
                            <p>Kikuube District, Uganda</p>
                            <p>Tel: +256779948672</p>
                            <p>Email: oftacorganisation@yahoo.com</p>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <form onSubmit={handleSubmit} method='post'>
                                {successMessage && <p className="text-success">{successMessage}</p>}
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="form-control p-2" 
                                                placeholder="Enter your Name" 
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="form-control p-2" 
                                                placeholder="Enter your Email" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col pt-2">
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="form-control p-2" 
                                        placeholder="Subject" 
                                    />
                                </div>
                                <div className="col py-2">
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        cols="10" 
                                        rows="5" 
                                        className="form-control" 
                                        placeholder="Type your Message"
                                    >
                                    </textarea>
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        className="btn btn-primary btn-lg fw-bold" 
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
