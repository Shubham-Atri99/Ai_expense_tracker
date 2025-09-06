import { Checkuser } from '@/lib/Checkuser'
import React from 'react'

const Navbar = () => {
  const user=Checkuser();
  return (
    <div>Navbar</div>
  )
}

export default Navbar