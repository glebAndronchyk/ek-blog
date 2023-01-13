import FeedItemPlug from '../../assets/images/FeedItemPlug.png'

const FeedItem = () => {
  return (
    <div className='flex flex-row px-6 items-center justify-between border-2 md:w-4/6 md:rounded-3xl lg:p-4'>
      <div className='flex flex-col pl-1.5 py-4 max-w-[610px] 2xl:max-w-full'>
        <span className='font-[400] text-gray-500 uppercase text-xs mb-7 2xl:text-base'>Creation Data</span>
        <h3 className='font-[600] text-black text-2xl mb-2.5 2xl:text-3xl'>10 Hilarious Cartoons That Depict Real-Life Problems</h3>
        <p className='text-lg text-gray-600 2xl:text-lg'>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks...</p>
      </div>
      <img className='hidden lg:block lg:pl-1' src={FeedItemPlug} alt="item"/>
    </div>
  );
}

export default FeedItem;
