import React, { useEffect } from 'react';
import '../css/Layanan.css'
import SpecsCard from './SpecsCard.js'



const Layanan = (props) => {
    console.log('prodval is: ', props.prodval)
    useEffect(() => {
    })

   function showProdOne(e) {
       e.preventDefault();
       props.prodval("Bronjong")
       let ff = document.querySelector('.specsBox');
       if(ff.style.display == "flex") {
        ff.style.display = "none";
       }
       console.log('clicked bronjong element: ', ff )
       ff.style.display = "flex"
       ff.scrollIntoView(false);
   }

   function showProdTwo(e) {
    e.preventDefault();
    props.prodval("Harmonika")
    let ff = document.querySelector('.specsBox');
    if(ff.style.display == "flex") {
        ff.style.display = "none";
       }
    ff.style.display = "flex"
    ff.scrollIntoView(false);
}
    

    return ( 
    <div className="layanan-container">
        <div className="layanan-title">
            <h2>Produk Kami</h2>
            <p>Produk Kawat & Bronjong terbaik ada disini. <br></br>
            (klik/Tap untuk melihat Spesifikasi) </p>
        </div>
        <div className="produkBox">
            <div onClick={showProdOne} className="item-box prod-one">
                <p>Bronjong</p>
            </div>
            <div onClick={showProdTwo} className="item-box prod-two">
                <p>Kawat Harmonika</p>
            </div>    
        </div>

        
    </div>  );
}
 
export default Layanan;