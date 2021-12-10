import React from 'react';
import SwitchButton from 'react-switch'
import style from '../Style/SearchBarList.module.css'
import CitiesList from './CitiesList/CitiesList.jsx'
import { useDispatch, useSelector } from "react-redux";
import { setSales } from "../Redux/actions/Listing.jsx";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";


function SearchBarList({onSearch, Filters}){


  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false)


 const handleChange = ({ target: { value } }) => {
    setInput(value);
    onSearch(input)
  };
  const switchChange = ()=>{
    setChecked(!checked)
    const switchFilter = {
      target: {
        value: checked
      }
    }
    Filters(switchFilter)
  }

  

  return (
    <div className={style.searchContainer}>
      <label className={style.inputData}>
        <input
          onChange={handleChange}
          placeholder="Search by Area, Zip Code or Address"
        />
        <BiSearch className={style.icon} />
      </label>
      <div className={style['Filter-container']}>
          <div className={style['Filter-child']}>
            <SwitchButton onChange={switchChange} checked={checked}
            className={style['React-Switch']}
            checkedIcon={<div></div>}
            uncheckedIcon={<div></div>}
            onColor='#888'
             />
          {checked ? <p>For Lease</p> : <p>For Sale</p>}
          </div>
      </div>
      <div className={style['Filter-container']}>
          <div className={style['Filter-child']}>
            <select className={style.select} onChange={Filters}>
              <option value= 'Higher'> Highest Price </option>
              <option value= 'Lower'> Lowest Price </option>
              <option value= 'Large'> Largest ft² </option>
              <option value= 'Small'> Smallest ft² </option>
            </select>
          </div>
      </div>
      <div className={style['Filter-container']}>
          <div className={style['Filter-child']}>
            <select className={style.select} onChange={Filters}> Beds
              <option value= {[0,'beds']}> +0 Beds </option>
              <option value= {[1,'beds']}> +1 Beds </option>
              <option value= {[2,'beds']}> +2 Beds </option>
              <option value= {[3,'beds']}> +3 Beds </option>
            </select>
          </div>
      </div>
      <div className={style['Filter-container']}>
          <div className={style['Filter-child']}>
            <select className={style.select} onChange={Filters}> Baths
              <option value= {[0,'baths']}> +0 Baths </option>
              <option value= {[1,'baths']}> +1 Baths </option>
              <option value= {[2,'baths']}> +2 Baths </option>
              <option value= {[3,'baths']}> +3 Baths </option>
            </select>
          </div>
      </div>
    </div>
    )
}


export default SearchBarList;