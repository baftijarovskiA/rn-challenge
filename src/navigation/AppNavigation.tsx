import { useAuth } from '@app/auth/useAuth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { useMessageSource } from '@app/i18n/useMessageSource'
import { colors } from '@app/shared/theme'
import { ROUTES } from '.'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

export const AppNavigation = () => {
  const { getMessage } = useMessageSource()

  const { authenticated } = useAuth()

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: colors.secondary
    }
  }

  const routes = Object.values(ROUTES)
  const authenticatedRoutes = routes.filter((x) => x.authentication)
  const unAuthenticatedRoutes = routes.filter((x) => !x.authentication)

  return (
    <>
      {!authenticated ? (
        <Stack.Navigator>
          {unAuthenticatedRoutes.map(({ name, Component }) => (
            <Stack.Screen key={name} name={name} component={Component} options={screenOptions} />
          ))}
        </Stack.Navigator>
      ) : (
        <>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName: string = ''
                if (route.name === ROUTES.HomeTab.name) {
                  iconName = 'home-filled'
                } else if (route.name === ROUTES.IncomeTab.name) {
                  iconName = 'insights'
                } else if (route.name === ROUTES.AdventureTab.name) {
                  iconName = 'park'
                } else if (route.name === ROUTES.LibraryTab.name) {
                  iconName = 'stacked-bar-chart'
                }
                return <Icon name={iconName} size={size} color={color} />
              },
              headerShown: false,
              tabBarStyle: {
                backgroundColor: colors.black,
                borderTopWidth: 0
              },
              tabBarActiveTintColor: colors.primary,
              tabBarInactiveTintColor: colors.white_50
            })}
          >
            {authenticatedRoutes.map(({ name, nested }) => (
              <Tabs.Screen key={name} name={name} options={{ title: getMessage(name) }}>
                {() => (
                  <Stack.Navigator>
                    {Object.values(nested).map(({ name, Component }) => (
                      <Stack.Screen key={name} name={name} component={Component} options={screenOptions} />
                    ))}
                  </Stack.Navigator>
                )}
              </Tabs.Screen>
            ))}
          </Tabs.Navigator>
        </>
      )}
    </>
  )
}
