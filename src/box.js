import React from "react";
 
const Card = ({item, aggre}) => {            
           // destructuring props
  return (
    <>
      
        
          {item.map((Val) => {
            return (
                <div className="mangacontainer" key={Val.name}>
                <img className="mangapic" src = {Val.image}></img>
                <h2 className="manganame">{Val.name}</h2>
                <button className="button-28" onClick={() => aggre(Val.chapters, Val.name, Val.image)}>Chapter Count?</button>
                <h4 className="mangadesc">{Val.description}</h4>
                <h4 className="mangachapter">Chapters: {Val.chapters}</h4>
                {/* <h5>{props.categories}</h5> */}
                {/* {props.categories.map((x) => 
                (<p>{x}</p>))} */}
                <p className="mangacats">{Val.categories}</p>
                
              
              
                {/* <button onClick={() => setCount(count + {props,price})}>Add to Cart</button> */}
                {/* <button onClick={() => setCount(props.varr + props.price)}>Add to Cart</button> */}
                {/* <button onClick={() => props.cart(props.prices, props.names)}>Add to Cart</button> */}
                </div>
            );
          })}
        
      
    </>
  );
};

// const Card = ({ item }) => {            
//     // destructuring props
// return (
// <>
// <div className="container-fluid">
//  <div className="row justify-content-center">
//    {item.map((Val) => {
//      return (
//        <div
//          className="col-md-4 col-sm-6 card my-3 py-3 border-0"
         
//        >
//          <div className="card-img-top text-center">
//            <img src={Val.image} alt={Val.name} className="photo w-75" />
//          </div>
//          <div className="card-body">
//            <div className="card-title fw-bold fs-4">
//              {Val.name} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
//              {Val.chapers}
//            </div>
//            <div className="card-text">{Val.description}</div>
//          </div>
//        </div>
//      );
//    })}
//  </div>
// </div>
// </>
// );
// };
 
export default Card;