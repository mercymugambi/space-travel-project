import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rockets/RocketsSlice';
import styles from '../styles/rockets.module.css';

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
      {
        rockets.map((rockets) => (
          (
            <div key={rockets.id} className={styles.card}>
              <div>
                <img src={rockets.images[0]} alt={rockets.rocketName} className={styles.img} />
              </div>
              <div className={styles.content}>
                <h2 className={styles.name}>{rockets.rocketName}</h2>
                <p className={styles.description}>{rockets.description}</p>
                <button type="button" className={styles.btn}>Reserve Rocket</button>
              </div>
            </div>
          )
        ))
      }
    </div>
  );
};

export default Rockets;
