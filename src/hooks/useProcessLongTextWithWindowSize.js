import useWindowSize from 'hooks/useWindowSize';
import processLongText from 'helpers/processLongText';

const useProcessLongTextWithWindowSize = text => {
  const { width } = useWindowSize();

  return {
    processedText: processLongText(text, width),
  };
};

export default useProcessLongTextWithWindowSize;
