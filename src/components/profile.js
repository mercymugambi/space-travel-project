import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="profileContainer">
      <div className="missionsProfile">
        <h2>My Missions</h2>
        <div className="missionsContainer">
          {
            reservedMissions.map((reservedMission) => (
              <div key={reservedMission.mission_id} className="missions">{reservedMission.mission_name}</div>
            ))
          }
        </div>
      </div>
      <div className="rocketsProfile">
        <h2>My Rockets</h2>
        <div className="rocketsContainer">
          {
            reservedRockets.map((reservedRocket) => (
              <div key={reservedRocket.id} className="rockets">{reservedRocket.rocketName}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
