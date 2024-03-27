import React from "react";
import "tachyons";
const Product = (props) =>{
    const{name,img,price,handleAdd}=props;
    return(
        <div className='tc hover-white bg-orange dib br3 pa3 ma2 mw5 '>
            <span className="fw6 f4">{name}</span><br/>
            <img className={'h5 br3'} alt='prod'src={img}/>
            <div>
                KSh.{price}<br />
                <button className="f6 dim br2 ba ph3 pv2 mb2 dib bg-black white" onClick={handleAdd}>ADD</button>
            </div>
        </div>
    )
}
export default Product;
