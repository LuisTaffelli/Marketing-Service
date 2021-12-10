import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSales } from "../Redux/actions/Listing.jsx";
import HomeVideo from '../Sources/production ID_4770380.mp4'
import Navbar from '../Components/NavBar'
import style from '../Style/Home.module.css'
import SearchBar from '../Components/SearchBar'
import HomePortrait from '../Components/HomePortrait'


function Home(){

	const dispatch = useDispatch();

	useEffect(async ()=>{
    	await dispatch(setSales({}))
    	return;
  	},[dispatch])

	return(
		<>
			<div className={style['Home-container']}>
				<div className={style['Video-Container']}>
					<video autoPlay loop muted 
					className={style['Video-inner']}
					>
						<source src={HomeVideo} type='video/mp4'/>
					</video>
				</div>
				<div className={style['Home-inner-search']}>
					<h1>Check out new horizons</h1>
					<h4>Find the home of your dreams</h4>
					<SearchBar/>
				</div>
			</div>
				<HomePortrait />
		</>
	)
}


export default Home;