import React from 'react';
import '../css/Footer.css'

const Footer = () => {
    return (
    <div className="footer-container">
        <div className="footer-title">
            <p>Kami selalu siap</p>
            <a href="#"> <h2>0811-xxxxxxxxx</h2></a>
        </div>

        <div className="footer-detail">
            <div className="detailBox">
                <h4>Kontak Kami</h4>
                <p>Anda bisa berkunjung ataupun menghubungi kami dibawah ini</p>
                <ul>
                    <li>Jln. Cugenang</li>
                    <li><a href="#">aris.yuni13@gmail.com</a></li>
                    <li><a href="#">0877 2111 2222</a></li>
                </ul>
            </div>
            <div className="detailBox">
                <h4>Layanan Kami</h4>
                <p>Anda bisa berkunjung ataupun menghubungi kami dibawah ini</p>
                <ul>
                    <li><a href="#">Kawat Bronjong</a></li>
                    <li><a href="#">Kawat Harmonika/Pagar</a></li>
                </ul>
            </div>
            <div className="detailBox">
                <h4>Media Sosial</h4>
            </div>
        </div>
        <div className="copyright">
            <p>Created By Explore Creative Design</p>
        </div>

    </div> );
}
 
export default Footer;