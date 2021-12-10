import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./CitiesList.module.css";


function CitiesList(props) {
  
  const [domlist, setDomlist] = useState([])

  useEffect(()=>{
    setDomlist(props.doms)
    return;
  }, [props.doms])


  return props.show ? (
    <div className={styles.list}>
      {domlist ? domlist.map((element, i)=>{
        if(i<=4){
          return <div className= {styles.Address} key={i}>{element.Address}, {element.City}</div>
        }else{
          return;
        }
      }) : null}
    </div>
    ) : (
    <></>
  );
}

export default CitiesList;
