import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NameForm from './Components/NameForm';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('debería encontrar el componente NameForm en App',()=>{
  const search = shallow(<App />);
  expect(search.find(NameFormn).length).toBe(1);
});