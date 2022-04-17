import Icon from 'react-native-vector-icons/Ionicons'
import React, { ReactElement } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '@app/shared/theme'

interface Props {
  onBack?: () => void
  action?: ReactElement
  logo?: boolean
}

export const Header = ({ onBack, logo, action }: Props): ReactElement => {
  return (
    <SafeAreaView>
      <View style={S.header}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            {onBack && <Icon name='chevron-back' size={32} color={colors.white} onPress={onBack} />}
          </View>
          {logo && (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>Logo</Text>
            </View>
          )}
          <View style={{ flex: 1, alignItems: 'flex-end' }}>{action}</View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const S = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: colors.transparent,
    paddingHorizontal: 16
  }
})
