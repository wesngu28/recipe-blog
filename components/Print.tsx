'use client'

import { faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Print() {
  return (
    <a onClick={() => window.print()}>
      <FontAwesomeIcon className='hover:scale-125 hover:cursor-pointer z-10 duration-700 ease-out p-4' size={"2x"} icon={faPrint} />
    </a>
  )
}