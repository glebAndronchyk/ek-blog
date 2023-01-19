import { format } from 'date-fns';

const getDateInCorrectFormat = date => {
  return format(new Date(date), 'yyyy/MM/dd');
};

export default getDateInCorrectFormat;
