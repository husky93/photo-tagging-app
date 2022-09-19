import Header from '../../components/Header';
import LevelSwitch from './components/LevelSwitch';
import ScoreList from './components/ScoreList';
import Wrapper from '../../components/Wrapper';
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

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
      <Wrapper mauto direction="column">
        <LevelSwitch handleLevelSwitch={handleLevelSwitch} active={level} />
        <ScoreList data={data} />
      </Wrapper>
    </main>
  );
};

export default Highscores;
