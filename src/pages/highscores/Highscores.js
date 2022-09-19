import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LevelSwitch from './components/LevelSwitch';
import ScoreList from './components/ScoreList';
import Wrapper from '../../components/Wrapper';

const StyledWrapper = styled(Wrapper)`
  margin-top: 36px;
  flex: 1;
`;

const Highscores = ({ firebaseApp }) => {
  const [data, setData] = useState([]);
  const [level, setLevel] = useState('1');
  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const fetchData = async () => {
      const levelRef = doc(db, 'scorelist', level);
      const levelSnapshot = await getDoc(levelRef);
      setData(levelSnapshot.data().users);
    };
    fetchData();
  }, [level]);

  const handleLevelSwitch = (e) => {
    setLevel(e.target.dataset.id);
  };

  return (
    <main>
      <Header />
      <StyledWrapper direction="column" align="center">
        <LevelSwitch handleLevelSwitch={handleLevelSwitch} active={level} />
        <ScoreList data={data} />
      </StyledWrapper>
      <Footer />
    </main>
  );
};

export default Highscores;
