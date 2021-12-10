import React from 'react';
import style from '../Style/SearchBar.module.css'
import CitiesList from './CitiesList/CitiesList.jsx'
import { useDispatch, useSelector } from "react-redux";
import { setSales } from "../Redux/actions/Listing.jsx";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Sales from "../MOCK_DATA.json";


function SearchBar({onSearch}){

  const dispatch = useDispatch();
  
  const information = useSelector((state) => state.sales);

  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [filteredoms, setFilteredDoms] = useState(null)
  const [nonReduxDoms, setNonReduxDoms] = useState("")
  const [visibledoms, setVisibledoms] = useState("")

  useEffect(async ()=>{
    const SynchronousDispatch = await dispatch(setSales({}))
    setFilteredDoms(information?.filter((e)=>e.Status !== 'Sold'))
    setNonReduxDoms(Sales.filter((e)=>e.Status !== 'Sold'))
    setVisibledoms(filteredoms)
    return;
  },[dispatch])


  useEffect(()=>{
    if(visibledoms === undefined){
      setVisibledoms(filteredoms)
      return;
    }
  }, [])




 const handleChange = ({ target: { value } }) => {
    setInput(value);
    if(!information){
      dispatch(setSales({}))
    }
    if(Array.isArray(filteredoms)){
        const inputfilter = filteredoms?.filter((element, i)=>{
            if(element.Address.toLowerCase().includes(value.toLowerCase())){
              return true
            } else if (element.Zip?.includes(value)){
              return true
            } else {
              return false
            }    
          })
      setVisibledoms(inputfilter)
    }else{
      setVisibledoms(filteredoms)
    }
  };

 const handleList = (e) => {
    setShow(e);
  };

  

  return (
    <label className={style.inputData}>
      <input
        onBlur={() => handleList(false)}
        onFocus={() => handleList(true)}
        onChange={handleChange}
        placeholder="Search by Area, Zip Code or Address"
      />
      {filteredoms ? <CitiesList show={show} search={input} doms={visibledoms}/> : <CitiesList show={show} search={input} doms={nonReduxDoms}/>}
      <BiSearch className={style.icon} />
    </label>
    )
}


export default SearchBar;