import "./header.css";
import Carousel from "../carousel/Carousel";

export default function Header() {
    return (
        <div className="header">
            <Carousel/>
            <div className="header-desc">
                <h3>Our Products</h3>
                <p>Blaaa blaaa blaaaa blaaaaa blaaaaaa blaaaaaaa</p>
            </div>
        </div>
    )
}
