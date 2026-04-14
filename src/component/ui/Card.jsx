import Image from 'next/image';

const Card = ({ item }) => {
    const { name, picture, days_since_contact, status, tags } = item;

    return (
        <div className='flex flex-col justify-between items-center space-y-2 shadow-lg p-7 border border-gray-200 rounded-lg'>
            <Image
                src={picture}
                alt='name'
                width={70}
                height={70}
                className='rounded-full'
            />
            <h2 className='font-bold text-[18px]'>{name}</h2>
            <p className=''>{days_since_contact}d Ago</p>
            <div className='flex gap-3 justify-center items-center'>
                {
                    tags.map((tag, index) => {
                        return (
                            <div key={index}>
                                <h2 className='px-4 py-1 bg-[#5ef7b745] text-[#244d3f] rounded-full font-semibold'>{tag}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <p className={`rounded-full px-4 py-1 ${status === 'active' ? 'bg-[#244d3f] text-white' :
                status === 'overdue' ? 'bg-[#ef4444] text-white' :
                    'bg-[#efad44] text-white'
                }`}>
                {status}
            </p>

        </div>
    );
};

export default Card;