import FeedItemPlug from '../../assets/images/FeedItemPlug.png'

const FeedItem = () => {
  return (
    <div className='flex flex-row w-4/6 justify-between p-6 rounded-3xl'>
      <div className='flex flex-col pl-1.5 py-4 max-w-[610px]'>
        <span className='font-graphik-400 text-gray-500 uppercase text-xs mb-7'>Creation Data</span>
        <h3 className='font-graphik font-semibold text-black text-2xl mb-2.5'>10 Hilarious Cartoons That Depict Real-Life Problems</h3>
        <p className='text-lg font-light text-gray-600'>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks...</p>
      </div>
      <img src={FeedItemPlug} alt="item-image"/>
    </div>
  );
}

export default FeedItem;
