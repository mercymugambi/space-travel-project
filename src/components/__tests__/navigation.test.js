import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../navigation';
import '@testing-library/jest-dom/extend-expect';

describe('Application interactions', () => {
  it('should render the header element', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
  it('should render the logo', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const logoElement = screen.getByAltText('Space travel hub logo');
    expect(logoElement).toBeInTheDocument();
  });
  it('should render the rocket link', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const rocketLinkElement = screen.getByRole('link', { name: /rockets/i });
    expect(rocketLinkElement).toBeInTheDocument();
  });
  it('should render the missions link', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const missionsLinkElement = screen.getByRole('link', { name: /missions/i });
    expect(missionsLinkElement).toBeInTheDocument();
  });
  it('should render the profile link', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const profileLinkElement = screen.getByRole('link', { name: /my profile/i });
    expect(profileLinkElement).toBeInTheDocument();
  });
  it('should match the snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
