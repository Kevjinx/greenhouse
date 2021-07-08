import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import { ThemeProvider, useTheme } from '../../context/ThemeContext'
import { useEffect } from 'react';

import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
    const { themeName } = useTheme()

    // useEffect(() => {
    //     console.log(themeName)
    // })

  return (
    <section>
      <img className='greenhouse-img' src={themeName === 'day' ? dayImage : nightImage} alt='greenhouse' />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
