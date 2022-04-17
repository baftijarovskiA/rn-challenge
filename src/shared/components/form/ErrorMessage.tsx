import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors, fontSize } from '@app/shared/theme'

interface ErrorMessageProps {
  error: string
  visible: boolean
  color?: string
  style?: any
}

export default function ErrorMessage({ error, visible, color, style }: ErrorMessageProps) {
  if (!visible || !error) return null

  return <Text style={{ ...styles.error, ...{ color: color || colors.danger }, ...style }}>{error}</Text>
}

const styles = StyleSheet.create({
  error: { fontSize: fontSize.S }
})
