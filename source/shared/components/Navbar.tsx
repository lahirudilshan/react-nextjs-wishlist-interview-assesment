import { IoHeart, IoHeartCircleSharp } from 'react-icons/io5';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className="font-sans flex fixed flex-col text-center sm:flex-row sm:text-left sm:justify-between lg:py-4 px-6 bg-pink-600 shadow w-full z-50 lg:top-0">
            <div className="mb-2 lg:mb-0 md:block hidden cursor-pointer">
                <Link href="/">
                    <div className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
                        <div className="flex justify-center items-center tracking-normal px-0 text-white">
                            <IoHeartCircleSharp className="ml-1 text-3xl" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex justify-around items-center h-full lg:py-0 py-4">
                <Link href="/">
                    <div className="text-lg no-underline text-white hover:text-pink-300 mx-4 cursor-pointer">
                        <span className="md:block hidden">Home</span>
                        <HiHome className="block md:hidden text-xl" />
                    </div>
                </Link>
                <Link href="/user/wishlist">
                    <div className="text-lg no-underline text-white hover:text-pink-300 mx-4 cursor-pointer">
                        <span className="md:block hidden">Liked</span>
                        <IoHeart className="block md:hidden text-xl" />
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;