
import profile2 from '../assets/img/Karan2.jpeg';


export const ContactInfo = () => {
    return (
        <div className="card contact-info">
            <div className="card-img-top d-none d-md-block" style={{ marginBottom: '110px' }}>
                <img src={profile2} />
            </div>
            <div className="card-body text-center">
                {/* <h5 className="card-title">Let's make the world a better place to live</h5> */}
                <div className="card-text">
                    <div><span className="text-secondary" >Phone:</span> +1(518)915-4517</div>
                    <div><span className="text-secondary">Email:</span>  <a href="mailto:karan.naywin@gmail.com">karan.naywin@gmail.com</a></div>
                </div>
        
            </div>

            <div>

            </div>
        </div>
    )
}