import {Link, useLocation} from 'react-router-dom'
import {MdAccountCircle} from 'react-icons/md'
import style from '../Style/Navbar.module.css'


export default function NavBar() {

  const location = useLocation()

  return (
    <>
      <nav className={location.pathname != '/' ? style["Container"] : style["Container-home"]}>
        <div className={style["Title"]}> 
          <Link to='/'>
            <h2> Gatien Salaun </h2> 
          </Link>
        </div>
        <div className={style["Content"]}>
          <Link to='/properties'>
            <h4>Properties</h4>
          </Link>
          <Link to='/neighborhoods'>
            <h4>Neighborhoods</h4>
          </Link>
            <h4>Condos By Price</h4>
            <h4>The Islands</h4>
          <Link to='/resources'>
            <h4>Resources</h4>
          </Link>
          <Link to='/about'>
            <h4>About</h4>
          </Link>
          <Link to='/contact'>
            <h4>Contact</h4> 
          </Link>
        </div>
        <Link to='#'> <MdAccountCircle size='36' color='#2daefd' style={{background:'white',
          borderRadius:'50%'}}/> </Link>
      </nav>
      
    </>
  );
}

