import React from 'react';
import '../css/Banner.css'
import BannerVid from '../assets/banner-vid.webm'
import Logo from '../assets/web-logohorizon_1.png'
import MenuLogo from '../assets/web-logoleft.png'
import prodOne from '../assets/2.jpg'
import prodTwo from '../assets/3.jpg'
import prodThree from '../assets/4.jpg'
const Banner = () => {
    return ( 
        <div className="banner">
            <header className="nav">
                <div className="nav-logo">
                    <img src={Logo}></img>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li>
                            Utama
                        </li>

                        <li>
                            Produk
                        </li>

                        <li>
                            Tentang
                        </li>
                        <li>
                            Kontak
                        </li>
                    </ul>
                </div>
            </header>
            <video playsInline autoPlay muted loop>
                <source src={BannerVid} type="video/webm"></source>
            </video>

            <div className="Main-logo">
                <div className='logo-container'>
                    <img src={Logo}></img>
                    <h2 className="logo-title">
                        Produsen Kawat Bronjong & Harmonika <br></br>
                        Terbaik Di Cianjur.
                    </h2>
                </div>
                
            </div>
        
            <div className="card-container">
                <div className="card">
                    <div className='cardImg'>
                        <img src={prodOne}></img>
                    </div>
                    <div className="cardText">
                        <p className="card-title">Kepuasan #1</p>
                        <p className="card-desc">Bronjong kami dibuat secara handmade(manual) dengan cermat kami menjaga kualitas.</p>
                    </div>
                </div>

                <div className="card">
                    <div className='cardImg'>
                        <img src={prodTwo}></img>
                    </div>
                    <div className="cardText">
                    <p className="card-title">UMKM Cianjur</p>
                        <p className="card-desc">Sebagai pelaku usaha UMKM kami ingin berkontribusi memajukan perekonomian untuk indonesia.</p>
                    </div>
                </div>

                <div className="card">
                    <div className='cardImg'>
                        <img src={prodThree}></img>
                    </div>
                    <div className="cardText">
                    <p className="card-title">Siap Antar</p>
                    <p className="card-desc">Karena diulir secara manual kami sangat memperhatikan Kualitas serta daya pakai produk kami, Jaminan Kualitas menjadi prioritas.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;