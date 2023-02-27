import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';

describe('getDateInCorrectFormat', () => {
  it('returns date in correct format when passed a valid date string', () => {
    const inputDate = '2022-05-15T12:34:56.000Z';
    const expectedOutput = '2022.05.15';
    const testDate = getDateInCorrectFormat(inputDate);
    expect(testDate).toEqual(expectedOutput);
  });

  it('returns null when passed null', () => {
    expect(getDateInCorrectFormat(null)).toBeNull();
  });

  it('returns null when passed undefined', () => {
    expect(getDateInCorrectFormat(undefined)).toBeNull();
  });
});
