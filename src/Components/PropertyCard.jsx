import { Link } from "react-router-dom";
import {AiOutlineDollar} from "react-icons/ai"
import {BiBath, BiBed, BiBuildingHouse} from "react-icons/bi"
import {BsRulers} from "react-icons/bs"
import styles from "../Style/PropertyCard.module.css"
import image from "../Sources/pexels-expect-best-323780.jpg"




function Propertie({Bath, Beds, Feet, Price, Zip, city, name, status, id}) {


  return (
      <div className={styles['Card-Container']}>
          <img src={image} alt=''></img>
        <div className={styles['Card-Column']}>
          <div className={styles['Card-Column-inner']}>
            <Link to={`/propertie/${name}`}>
              <h3>{name}</h3>
            </Link>
          </div>
          <div className={styles['Card-Column-inner-bottom']}>
            <div className={styles['inner-center']}>
            <AiOutlineDollar size={20}/>
            <h3> $ {Price.slice(1)}</h3>
            </div>
            <div className={styles['inner-center']}>
              <BiBath size={20}/>
              <h4>{Bath}</h4>
            </div>
            <div className={styles['inner-center']}>
              <BiBed size={20}/>
              <h4>{Beds}</h4>
            </div>
            <div className={styles['inner-center']}>
              <BsRulers size={20}/>
              <h4>{Feet} ²</h4>
            </div>
            <div className={styles['inner-center']}>
              <BiBuildingHouse size={20}/>
              <h4>{city}</h4>
            </div>
          </div>
        </div>
    </div>
  );
}



export default Propertie;