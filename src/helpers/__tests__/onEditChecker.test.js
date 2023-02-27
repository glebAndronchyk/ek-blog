import onEditChecker from 'helpers/onEditChecker';

describe('onEditChecker', () => {
  it('should return output if condition true', () => {
    const ifOutputReturnedInTruthy = onEditChecker({ condition: true, output: 'test' });
    expect(ifOutputReturnedInTruthy).toBe('test');
  });

  it('should return empty string if condition false', () => {
    const ifOutputReturnedInTruthy = onEditChecker({ condition: false, output: 'test' });
    expect(ifOutputReturnedInTruthy).toBe('');
  });
});
