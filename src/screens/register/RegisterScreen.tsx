import { useAuth } from '@app/auth/useAuth'
import { ROUTES } from '@app/navigation'
import { Formik } from 'formik'
import { goBack, navigate } from 'react-navigation-helpers'
import * as Yup from 'yup'
import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useMessageSource } from '@app/i18n/useMessageSource'
import { Button } from '@app/shared/components/buttons/Button'
import { TextField } from '@app/shared/components/form/TextField'
import { Screen } from '@app/shared/components/screen/Screen'
import { GLOBAL_STYLES } from '@app/shared/styles/styles'
import { colors } from '@app/shared/theme'

interface RegisterForm {
  email: string
  password: string
  confirm: string
}

export const RegisterScreen = (): ReactElement => {
  const { getMessage } = useMessageSource()
  const { login } = useAuth()

  const [loading, setLoading] = useState<boolean>(false)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [passwordIcon, setPasswordIcon] = useState<string>('eye-off-outline')

  const handleIconChange = () => {
    if (passwordIcon === 'eye-off-outline') {
      setPasswordIcon('eye-outline')
      setPasswordVisible(true)
    } else {
      setPasswordIcon('eye-off-outline')
      setPasswordVisible(false)
    }
  }

  let submit: any = () => {}

  const handleLoginLocal = (values: RegisterForm) => {
    // Temporary
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      login()
    }, 1500)
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(getMessage('invalidEmail')).required(getMessage('emailRequired')),
    password: Yup.string().min(8, getMessage('minCharPassword')).required(getMessage('passwordRequired')),
    confirm: Yup.string().min(8, getMessage('minCharPassword')).required(getMessage('passwordRequired'))
  })

  return (
    <>
      <Screen onBack={() => goBack()}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <Text style={GLOBAL_STYLES.ScreenText}>{getMessage('register')}</Text>
        </View>
        <Formik<RegisterForm>
          initialValues={{
            email: '',
            password: '',
            confirm: ''
          }}
          onSubmit={handleLoginLocal}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
            submit = handleSubmit
            return (
              <>
                <View style={{ flex: 1 }}>
                  <TextField
                    label={getMessage('email')}
                    placeholder={getMessage('typeYourEmail')}
                    name='email'
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    errors={errors}
                    touched={touched}
                    keyboardType='email-address'
                    editable={!loading}
                  />
                  <TextField
                    label={getMessage('password')}
                    placeholder={getMessage('typeYourPassword')}
                    name='password'
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    errors={errors}
                    touched={touched}
                    secureTextEntry={!passwordVisible}
                    icon={passwordIcon}
                    onIconPress={handleIconChange}
                    editable={!loading}
                  />
                  <TextField
                    label={getMessage('confirmPassword')}
                    placeholder={getMessage('typeYourPassword')}
                    name='confirm'
                    value={values.confirm}
                    onChange={handleChange('confirm')}
                    onBlur={handleBlur('confirm')}
                    errors={errors}
                    touched={touched}
                    secureTextEntry={!passwordVisible}
                    icon={passwordIcon}
                    onIconPress={handleIconChange}
                    editable={!loading}
                  />
                </View>
              </>
            )
          }}
        </Formik>
        <View style={S.ButtonContainer}>
          <Button
            label={getMessage('register')}
            onPress={() => submit()}
            fullWidth
            disabled={loading}
            loading={loading}
          />
          <View style={{ ...GLOBAL_STYLES.FlexCenter, marginTop: 20 }}>
            <Text style={{ color: colors.white }}>
              {getMessage('alreadyHaveAccount')}&nbsp;
              <Text onPress={() => navigate(ROUTES.LoginScreen.name)} style={{ fontWeight: 'bold' }}>
                {getMessage('loginNow')}
              </Text>
            </Text>
          </View>
        </View>
      </Screen>
    </>
  )
}

const S = StyleSheet.create({
  ButtonContainer: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    left: 20,
    right: 20
  }
})
