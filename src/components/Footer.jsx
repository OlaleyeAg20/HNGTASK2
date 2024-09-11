import {Facebook, Tiktok, Instagram, Pinterest} from './Icons'

function Footer(){
    return (
        <footer className="footer">
            <div className="footerLinks">
                <ul>
                    <h1>About The Garage</h1>
                    <li>The Company</li>
                    <li>Terms and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Our Commitments</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <h1>Customer Support</h1>
                    <li>The Company</li>
                    <li>Terms and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Our Commitments</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <h1>Shop</h1>
                    <li>Shop by Style</li>
                    <li>Shop by Brand</li>
                    <li>Sellers by Region</li>
                    <li>Shop by Region</li>
                </ul>
                <ul>
                    <h1>Services</h1>
                    <li>Design Services</li>
                    <li>Request a catalogue</li>
                    <li>Sellers by Region</li>
                    <li>Shop by Region</li>
                </ul>
            </div>
            <div className="bottomFooter">
                <div className="socials">
                    <Instagram />
                    <Tiktok />
                    <Facebook />
                    <Pinterest />
                </div>
                <p className="copyright">
                    &copy; 2024 The Garage Co. | All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer