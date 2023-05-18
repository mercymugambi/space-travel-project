import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rockets/RocketsSlice';
import styles from '../styles/rockets.module.css';
import Rocket from './rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsData());
    }
  }, [dispatch, rockets]);

  return (
    <div className={styles.container}>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          rocketName={rocket.rocketName}
          image={rocket.images[0]}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default Rockets;
