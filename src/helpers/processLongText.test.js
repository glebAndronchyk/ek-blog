import processLongText from 'helpers/processLongText';

describe('processLongText', () => {
  it('long text(220+) on wide screens must have length 223', () => {
    const testString = processLongText(
      'Irure consequat adipisicing aute consequat proident amet eiusmod sunt minim. Nostrud amet quis consectetur ad et ullamco. Commodo qui officia minim cillum cupidatat. Culpa laborum cupidatat officia aliquip anim duis officia dolore esse. Cupidatat pariatur mollit ut excepteur cillum. Et ex labore occaecat labore nostrud ea ad nulla ad voluptate consequat sit incididunt aute.',
      2001,
    );
    expect(testString).toHaveLength(223);
  });

  it('long text(130+) on medium screens must have length 133', () => {
    const testString = processLongText(
      'Irure consequat adipisicing aute consequat proident amet eiusmod sunt minim. Nostrud amet quis consectetur ad et ullamco. Commodo qui officia minim cillum cupidatat. Culpa laborum cupidatat officia aliquip anim duis officia dolore esse. Cupidatat pariatur mollit ut excepteur cillum. Et ex labore occaecat labore nostrud ea ad nulla ad voluptate consequat sit incididunt aute.',
      1999,
    );
    expect(testString).toHaveLength(133);
  });

  it('small text(220-) on wide screens must have its own length', () => {
    const testTextLowerThan220 =
      'non cillum cillum tempor mollit aliqua proident do elit in labore incididunt est reprehenderit sunt proident velit in fugiat esse';
    const testString = processLongText(testTextLowerThan220, 2001);
    expect(testString).toHaveLength(testTextLowerThan220.length);
  });

  it('small text(130-) on medium screens must have its own length', () => {
    const testTextLowerThan220 =
      'non cillum cillum tempor mollit aliqua proident do elit in labore incididunt est reprehenderit sunt proident velit in fugiat esse';
    const testString = processLongText(testTextLowerThan220, 1999);
    expect(testString).toHaveLength(testTextLowerThan220.length);
  });
});
