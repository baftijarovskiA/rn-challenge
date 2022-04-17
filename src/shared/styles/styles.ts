import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../theme'

export const GLOBAL_STYLES = StyleSheet.create({
  ScreenText: {
    fontSize: fontSize.XL,
    color: colors.white
  },
  FlexCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})
