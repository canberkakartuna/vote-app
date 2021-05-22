import { render, fireEvent, getByTestId } from '@testing-library/react';
import NewLinkPage from './pages/NewLinkPage';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const {getAllByTestId, queryByPlaceholderText} = render(
    <Router>
      <NewLinkPage />
    </Router>
  );

  expect(getByTestId('add-link')).toBeTruthy();
  expect(queryByPlaceholderText('e.g. Alphabet')).toBeTruthy();
  expect(queryByPlaceholderText('e.g. http://abc.xyz')).toBeTruthy();

})

describe("Input Value", () => {
  it("updates on change", () => {
    const {queryByPlaceholderText} = render(
      <Router>
        <NewLinkPage />
      </Router>
    );

    const linkNameInput = queryByPlaceholderText('e.g. Alphabet');

    fireEvent.change(linkNameInput, {
      target: {value: 'test'}
    });

    expect(linkNameInput.value).toBe('test');
  })
})