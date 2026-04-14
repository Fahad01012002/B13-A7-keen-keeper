
import CardUi from '@/component/ui/CardUi';
import * as Icons from 'lucide-react';

export default function Home() {

  

  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className='text-center'>
        <div className='mb-5'>
          <h2 className='text-[48px] font-bold'>Friends to keep close in your life</h2>
          <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
        </div>
        <div className='flex justify-center items-center mb-10'>
          <button className='flex btn bg-[#244d3f] text-white'><Icons.Plus />Add a Friend</button>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-5 mb-10'>
          <div className='flex flex-col justify-center items-center p-8 shadow-lg rounded-lg'>
            <h2 className='text-[32px] font-semibold'>20</h2>
            <p className='text-[18px]'>Total Friends</p>
          </div>
          <div className='flex flex-col justify-center items-center p-8 shadow-lg rounded-lg'>
            <h2 className='text-[32px] font-semibold'>3</h2>
            <p className='text-[18px]'>On Track</p>
          </div>
          <div className='flex flex-col justify-center items-center p-8 shadow-lg rounded-lg'>
            <h2 className='text-[32px] font-semibold'>6</h2>
            <p className='text-[18px]'>Need Attention</p>
          </div>
          <div className='flex flex-col justify-center items-center p-8 shadow-lg rounded-lg'>
            <h2 className='text-[32px] font-semibold'>12</h2>
            <p className='text-[18px]'>Interection in This Month</p>
          </div>
      </div>

      <div className='divider mb-10'></div>

      <div>
        <h2 className='text-[24px] font-semibold'>Your Friends</h2>
        <CardUi />
      </div>

    </div>
  );
}
