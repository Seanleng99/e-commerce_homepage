import "./header.css";
import Carousel from "../carousel/Carousel";

export default function Header() {
    return (
        <div className="header">
            <Carousel/>
            <div className="header-desc">
                <h3>Our Products</h3>
                <p>A product description is a form of marketing copy used to describe and explain the benefits of your product.</p>
            </div>
        </div>
    )
}
