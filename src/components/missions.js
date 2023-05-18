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
      <table className="table-container">
        <thead>
          <tr className="table-head">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>NOT A MEMBER</td>
              <td>
                <button type="button">
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
