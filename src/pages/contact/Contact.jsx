import './contact.css';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="" id="section-map">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            title="This is a map"
                            width="100%" 
                            height="400" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=Kyangwali%20Refugee%20settlement&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe><br/>
                    </div>
                </div>
            </div>
            <div className='contact container p-5'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h2>Get in touch with us...</h2>
                        <h3>OFTAC</h3>
                        <p>P.O Box 112, Hoima Uganda</p>
                        <p>Tel: +256789123456</p>
                        <p>Email: info@oftac.org</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <form action='' method='post'>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            class="form-control p-2" 
                                            placeholder="Enter your Name" 
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            class="form-control p-2" 
                                            placeholder="Enter your Email" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col pt-2">
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    class="form-control p-2" 
                                    placeholder="Subject" 
                                />
                            </div>
                            <div class="col py-2">
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    cols="10" 
                                    rows="5" 
                                    class="form-control" 
                                    placeholder="Type your Message"
                                >
                                </textarea>
                            </div>
                            <div class="d-grid gap-2">
                                <button 
                                    class="btn btn-primary btn-lg fw-bold" 
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
