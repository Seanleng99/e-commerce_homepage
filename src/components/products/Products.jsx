import "./products.css";
import { BlurOn } from "@material-ui/icons";

export default function Products() {
    const products = [
        {
            title: "Brown long sleeve shirt",
            price: "99.00",
            img: "assets/products/cloth1.jpg",
        },
        {
            title: "White crew neck long sleeve shirt",
            price: "129.00",
            img: "assets/products/cloth2.jpg",
        },
        {
            title: "Grey shirt",
            price: "79.00",
            img: "assets/products/cloth3.jpg",
        },
        {
            title: "Pink long sleeved shirt",
            price: "119.00",
            img: "assets/products/cloth4.jpg",
        },
        {
            title: "Yellow and black crew neck shirt",
            price: "109.00",
            img: "assets/products/cloth5.jpg",
        },
        {
            title: "Black and gray checkered dress shirt",
            price: "159.00",
            img: "assets/products/cloth6.jpg",
        },
        {
            title: "White crew neck t-shirt",
            price: "89.00",
            img: "assets/products/cloth7.jpg",
        },
        {
            title: "Fashion white t-shirt",
            price: "99.00",
            img: "assets/products/cloth8.jpg",
        },
    ];

    return (
        <div className="products-container">
            <div className="categories">
                <div className="categories-item">
                    <BlurOn className="icon" />
                    <p>Cloth</p>
                </div>
                <div className="categories-item">
                    <BlurOn className="icon" />
                    <p>Trouser</p>
                </div>
                <div className="categories-item">
                    <BlurOn className="icon" />
                    <p>Hair Care</p>
                </div>
                <div className="categories-item">
                    <BlurOn className="icon" />
                    <p>Skin Care</p>
                </div>
                <div className="categories-item">
                    <BlurOn className="icon" />
                    <p>Shoe</p>
                </div>
            </div>
            <div className="products">
                {products.map((p) => (
                    <div className="products-item">
                        <img src={p.img} alt={p.title} />
                        <div className="products-item-title">{p.title}</div>
                        <div className="products-item-price-container">
                            <div className="products-item-currency">RM</div>
                            <div className="products-item-price">{p.price}</div>
                        </div>
                        <button className="btn-cart">ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
