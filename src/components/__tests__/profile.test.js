import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../profile';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile component', () => {
  it('should render the profile component', () => {
    useSelector.mockReturnValue([
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
    ]);
    render(<Profile />);
    const profileContainer = screen.getByTestId('profile-container');
    expect(profileContainer).toBeInTheDocument();
  });

  it('should render the reserved missions', () => {
    const mockReservedMissions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
    ];
    useSelector.mockReturnValue(mockReservedMissions);

    render(<Profile />);
    const missionElements = screen.getAllByTestId('mission');
    expect(missionElements.length).toBe(2);
    expect(missionElements[0]).toHaveTextContent('Mission 1');
    expect(missionElements[1]).toHaveTextContent('Mission 2');
  });

  it('should render the reserved rockets', () => {
    const mockReservedRockets = [
      { id: 1, rocketName: 'Rocket 1', reserved: true },
      { id: 2, rocketName: 'Rocket 2', reserved: true },
    ];
    useSelector.mockReturnValue(mockReservedRockets);

    render(<Profile />);
    const rocketElements = screen.getAllByTestId('rocket');
    expect(rocketElements.length).toBe(2);
    expect(rocketElements[0]).toHaveTextContent('Rocket 1');
    expect(rocketElements[1]).toHaveTextContent('Rocket 2');
  });

  it('should match the snapshot', () => {
    useSelector.mockReturnValue([]);

    const { container } = render(<Profile />);
    expect(container).toMatchSnapshot();
  });
});
