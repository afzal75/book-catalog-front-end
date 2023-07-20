import { useState, useEffect } from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavList from './NavList'
import { Link } from 'react-router-dom'

// BsSearch
const NavMenu = () => {
  const [openNav, setOpenNav] = useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  return (
    <Navbar className='mx-auto w-full py-3'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='#'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5'
        >
          <Link to='/'>Book</Link>
        </Typography>

        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}

export default NavMenu