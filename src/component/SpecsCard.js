import React from 'react';
import prod from '../assets/pro-one.jpg'
import '../css/SpecsCard.css'
const SpecsCard = (props) => {
    console.log()
    return ( <div className="specCard">
        <div className="specsImage">
            <img src={prod}></img>
        </div>
        <div className="specsText">
            <h2 className="specsTitle">{props.data.nama_produk}</h2>
            <ul>
                <li>Dimensi: {props.data.dimensi} </li>
                <li>Tebal Kawat: {props.data.tebal_kawat} </li>
                <li>Kalang: {props.data.kalang} </li>
                <li>Anyaman: {props.data.anyaman}  </li>
            </ul>
            <a href="#"> Pesan Sekarang </a>
        </div>
    </div> );
}
 
export default SpecsCard;