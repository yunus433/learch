import {createStackNavigator, createAppContainer} from 'react-navigation';

import Landing from './components/index/landing';

const MainNavigator = createStackNavigator({
  landing: {screen: Landing}
}, {
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0
  	},
  })
});

const App = createAppContainer(MainNavigator);

export default App;
