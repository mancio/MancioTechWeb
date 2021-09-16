import { render, screen } from '@testing-library/react';
import MainPage from "./mainpage/MainPage";
import { BrowserRouter as Router} from 'react-router-dom';

test('Get main page Title', () => {
  render(
      <Router>
        <MainPage/>
      </Router>
  );
  const title = screen.getByText('MANCIOTECH.FUN');
  expect(title).toBeInTheDocument();
});
