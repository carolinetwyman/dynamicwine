import React, { useState, Link, Children } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Container } from 'reactstrap';
import "./information.css"


const Info = (wine) => {


  const [modal, setModal] = useState(false);
  const [wineState, setWineState] = useState (wine)

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}></Button>
      <Modal isOpen={modal} toggle={toggle} className="wine">
        <ModalHeader toggle={toggle}>
        <h2><strong className="strong">{wine.wine.wine_name}</strong> "{wine.wine.full_name}"</h2>
        <h4>{wine.wine.year} {wine.wine.region}, {wine.wine.country} <strong className="strong"> {wine.wine.PPG} | {wine.wine.PPB}</strong></h4>
        </ModalHeader>
        <ModalBody>
          <strong className="strong">Style: </strong>{wine.wine.carbonation} {wine.wine.color}
          <br/>
          <strong className="strong">Varietal: </strong>{wine.wine.grape_detail}
          <br/>
          <strong className="strong">Notes: </strong>{wine.wine.details}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Info;






// export default class Information extends React.Component {

//     render() {
//         return(
//         <div>
//          <h1>Raventos i Blanc</h1>
//          <h4> 2017 Blanc de Blanc</h4>
//          <hr className="my-4"/>
//          <p>
//             <strong>Varietal:</strong> Xarello, Macabeo, Parellada
//          </p>
//          <p>
//             <strong>Vinyards:</strong> From the plots La Barbera, La Plana and El Viader which have deep calcareous soils with a sand-rich loamy texture giving freshness and elegance and El Llac, a 40-year-old plot with marine fossils providing structure and complexity. Biodynamic viticulture.
//          </p>
//          <p>
//             <strong>Winemaking:</strong>  Made in the traditional method. Vinification in stainless steel tanks followed by blending and secondary fermentation in the bottle, aged for a minimum of 18 months. Extra Brut.
//          </p>
//          <p>
//          <strong>Tasting Notes:</strong> A structured, fresh and complex wine with white floral notes on the nose. The wine is impeccably balanced with a marked minerality, soft and fresh fruit flavors, and some nutty notes. The small, nicely integrated bubbles and saline qualities are in perfect harmony with the slightly creamy texture.
//          </p>
//       </div>   
//         )
//     }

// }