import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rockets/RocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsData());
    }
  }, [dispatch, rockets]);

  return (
    <>
      <h1>Rockets</h1>
    </>
  );
};

export default Rockets;
