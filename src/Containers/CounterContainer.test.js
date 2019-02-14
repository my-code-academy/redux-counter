import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Counter from '../Components/Counter/Counter';
import CounterContainer from './CounterContainer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../App');

describe('container <CounterContainer />', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();

    // const store = storeFake({});
    const store = configureStore([])()

    wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );

    container = wrapper.find(CounterContainer);
    // console.log(wrapper);
    component = container.find(Counter);
  });

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'count',
      'onIncrement',
      'onDecrement',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['onIncrement', 'onDecrement'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });
});
