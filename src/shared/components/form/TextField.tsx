import { FormikErrors, FormikTouched } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { ReactElement } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { colors, fontSize } from '@app/shared/theme'
import ErrorMessage from './ErrorMessage'

interface TextFieldProps {
  label: string
  icon?: string
  secureTextEntry?: boolean
  value?: string | undefined
  name: string
  onChange: (text: string) => void
  errors: FormikErrors<unknown>
  touched: FormikTouched<unknown>
  height?: number
  alignItems?: string
  onIconPress?: () => void
  iconColor?: string
  customError?: string
}

export const TextField = ({
  label,
  icon,
  value,
  onChange,
  name,
  errors,
  touched,
  height,
  alignItems,
  placeholder,
  onIconPress,
  iconColor,
  customError,
  ...props
}: TextFieldProps & TextInputProps): ReactElement => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={S.label}>{label}</Text>
      <View style={S.fieldContainer}>
        <TextInput
          {...props}
          placeholder={placeholder}
          style={S.input}
          value={value}
          onChangeText={onChange}
          placeholderTextColor={colors.white_30}
        />
        {icon && (
          <Icon name={icon} size={24} color={iconColor ?? colors.white} style={S.inputIcon} onPress={onIconPress} />
        )}
      </View>
      {customError && <ErrorMessage error={customError} visible />}
      {errors && touched && (
        // @ts-ignore
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </View>
  )
}

const S = StyleSheet.create({
  input: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 0,
    color: colors.white,
    fontSize: fontSize.M
  },
  label: {
    color: colors.white,
    fontSize: fontSize.L,
    marginVertical: 10
  },
  fieldContainer: {
    marginBottom: 5,
    position: 'relative'
  },
  inputIcon: {
    position: 'absolute',
    right: 10
  }
})
