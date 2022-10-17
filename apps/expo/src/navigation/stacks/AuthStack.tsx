import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import LoginScreen from '../../screens/auth/Login'
import { defaultScreenOption } from '../option'
import ForgotPasswordScreen from '../../screens/auth/ForgotPassword'
import { AuthStackParam } from '../types'

const Stack = createStackNavigator<AuthStackParam>()

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={defaultScreenOption}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
