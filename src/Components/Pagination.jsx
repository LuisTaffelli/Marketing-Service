import style from '../Style/Pagination.module.css'



export default function Pagination({maxperpage, properties, pagination, activepage}) {
	let pages = [],
	buttonstorender = [];

	for (let i = 0; i < Math.ceil(properties.length/maxperpage); i++){
		pages.push(i+1)
	}

	let middle = Math.floor(pages.length/2)
	if(activepage < middle){
		buttonstorender = pages.slice(0, middle)
		buttonstorender.push(pages[pages.length-1])
	}else{
		buttonstorender = pages.slice(middle-1, pages.length)
		buttonstorender.length !== 1 && buttonstorender.unshift(pages[0]) 
	}
	return (
		<nav className={style['Pagination']}>
			<ul className={style['Pagination-Container']}>
				{pages && buttonstorender.map((number)=>
					<li 
					className={activepage === number ? style['Pagination-item-active']
					:
					style['Pagination-item'] }
					key={number}>
					<button onClick={()=>pagination(number)}>{number}</button>
					</li>
				)}
			</ul>
		</nav>
		)

}