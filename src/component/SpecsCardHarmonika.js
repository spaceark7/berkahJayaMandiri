import React from 'react';
import prod from '../assets/pro-one.jpg'
import '../css/SpecsCardHarmonika.css'
const SpecsCardHarmonika = (props) => {
    console.log()
    return ( <div className="specCard">
        <div className="specsImage">
            <img src={prod}></img>
        </div>
        <div className="specsText">
            <h2 className="specsTitle">{props.data.nama_produk}</h2>
            <ul>
                <li>Anyaman: {props.data.anyaman} </li>
                <li>Lubang Mesh: {props.data.lubangmesh} </li>
            </ul>
            <a href="#"> Pesan Sekarang </a>
        </div>
    </div> );
}
 
export default SpecsCardHarmonika;