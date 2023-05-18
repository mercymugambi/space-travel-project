import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profileContainer">
      <div className="missionsProfile">
        <h2>My Missions</h2>
        <div className="missionsContainer">
          <div className="mission">Mission 1</div>
          <div className="mission">Mission 2</div>
          <div className="mission">Mission 3</div>
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
