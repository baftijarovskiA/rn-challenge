import { AuthContext, useProvideAuth } from '@app/auth/useAuth'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { isReadyRef, navigationRef } from 'react-navigation-helpers'
import React from 'react'
import { StatusBar } from 'react-native'
import { LocalizationComponent } from '@app/i18n/LocalizationComponent'
import { AppNavigation } from '@app/navigation/AppNavigation'

enableScreens()
StatusBar.setBarStyle('light-content')

const App = () => {
  const authValue = useProvideAuth()

  return (
    <LocalizationComponent>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true
        }}
      >
        <AuthContext.Provider value={authValue}>
          <AppNavigation />
        </AuthContext.Provider>
      </NavigationContainer>
    </LocalizationComponent>
  )
}

export default App
