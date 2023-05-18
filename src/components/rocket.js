import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/rockets.module.css';
import { reserveRocket, cancelReserve } from '../redux/rockets/RocketsSlice';

const Rocket = ({
  id, rocketName, image, description, reservation,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.card} id={id}>
      <div>
        <img src={image} alt={rocketName} className={styles.img} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>{rocketName}</h2>
        <p className={styles.description}>{description}</p>
        {reservation ? (
          <button type="button" className={styles.btnReserved} onClick={() => dispatch(cancelReserve(id))}>
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className={styles.btn}
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reservation: PropTypes.bool,
};

Rocket.defaultProps = {
  reservation: false,
};

export default Rocket;
