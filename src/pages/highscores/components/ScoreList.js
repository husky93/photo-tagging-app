import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScoreItem from '../components/ScoreItem';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import compareTimes from '../../../modules/compareTimes';
import { useState, useEffect } from 'react';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 64px 12px;
  @media (min-width: 1200px) {
    margin: 0;
    margin-top: 64px;
  }
`;

const ScoreListUi = styled(Wrapper)`
  margin: 24px 12px;
  @media (min-width: 1200px) {
    margin: 24px 0;
  }
`;

const ButtonRight = styled(Button)`
  margin-left: auto;
`;

const StyledWrapper = styled(Wrapper)`
  width: 100%;
`;

const ScoreList = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  const sortedData = data.sort(compareTimes);
  const maxIndex = sortedData.length - 1;

  useEffect(() => {
    const dataLength = sortedData.length;
    const endIndex =
      currentIndex + 8 > dataLength - 1 ? dataLength : currentIndex + 8;
    const slicedData = sortedData.slice(currentIndex, endIndex);

    setCurrentPageData(slicedData);
  }, [currentIndex, sortedData]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);

  const handleNextPage = () => {
    setCurrentIndex((prevState) => prevState + 8);
  };

  const handlePreviousPage = () => {
    setCurrentIndex((prevState) => prevState - 8);
  };

  return (
    <StyledWrapper direction="column" mauto>
      <List>
        {currentPageData.map((item, index) => (
          <ScoreItem
            number={currentIndex + index + 1}
            name={item.name}
            time={item.time}
            key={item.name + index}
          />
        ))}
      </List>
      <ScoreListUi direction="row" justify="space-between">
        {currentIndex !== 0 ? (
          <Button onClick={handlePreviousPage}>Previous Page</Button>
        ) : (
          ''
        )}
        {currentIndex + 8 <= maxIndex ? (
          <ButtonRight onClick={handleNextPage}>Next Page</ButtonRight>
        ) : (
          ''
        )}
      </ScoreListUi>
    </StyledWrapper>
  );
};

ScoreList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ScoreList;
