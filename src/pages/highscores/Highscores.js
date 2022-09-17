import Header from '../../components/Header';
import LevelSwitch from './components/LevelSwitch';
import ScoreList from './components/ScoreList';
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

const Highscores = ({ firebaseApp, fetchData }) => {
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
    console.log(e.target.dataset.id);
    setLevel(e.target.dataset.id);
    console.log('Fetch new data from backend');
  };

  return (
    <main>
      <Header />
      <LevelSwitch handleLevelSwitch={handleLevelSwitch} />
      <ScoreList data={data} />
    </main>
  );
};

export default Highscores;
