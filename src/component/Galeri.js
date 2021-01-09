import React from 'react';
import '../css/Galeri.css'

import a from '../assets/im2.jpeg'
import b from '../assets/im3.jpeg'
import c from '../assets/im4.jpeg'
import d from '../assets/im5.jpeg'
import e from '../assets/im6.jpeg'
import f from '../assets/im7.jpeg'
import g from '../assets/im8.jpeg'
import h from '../assets/img1.jpeg'

const Galeri = () => {
    return ( 
    <div className="galeri-container">
        <div className="galeri-title">
        <h2>Galeri</h2>
        <div className="horizontal-line"></div>
        <p>Proyek yang telah kami garap</p>
        </div>
        
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={a}></img>
        </div> 
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={b}></img>
        </div>  
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={c}></img>
        </div>  
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={d}></img>
        </div>  
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={e}></img>
        </div>  
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={f}></img>
        </div>
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={g}></img>
        </div>  
        <div className="galeri-item">
            <h2>Proyek Kami</h2>
            <img src={h}></img>
        </div>      
    </div> );
}
 
export default Galeri;