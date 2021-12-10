//import {Link} from 'react-router-dom'
import {MdEmail, MdMap, MdOutlinePhoneInTalk, MdAccessTime} from 'react-icons/md'
import {BsFacebook, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
import style from '../Style/Footer.module.css'

export default function Footer() {
  return (
    <div className={style["main-footer"]}>
      <div className={style["container"]}>
        <div className={style["row"]}>
          {/* Column1 */}
          <div className={style["col"]}>
            <h2><MdEmail/>  Email</h2>
            <h4 className={style["list-unstyled"]}>
            	<ul>
            		<li>Emailname@EmailDomain.com</li>
            	</ul>
            </h4>
          </div>
          {/* Column2 */}
          <div className={style["col"]}>
            <h2><MdMap/>  Address</h2>
            <h4>
            	<ul className={style["list-unstyled"]}>
              		<li>Street Address, Postal Code</li>
              		<li>City</li>
            	</ul>
            </h4>
          </div>
        </div>
        <div className={style["row"]}>
          {/* Column3 */}
          <div className={style["col"]}>
            <h2><MdOutlinePhoneInTalk />  Phone</h2>
            <h4>
            	<ul className={style["list-unstyled"]}>
              		<li>(555) 123-4567</li>
            	</ul>
            </h4>
          </div>
          <div className={style["col"]}>
            <h2><MdAccessTime />  Open Hours</h2>
            <h4>
            	<ul className={style["list-unstyled"]}>
              		<li>Monday - Sunday, 9 AM - 7 PM</li>
            	</ul>
            </h4>
          </div>
        </div>
        <div className={style["row-end"]}>
          <h4 className={style["col-sm"]}>
            &copy;{new Date().getFullYear()}
           | Powered by Luxury Presence | Privacy Policy
 				
          </h4>
          <h4>
				All rights reserved 
          </h4>
          <div className={style['icons']}>
          	<a href='http://www.facebook.com'>
          		<BsFacebook size='24' color='white'/>
          	</a>
          	<a href='http://www.instagram.com'>
          		<BsInstagram size='24' color='white'/>
          	</a>
          	<a href='http://www.Linkedin.com'>
          		<BsLinkedin size='24' color='white'/>
          	</a >
          	<a href='http://www.Youtube.com'>
          		<BsYoutube size='24' color='white'/>
          	</a>
          </div>
        </div>
      </div>
    </div>
  );
}
