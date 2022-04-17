import { ROUTES } from '@app/navigation'
import { navigate } from 'react-navigation-helpers'
import React, { ReactElement, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useMessageSource } from '@app/i18n/useMessageSource'
import { Button } from '@app/shared/components/buttons/Button'
import { colors, fontSize } from '@app/shared/theme'

export const WelcomeScreen = (): ReactElement => {
  const { getMessage } = useMessageSource()

  const [loginState, setLoginState] = useState<boolean>(false)

  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('@app/assets/welcome-bg.jpeg')} resizeMode='cover' style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 13, 22, 0.5)' }}>
            <View style={S.AbsoluteView}>
              {loginState ? (
                <>
                  <Text style={S.Title}>{getMessage('gainAccessMessage')}</Text>
                  <Button
                    label={getMessage('applyNow')}
                    onPress={() => navigate(ROUTES.RegisterScreen.name)}
                    style={{ marginBottom: 20 }}
                  />
                  <Button
                    label={getMessage('login')}
                    onPress={() => navigate(ROUTES.LoginScreen.name)}
                    variant='outlined'
                  />
                </>
              ) : (
                <>
                  <Text style={S.Title}>{getMessage('welcome')}</Text>
                  <Text style={S.Description}>{getMessage('welcomeDescription')}</Text>
                  <Button label={getMessage('getStarted')} onPress={() => setLoginState(true)} />
                </>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

const S = StyleSheet.create({
  AbsoluteView: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20
  },
  Title: {
    color: colors.white,
    fontSize: fontSize.XL,
    fontWeight: 'bold',
    marginBottom: 20
  },
  Description: {
    color: colors.white,
    fontSize: fontSize.M,
    marginBottom: 20,
    width: '70%'
  }
})
