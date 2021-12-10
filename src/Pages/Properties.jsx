import style from '../Style/Properties.module.css'
import Property from '../Components/PropertyCard'
import SearchBar from '../Components/SearchbarLists.jsx'
import Pagination from '../Components/Pagination'
import { useDispatch, useSelector } from "react-redux";
import { setSales } from "../Redux/actions/Listing.jsx";
import { useEffect, useState } from "react";
import {FilterSort, FilterSort_Boolean} from '../Utils/Filter_Functions.js'




const APIKEY = 'AIzaSyAYclQz7_HN1_yGdPTWmQHrJBDmy4RebrM'


function Properties (){

	const dispatch = useDispatch();
  
  	const information = useSelector((state) => state.sales);

  	const [filteredoms, setFilteredDoms] = useState("")
  	const [backupDoms, setBackupDoms] = useState ([])
  	const [visibledoms, setVisibledoms] = useState([])
  	const [CurrentPage, SetCurrentPage] = useState(1)
  	const [filters, setFilters] = useState({
  		status: 'buy',
  		beds: '0',
  		baths: '0',
  		pf: 'High'
  	})

  	const CurrentHandler = (num) =>{
		SetCurrentPage(num)
	}

	const onSearch = (value) => {
		let SearchedDomain = [...filteredoms]
		if(value === ""){
			setFilteredDoms(information)
		}else{
			setFilteredDoms(SearchedDomain.filter((el)=>el.Address.toLowerCase().includes(value.toLowerCase())))
		}
	}

	const resetFilter = ()=>{
		setFilteredDoms(backupDoms)
	}

	const FilterFunc = (event)=>{
		const Filter = event.target.value
		let Filteredcontent = [...filteredoms]
		if(typeof Filter !== 'boolean'){
			let response = FilterSort(Filter, Filteredcontent, backupDoms)
			setFilteredDoms(response)
		}else{
			let response = FilterSort_Boolean(Filter, Filteredcontent, backupDoms)
			setFilteredDoms(response)
		}
	}

  	useEffect(async ()=>{

	    const SynchronousDispatch = await dispatch(setSales({}))
	    
	    setFilteredDoms(SynchronousDispatch.payload?.filter((e)=>e.Status !== 'Sold'))
		setBackupDoms(SynchronousDispatch.payload?.filter((e)=>e.Status !== 'Sold'))
	    return;
  	},[dispatch])


	useEffect(()=>{
		SetCurrentPage(1)
		setVisibledoms(filteredoms?.slice((CurrentPage*6) - 6, CurrentPage*6))
		return;
		// eslint-disable-next-line
	},[filteredoms])



	return(

	<div className={style['Section-splitter']}>
	<SearchBar onSearch={onSearch} Filters={FilterFunc}/>
		<div className={style['Main-container']}>
			<div className={style['Cards']}> 
				{visibledoms ? visibledoms.map((el)=><Property
				image = {el.image} 
				name = {el.Address}
				city = {el.City}
				status = {el.Status}
				id = {el.id}
				Beds = {el.Beds}
				Bath = {el.Bath}
				Price = {el.Price}
				Feet = {el.Feet}
				Zip= {el.Zip}
				key = {el.id}
				/>) : null}
			{!!filteredoms && filteredoms.length > 6 &&<Pagination  maxperpage={6} 
				properties={filteredoms} 
				pagination={CurrentHandler} 
				activepage={CurrentPage}/>}
			</div>
			{visibledoms.length === 0 ?<div>
				<h2>We have no matches for those filters, please reset</h2>
				<button onClick={resetFilter}>Reset Filters</button>

				</div> : <></>}
			<div className={style['Map']}>
	          {APIKEY?
	          <iframe
	          	frameBorder="0" border="0" cellSpacing="0"
	            width='100%'
	            height='90%'
	            title="google maps"
	            zoom='4'
	            loading="lazy"
	            src={`https://www.google.com/maps/embed/v1/place?key=${APIKEY}
	            &q=Miami`}
	          />:<></>
	          }
          	</div>
		</div>
	</div>
	)
}


export default Properties;