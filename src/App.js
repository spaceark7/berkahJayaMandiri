import { useState } from 'react';
import './App.css';
import Banner from './component/banner.js'
import Galeri from './component/Galeri';
import Layanan from './component/layanan.js'
import Specs from './component/Specs.js'
import Client from './component/Client.js'
function App() {
  const [prodVal, setProdVal] = useState('');
  const [data, setData] = useState([])
  const d1 = [0,1]
  const d2 = [1,2,3,4]

  const getProdParam = (data_child) => {
    console.log("fromchild: ", data_child)

    if(prodVal === "Bronjong") {
      setData(d1)
      console.log("from bronjongarr", prodVal)

  }
  else if(prodVal === "Harmonika") {
      setData(d2)
      console.log("from harmonikaarr", prodVal)
      
  }
    setProdVal(data_child);
  }
  return (
    <div className="App">
      {console.log("App:", prodVal)}
      <Banner />
      <Layanan prodval = {getProdParam} />
      <Specs data={data} param={prodVal} />
      <Galeri />
      <Client />

    </div>
  );
}

export default App;
