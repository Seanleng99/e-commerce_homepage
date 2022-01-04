import "./footer.css";
import { LocationOn, Call, Email, Facebook, Instagram, LinkedIn, Copyright } from "@material-ui/icons";

export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <p className="logo">seanleng.</p>
                <h4>About Us</h4>
                <div><a href="#">Our Company</a></div>
                <div><a href="#">Contact Us</a></div>
                <div><a href="#">Explore</a></div>
                <div><a href="#">Shop</a></div>
                <div className="pptc">
                    <a href="#">Privacy Policy</a> | <a href="#">Tems and Conditions</a>
                </div>
            </div>
            <div className="middle">
                <div className="location">
                    <LocationOn />
                    <div className="location-details">K52, Jalan Telok Kertang, 34750 Matang, Perak.</div>
                </div>
                <div className="phone">
                    <Call />
                    <div className="phone-details">+60168772499</div>
                </div>
                <div className="email">
                    <Email />
                    <div className="email-details">seanleng99@gmail.com</div>
                </div>
            </div>
            <div className="right">
                <h4>Find Us Here!</h4>
                <div className="socialmedia">
                    <a href="#"><Facebook style={{ fill: "#3b5998" }} className="icon" /></a>
                    <a href="#"><LinkedIn style={{ fill: "#0077b5" }} className="icon" /></a>
                    <a href="#"><Instagram style={{ fill: "#cd486b" }} className="icon" /></a>
                </div>
                <div className="copyright">Copyright <Copyright style={{ fontSize: "14px" }} /> 2022 seanleng.</div>
            </div>
        </div>
    )
}
