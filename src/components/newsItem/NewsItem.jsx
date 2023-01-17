import { Link } from 'react-router-dom';

import getOnlyDate from '../../helpers/getOnlyDate';

import FeedItemPlug from '../../assets/images/FeedItemPlug.png';

const NewsItem = props => {
  const { feedData, to } = props;
  const { createdAt, title, body } = feedData;

  return (
    <li className="list-none duration-300 hover:scale-[1.01] hover:shadow-lg md:rounded-3xl">
      <Link
        className="flex flex-row px-6 items-center justify-between border-2 md:rounded-3xl lg:p-4"
        to={to}
      >
        <div className="flex flex-col pl-1.5 py-4 max-w-[610px] 2xl:max-w-full">
          <span className="font-[400] text-gray-500 uppercase text-xs mb-7 2xl:text-base">
            {getOnlyDate(createdAt)}
          </span>
          <h3 className="font-[600] text-black text-2xl mb-2.5 2xl:text-3xl">
            {title}
          </h3>
          <p className="text-lg text-gray-600 2xl:text-lg">{body}</p>
        </div>
        <img
          className="hidden lg:block lg:pl-1"
          src={FeedItemPlug}
          alt="item"
        />
      </Link>
    </li>
  );
};

export default NewsItem;
