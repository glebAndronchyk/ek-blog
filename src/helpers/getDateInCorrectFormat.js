import { format } from 'date-fns';

const getDateInCorrectFormat = date => {
  if (!date) {
    return date === null ? '----' : null;
  }

  return format(new Date(date), 'yyyy/MM/dd');
};

export default getDateInCorrectFormat;
