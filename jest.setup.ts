
jest.mock('react-native-dev-menu', () => ({}));

let mockActualReact;

jest.mock('react', () => {
  if (!mockActualReact) {
    mockActualReact = jest.requireActual('react');
  }
  return mockActualReact;
});
