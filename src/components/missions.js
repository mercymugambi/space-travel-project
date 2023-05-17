import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/MissionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch[getMissions()];
  }, []);

  return (
    <>
      <h1>Missions</h1>
    </>
  );
};

export default Missions;
