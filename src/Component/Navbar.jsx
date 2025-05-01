import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../Constant';


const Navbar = () => {
    return (
        <header className='w-full flex
        justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt='appleImg' width={15}
                    height={10} />

                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav) => (
                        <div key={nav} className=" text-2xl 
                        cursor-pointer text-gray-500
                         hover:underline hover:text-white transition-all navlist">
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7
                max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="search" width={18}
                        height={18} className=' hover:scale-105 transition-all' />
                    <img src={bagImg} alt="bag" width={18}
                        height={18} className=' hover:scale-105 transition-all' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar