import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./list.css";
// import { Link } from "react-router-dom";


export default function List({ children }) {
    return (
        <div>
            {/* children is a place holder for my list item components*/}
            <ul>{children}</ul>
        </div>
    );
}





// const styles = {
//   link: {
//     backgroundColor: "blue",
//     height: "100px",
//     width: "300px",
//     color: "white",
//   },
// };

// export default function List() {

//   const [wines, setWines] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/wines")
//       .then((response) => setWines(response.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const wineMap = wines.map((wine, index) => (
//     <Link key={index} style={styles.link} to={"/wines/" + wine._id}>
//       {wine.wine_name}
//     </Link>
//   ));
//   return (
//     //   <div>
//     //     <h4>Menti "Roncaie Sui Lieviti"</h4>
//     //     <h6>2018 Sparkling, Vento</h6>
//     //     <hr className="my-0" />
//     //     <h4>Raventos i Blanc "Blanc de Blanc"</h4>
//     //     <h6>2017 Cava, Spain</h6>
//     //     <hr className="my-0" />
//     //     <h4>Mirco Mariotti "Set e Mez"</h4>
//     //     <h6>NV Sparkling, Italy</h6>
//     //     <hr className="my-0" />
//     //     <h4>Ameztoi "Getariako"</h4>
//     //     <h6>2019 Txakolina, Spain</h6>
//     //     <hr className="my-0" />
//     //     <h4>Domaine Mercouri "Vin des Letinon"</h4>
//     //     <h6>2017 Red Blend, Greece</h6>
//     //     <hr className="my-0" />
//     //   </div>
//     { wineMap }
//   );
// }
