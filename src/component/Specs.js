import React, { useEffect, useState } from 'react';
import SpecsCard from './SpecsCard.js'
import '../css/Specs.css'
import produk from "../produk"
import SpecsCardHarmonika from './SpecsCardHarmonika.js'
const Specs = (props) => {
    const [data, setData] = useState([]);
    let newdata ='';
 
    function updateState(arr) {
        setData(arr)
    }
    useEffect(() => {
        console.log("produk: ", produk)
        if(props.param === "Bronjong") {

            setData(produk.bronjong)
             console.log("from Bronjong", data)
           

        }
        else if(props.param === "Harmonika") {
            setData(produk.harmonika)
            console.log("from harmonikaarr", data)
            
        }
    })
    if(props.param === "Bronjong") {
        return ( <div className="specsBox">
            <h2 className="specsMain"> Spesifikasi</h2>
            { newdata = data.map(d => {
                console.log("executed card: ", d)
                return <SpecsCard data = {d}/>
            })

            }
       
        </div> );
    }
    else if(props.param === "Harmonika") {
        return ( <div className="specsBox">
            <h2 className="specsMain"> Spesifikasi</h2>
        { newdata = data.map(d => {
            console.log("executed card: ", d)
            return <SpecsCardHarmonika data = {d}/>
        })

        }
   
    </div> );
    }

    else {
        return ( <div className="specsBox">
            <h2 className="specsMain">OOps ada yang salah</h2>
       
        </div> );
    }
    
}
 
export default Specs;