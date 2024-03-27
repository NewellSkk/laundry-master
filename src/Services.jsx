import { useState } from 'react';

import Product from './Product';
import Basket from './Basket';
import {products} from './products';

function Services() {
   
  let [basket,setBasket]=useState([]);

  let add=(x)=>{
    let ind= basket.findIndex(obj => obj.name === x.name);
    if(ind===-1){
      const updatedBasket = [...basket, { name: x.name, img: x.img, count: 1, unitPrice: x.price }];
      setBasket(updatedBasket);
    }else{
      const updatedBasket = [...basket];
      updatedBasket[ind].count+=1;
      setBasket(updatedBasket);
    }
  }

  let reduce=(name)=>{
    let ind= basket.findIndex(obj => obj.name === name);
    let updatedBasket=[...basket];
    if(updatedBasket[ind].count===1){
      remove(name);
    }else{
      updatedBasket[ind].count-=1;
      setBasket(updatedBasket);
    }
    
  }

  let remove=(name)=>{
    let ind= basket.findIndex(obj => obj.name === name);
    let updatedBasket=[...basket];
    updatedBasket.splice(ind,1);
    setBasket(updatedBasket);
  }

  let prods=products.map((x)=>{
    return(
      <Product 
        key={x.name}
        name={x.name} 
        price={x.price} 
        img={x.img}
        handleAdd={()=>add(x)}
      />
    )
  })

  return (
    <div>
      <div className='tc fl w-70'>
        <h2>SERVICES</h2>
       {prods}
      </div>
      <div className='tc fl w-30 bg-black white mt3 br3'>
        <h2>Basket</h2>
        <Basket items={basket} handleRemove={remove} handleAdd={add} handleReduce={reduce} />
      </div>
        
    </div>
  );
}

export default Services;
