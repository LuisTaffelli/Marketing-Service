import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom"
import {SalesButton} from '../Components/StyledComponents.jsx'
import { setSales } from "../Redux/actions/Listing.jsx";
import PropertyDetailed from "../Components/PropertyDetailed.jsx"
import PropertyVideo from '../Sources/pexels-kindel-media-7578552.mp4'
import image from '../Sources/pexels-jean-van-der-meulen-1457847.jpg'
import image2 from '../Sources/pexels-andrea-davis-9825990.jpg'
import image3 from '../Sources/pexels-andrea-davis-9867328.jpg'
import PhotoStaff from '../Sources/pexels-andrea-piacquadio-3760263.jpg'
import style from '../Style/PropertyPage.module.css'
import {BiBath, BiBed} from "react-icons/bi"
import {BsRulers} from "react-icons/bs"


const APIKEY = 'AIzaSyAYclQz7_HN1_yGdPTWmQHrJBDmy4RebrM'


function Property(){

	let Location = useLocation()

	const [propertyInfo, setPropertyInfo] = useState()
	const [CurrentShow, SetCurrentShow]= useState(image)
	const [propertyImagery, setImagery] = useState([image2, image3, PropertyVideo])

	const dispatch = useDispatch();

	useEffect(()=>{
		return;
	},[CurrentShow])
	
	useEffect(async()=>{
    	let Property = await dispatch(setSales({}))
    	let name = Location.pathname.split('/')
    	setPropertyInfo(Property.payload.filter((e)=>e.Address.toLowerCase().includes(Location.pathname.split('/')[2].toLowerCase())))
    	return;
  	},[dispatch])

	if (!propertyInfo){
		return(
			<>
			<div>Loading</div>
			</>
			)
	}

	const filtertag = (element, index)=>{
		let provel = element.split('.')
		if(provel[provel.length-1] !== 'jpg'){
			return (
				<video autoPlay loop muted
					className={style['Video-inner']}
					key = {index}
					name={element} 
					onClick={ImageChange}
					>
						<source name={element} src={element} type='video/mp4'/>
					</video>
				)
		}else{
			return <img key={index} name={element} onClick={ImageChange} src={element}></img>
		}

	}

	const ImageChange = (event)=>{
		let UpdatedSrc = event.target.name
		if(UpdatedSrc === undefined){
			UpdatedSrc = PropertyVideo
		}
		let provArr = propertyImagery.filter((el)=>el !== UpdatedSrc)
		provArr = [...provArr, CurrentShow]
		console.log(UpdatedSrc, provArr)
		SetCurrentShow(UpdatedSrc)
		setImagery(provArr)
	}


	return(

		<>
			<div className={style['Property-container']}>
				<div className={style['Top-Container']}>
					<div className={style['Main-image']}>
						{CurrentShow ? filtertag(CurrentShow) : <></>}
					</div>
					<div className={style['Side-images']}>
						{propertyImagery ? propertyImagery.map(filtertag) : <></>}
					</div>
				</div>
				<div className={style['General-Container']}>
					<div className={style['General-Inner-Top']}>
						<br/>
						<div className={style['Inner-Top-block']}>
							<h3>
								{propertyInfo[0].Status}
							</h3>
						</div>
						<br/>
						<h2>
							{propertyInfo[0].Address}
						</h2>
						<h4>{propertyInfo[0].City}</h4>
						<br/>
						<h2>{propertyInfo[0].Price}</h2>
						<br/>
					</div>
				</div>
				<div className={style['Description-Container']}>
					<div className={style['Description-Container-row']}>
						<div className={style['Description-Container-Left']}>
							<h4>
								Tempor dolor mollit commodo sit ut in consequat enim veniam
								ullamco cillum ea dolore dolore enim occaecat amet nisi esse
								enim nulla excepteur excepteur nisi sint cupidatat et elit
								est incididunt velit ex occaecat deserunt voluptate reprehenderit
							 	ex ullamco in velit enim exercitation id sint aliquip ut esse mollit
							 	in deserunt irure amet dolor quis laborum in non cillum aliqua elit tempor elit minim do velit cupidatat dolor ut consectetur aliqua veniam dolore dolor ut ex magna adipisicing dolore laboris voluptate occaecat irure consectetur in sint minim non aliqua cillum ut ea culpa cillum aliquip in laborum non dolor incididunt est dolore esse eu anim culpa dolor cupidatat exercitation aute nisi tempor id culpa dolore occaecat aliquip excepteur mollit occaecat minim elit est laborum duis deserunt aute proident exercitation veniam laboris voluptate labore cupidatat ut est enim sit voluptate consectetur incididunt nostrud magna sit do fugiat laborum veniam dolore mollit dolor occaecat in in sit ullamco officia nostrud exercitation ex pariatur cupidatat fugiat.
							</h4>
							<h4>
								Lorem ipsum sint dolor proident sit ad tempor adipisicing et dolor eu laboris officia pariatur consectetur minim labore culpa irure commodo exercitation sed officia qui consequat do cupidatat et excepteur culpa in fugiat proident culpa dolor laboris ut sed aute non dolor officia ad excepteur velit consectetur ut irure aliqua anim deserunt consequat irure laborum commodo cillum officia veniam voluptate irure laboris pariatur esse in elit ad proident consequat elit consequat minim ea ut ut cillum dolor occaecat nostrud pariatur sint irure in nostrud laboris ut dolor cupidatat quis consectetur consectetur amet elit quis aute anim et do duis nostrud commodo in anim elit eiusmod labore pariatur voluptate laboris dolore duis culpa voluptate exercitation eiusmod ad aliqua laborum id tempor quis ut in cupidatat esse nulla ullamco culpa do aliquip est officia mollit do ut labore dolor et sed commodo ad mollit mollit reprehenderit irure cupidatat tempor cupidatat in dolore ut deserunt occaecat nostrud ut adipisicing laboris non cillum reprehenderit laboris voluptate id laborum irure proident laboris dolor ut exercitation aute consequat voluptate veniam ut duis sunt qui tempor ut ut exercitation ut dolor aute qui amet magna laboris cillum duis ut pariatur aute in veniam officia incididunt eu eu.

							</h4>

						</div>

						<div className={style['Description-Container-Right']}>
							<div className={style['Container-Right-Inner']}>
							<BiBath size={36}/>
							<h3>{propertyInfo[0].Bath}</h3>
							</div>
							<div className={style['Container-Right-Inner']}>
							<BiBed size={36}/>
							<h3>{propertyInfo[0].Beds}</h3>
							</div>
							<div className={style['Container-Right-Inner']}>
							<BsRulers size={36}/>
							<h3>{propertyInfo[0].Feet} Ft²</h3>
							</div>
						</div>
					</div>
					<div className={style['Description-Container-row']}>
						<div className={style['Description-Container-Left-Agent']}>
							<img src={PhotoStaff}></img>
						</div>
						<div className={style['Description-Container-Right-Agent']}>
							<h2>Agent Name</h2>
							<div className={style['Description-Inner-Agent']}>
								<div>
									<h3>Role</h3>
									<h4>Role description</h4>
								</div>
								<div>
									<h3>Phone</h3>
									<h4>(555) 123-4567 </h4>
								</div>
								<div>
									<h3>Email</h3>
									<h4>Emailname@EmailDomain.com</h4>
								</div>
							</div>
							<div>
								<SalesButton className={style['Button-right']}>
									<Link className={style['Button-link']} to='Contact'>Contact</Link>
								</SalesButton>
							</div>
						</div>
					</div>
				</div>
				<div className={style['Detailed-Container']}>
					<PropertyDetailed />
				</div>
				<div className={style['Map-Container']}>
				{APIKEY?
					<iframe
					frameBorder="0" border="0" cellSpacing="0"
					width='100%'
					height='100%'
					title="google maps"
					zoom='2'
					loading="lazy"
					src={`https://www.google.com/maps/embed/v1/place?key=${APIKEY}
					&q=25.798724, -80.190244`}
					/>:<></>
				}
				</div>

			</div>
		</>
	)
}


export default Property;