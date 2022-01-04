import "./topbar.css";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#" className="logo">
                        seanleng.
                    </a>
                </div>
                <div className="right">
                    <div className="login">
                        <AccountCircle className="icon" />
                    </div>
                    <div className="cart">
                        <ShoppingCart className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
