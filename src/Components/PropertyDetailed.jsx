import PropertyVideo from '../Sources/pexels-kindel-media-7578552.mp4'
import image from '../Sources/pexels-brendon-spring-8574669.jpg'
import style from '../Style/PropertyDetailed.module.css'
import {BiBath, BiBed} from "react-icons/bi"
import {BsRulers} from "react-icons/bs"

function PropertyDetails(){

	const stylebg = { backgroundImage: image }

	return(

		<>
			<div className={style['Property-container']} style={{backgroundImage: image}}>
			<img src={image}></img>
				<div className={style['Title']}>
					<h1>Features and Details</h1>
				</div>
				<div className={style['Property-container-Inner']}>
					<div className={style['Container-Inner-Row']}>
						<div className={style['Container-Inner-Left']}>
							<div className={style['Inner-content']}>
								<h2>Interior</h2>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle A</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle B</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle C</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle D</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle N</h3>
									<h3>Description</h3>
								</div>
							</div>
						</div>
						<div className={style['Container-Inner-Right']}>
							<div className={style['Inner-content']}>
								<h2>Exterior</h2>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle A</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle B</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle C</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle D</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle N</h3>
									<h3>Description</h3>
								</div>
							</div>
							<div className={style['Inner-content']}>
								<h2>Pricing</h2>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle A</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle N</h3>
									<h3>Description</h3>
								</div>
							</div>
						</div>
					</div>
					<div className={style['Container-Inner-Row']}>
						<div className={style['Inner-content']}>
							<h2>Area Information</h2>
							<div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle A</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle B</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle C</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle D</h3>
									<h3>Description</h3>
								</div>
								<div className={style['Inner-content-Balance']}>
									<h3>Subtitle N</h3>
									<h3>Description</h3>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}


export default PropertyDetails;