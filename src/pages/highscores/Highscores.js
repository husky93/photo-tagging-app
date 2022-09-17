import Header from '../../components/Header';
import LevelSwitch from './components/LevelSwitch';
import ScoreList from './components/ScoreList';
import { useImageLoader } from '../../hooks/hooks';
import { useEffect, useState } from 'react';

const Highscores = () => {
  const images = useImageLoader([
    'level-one-sm.jpg',
    'level-two-sm.jpg',
    'level-three-sm.jpg',
  ]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      { name: 'test', time: '0:54' },
      { name: 'test', time: '0:02' },
      { name: 'test', time: '3:02' },
    ]);
  }, []);

  const handleLevelSwitch = () => {
    console.log('Fetch new data from backend');
  };
  return (
    <main>
      <Header />
      <LevelSwitch />
      <ScoreList data={data} />
    </main>
  );
};

export default Highscores;
