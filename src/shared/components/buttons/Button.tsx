import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'
import { colors, fontSize } from '@app/shared/theme'

interface Props {
  label: string
  onPress: () => void
  disabled?: boolean
  fullWidth?: boolean
  variant?: 'filled' | 'outlined'
  loading?: boolean
  style?: any
}

export const Button = ({ label, onPress, fullWidth, disabled, loading, variant = 'filled', style }: Props) => {
  const buttonStyles = {
    ...S.button,
    ...(fullWidth && { width: '100%' }),
    ...((disabled || loading) && { opacity: 0.5 }),
    ...(variant === 'filled' && { backgroundColor: colors.primary, borderColor: colors.primary }),
    ...(variant === 'outlined' && { backgroundColor: colors.transparent, borderColor: colors.white })
  }

  return (
    <Pressable style={{ ...buttonStyles, ...style }} onPress={!disabled ? onPress : () => {}}>
      {loading ? <ActivityIndicator size='small' color={colors.white} /> : <Text style={S.text}>{label}</Text>}
    </Pressable>
  )
}

const S = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 19,
    paddingHorizontal: 36,
    borderRadius: 6,
    elevation: 3,
    borderWidth: 2
  },
  text: {
    fontSize: fontSize.M,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.white
  }
})
