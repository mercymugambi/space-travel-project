import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/MissionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      {missions.map((item) => (
        <h2 key={item.mission_id}>
          {item.description}
        </h2>
      ))}
    </div>
  );
};

export default Missions;
