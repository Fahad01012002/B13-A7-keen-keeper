
import NavbarLink from "../ui/NavbarLink";

const Navbar = () => {

    const links = [
        {
            id: 1,
            name: 'Home',
            href: '/',
            icon: 'Home'
        },
        {
            id: 2,
            name: 'Timeline',
            href: '/timeline',
            icon: 'Calendar'
        },
        {
            id: 3,
            name: 'Stats',
            href: '/stats',
            icon: 'BarChart'
        }
    ]

    return (
        <div className="border-b border-gray-300 shadow-sm">
            <div className='w-11/12 mx-auto flex justify-between items-center mt-4 mb-3'>
                <div>
                    <h2 className='text-[24px]'><span className='font-bold text-[#1f2937]'>Keen</span>Keeper</h2>
                </div>

                <div>
                    <ul className='flex space-x-4'>
                        {
                            links.map((link) => (
                                <NavbarLink key={link.id} link={link} />
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;