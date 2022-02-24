// components
import Landing from './Landing';
import Amenities from './Amenities';
import Reviews from './Reviews';

// styles
import './Home.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id='home'>
      <Landing />
      <Amenities />
      <Reviews />
    </div>
  )
}
