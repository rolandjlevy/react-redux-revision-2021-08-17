import React from 'react';
import Users from './components/Users';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/dom';
import {
  render,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { storeNoDevToolsExt } from './store';
import axios from 'axios';

describe('Run tests', () => {

    it('should click the get users button and render users on screen', async () => {
      const data = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
          },
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
          },
        }
      ]
    const mockAxios = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    render(
      <Provider store={storeNoDevToolsExt}>
        <Users />
      </Provider>
    )

    userEvent.click(
      screen.getByRole('button', { name: 'Get users' }),
    );

    await waitFor(() => expect(mockAxios).toHaveBeenCalledTimes(1));
    
    // expect(mockAxios).toHaveBeenCalledWith(
    //   'https://jsonplaceholder.typicode.com/users',
    // );

    //     Use get all by role as multiple name headings will be rendered. The mock returns two results, hence we can assert that getAllByRole will have a length of 2.

    //   expect(screen.getAllByRole('heading', { name: 'name' }).length).toBe(2);

    //   // Checks that the UserId values have rendered
    //   screen.getByRole('heading', { name: 'Leanne Graham' });
    //   screen.getByRole('heading', { name: 'Ervin Howell' });

    //   // Checks that the title values have rendered
    //   screen.getByRole('heading', {
    //     name: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //   });
    //   screen.getByRole('heading', { name: 'et ea vero quia laudantium autem' });

    //   screen.logTestingPlaygroundURL();
    // });

  // https://jdlt.co.uk/blog/testing-react-components-with-jest-and-react-testing-library/
  // https://www.youtube.com/watch?v=TBZy-Rc-xX0

  // test('renders learn react link', () => {
  //   const { getByText } = render(<App />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  // test('Gets Users', () => {

    // render(<Users />);
    // const spy = jest.spyOn(Users, 'fetchUsersFromApi');
    // const isPlaying = video.play();

    // expect(spy).toHaveBeenCalled();
    // expect(isPlaying).toBe(true);

    // spy.mockReset();
    // spy.mockRestore();

  });

});