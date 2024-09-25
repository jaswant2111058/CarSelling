import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name as keyof RootStackParamList}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
