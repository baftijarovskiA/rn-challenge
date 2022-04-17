import { useAuth } from '@app/auth/useAuth'
import React, { ReactElement } from 'react'
import { Text } from 'react-native'
import { LogoutButton } from '@app/shared/components/buttons/LogoutButton'
import { Screen } from '@app/shared/components/screen/Screen'
import { GLOBAL_STYLES } from '@app/shared/styles/styles'

export const AdventureScreen = (): ReactElement => {
  const { logout } = useAuth()
  return (
    <>
      <Screen action={<LogoutButton onPress={() => logout()} />}>
        <Text style={GLOBAL_STYLES.ScreenText}>Adventure</Text>
      </Screen>
    </>
  )
}
