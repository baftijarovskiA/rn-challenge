import React, { ReactElement } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useMessageSource } from '@app/i18n/useMessageSource'
import { colors, fontSize } from '@app/shared/theme'

export const LogoutButton = ({ onPress }: { onPress: () => void }): ReactElement => {
  const { getMessage } = useMessageSource()

  return (
    <Text style={S.button} onPress={onPress}>
      {getMessage('logout')}
    </Text>
  )
}

const S = StyleSheet.create({
  button: {
    fontSize: fontSize.M,
    color: colors.white
  }
})
