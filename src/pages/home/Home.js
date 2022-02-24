// components
import Landing from './Landing';
import Amenities from './Amenities';
import Reviews from './Reviews';

// styles
import './Home.scss';

export default function Home() {
  return (
    <div>
      <Landing />
      <Amenities />
      <Reviews />
    </div>
  )
}
