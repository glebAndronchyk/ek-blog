import { format } from 'date-fns';

const getDateInCorrectFormat = date => {
  if (date) {
    return format(new Date(date), 'yyyy.MM.dd');
  }
  return null;
};

export default getDateInCorrectFormat;
