import PhotoStaff from '../Sources/pexels-andrea-piacquadio-3760263.jpg'
import PhotoHousing from '../Sources/pexels-jess-loiterton-4601159.jpg'
import PhotoBlog from '../Sources/pexels-alex-qian-2343465.jpg'
import style from '../Style/HomePortrait.module.css'
import {Link} from 'react-router-dom'
import {PortraitButton} from './StyledComponents.jsx'


function Portrait(){

	return(
		<div className={style['Portrait-container']}>
		<div className={style['Home-About']}>
			<img src={PhotoStaff} alt='load Failed'/>
			<div className={style['Home-About-row']}>
				<div className={style['Home-About-column']}>
					<h1>Meet the Team </h1>
					<h3>Commodo laboris aute id cupidatat ut mollit anim ex consequat
				in ut eiusmod consectetur reprehenderit ullamco amet pariatur dolor elit
				consequat sint ut ut deserunt mollit minim sit consequat do laboris irure
				ad excepteur veniam ut duis et labore amet laboris pariatur minim in consequat
				e amet qui dolore sit excepteur minim ut sed enim sed dolore eu tempor est proident
				mollit adipisicing amet nisi voluptate ea pariatur sint aute amet excepteur 
				voluptate deserunt amet sint proident mollit amet esse et quis eiusmod labore
				magna dolor velit officia ut dolore proident ut sit dolore exercitation dolor
				excepteur eiusmod ut reprehenderit in dolore labore sit officia anim ut eu 
					</h3>
					<PortraitButton className={style['Button-right']}>
						<Link to='Contact'>Contact</Link>
					</PortraitButton>
				</div>
			</div>
		</div>
			<div className={style['Home-About']}>
				<div className={style['Home-About-row']}>
					<div className={style['Home-About-column-left']}>
						<h1>Check out new Properties </h1>
						<h4>Proident ex aliquip elit consequat.</h4>
						<PortraitButton className={style['Button-left']}>
							<Link to='Properties/sale'>See More</Link>
						</PortraitButton>
					</div>
				</div>
				<img src={PhotoHousing} alt='load Failed'/>
			</div>
		<div className={style['Home-About']}>
			<div className={style['Home-About-column']}>
				<img src={PhotoBlog} alt='load Failed'/>
				<div className={style['Home-About-column-right-end']}>
					<h1>Watch the Blog </h1>
					<h3>Reprehenderit elit enim adipisicing exercitation 
					dolore sunt consectetur commodo laboris dolor pariatur qui quis.</h3>
					<PortraitButton className={style['Button-right']}>
						<Link to='Contact'>See More</Link>
					</PortraitButton>
				</div>
			</div>
		</div>
		</div>
		)
}










export default Portrait;