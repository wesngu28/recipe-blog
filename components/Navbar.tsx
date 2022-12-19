import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false

export default function Navbar() {
  return (
    <div className="m-4">
      <a className='p-4' href="/"><FontAwesomeIcon className='hover:scale-125 hover:cursor-pointer z-10 duration-700 ease-out p-4' size={"2x"} icon={faHome} /></a>
      <a className='p-4' rel="noreferrer" target="_blank" href="https://www.instagram.com/co2x5_homecooking/"><FontAwesomeIcon className='hover:scale-125 hover:cursor-pointer z-10 duration-700 ease-out p-4' size={"2x"} icon={faInstagram} /></a>
      <a className='p-4' href="mailto:co2x5cooking@gmail.com"><FontAwesomeIcon className='hover:scale-125 hover:cursor-pointer z-10 duration-700 ease-out p-4' size={"2x"} icon={faEnvelope} /></a>
    </div>
  )
}