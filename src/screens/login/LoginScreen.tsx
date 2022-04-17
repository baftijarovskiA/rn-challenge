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
import { AlertDialog } from '@app/shared/components/modal-dialog/AlertDialog'
import { Screen } from '@app/shared/components/screen/Screen'
import { GLOBAL_STYLES } from '@app/shared/styles/styles'
import { colors } from '@app/shared/theme'

interface LoginForm {
  email: string
  password: string
}

export const LoginScreen = (): ReactElement => {
  const { getMessage } = useMessageSource()
  const { login } = useAuth()

  const [loading, setLoading] = useState<boolean>(false)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [passwordIcon, setPasswordIcon] = useState<string>('eye-off-outline')
  const [loginAlert, setLoginAlert] = useState<boolean>(false)
  const [email, setEmail] = useState<string>()
  const [emailIcon, setEmailIcon] = useState<string | undefined>()

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

  const handleLoginLocal = (values: LoginForm) => {
    // Temporary

    setLoading(true)
    setEmailIcon(undefined)

    setTimeout(() => {
      if (values.email !== 'hello@gmail.com') {
        setEmailIcon('alert-circle-outline')
        setLoading(false)
        return
      }
      if (values.email === 'hello@gmail.com' && values.password === '12345678') {
        setLoading(false)
        login()
        return
      }
      setLoading(false)
      setLoginAlert(true)
      setEmail(values.email)
    }, 1500)
  }

  const getAlertMessage = (email: string): string => {
    return `${getMessage('incorrectPasswordMessage').replace(':email:', email)}`
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(getMessage('invalidEmail')).required(getMessage('emailRequired')),
    password: Yup.string().min(8, getMessage('minCharPassword')).required(getMessage('passwordRequired'))
  })

  return (
    <>
      <Screen onBack={() => goBack()}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
          <Text style={GLOBAL_STYLES.ScreenText}>{getMessage('login')}</Text>
        </View>
        <Formik<LoginForm>
          initialValues={{
            email: '',
            password: ''
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
                    icon={emailIcon}
                    iconColor={colors.danger}
                    customError={emailIcon && getMessage('emailNotRegistered')}
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
                </View>
              </>
            )
          }}
        </Formik>
        <View style={S.ButtonContainer}>
          <Button
            label={getMessage('signIn')}
            onPress={() => submit()}
            fullWidth
            loading={loading}
            disabled={loading}
            variant='filled'
          />
          <View style={{ ...GLOBAL_STYLES.FlexCenter, marginTop: 20 }}>
            <Text style={{ color: colors.white }}>
              {getMessage('notAMember')}&nbsp;
              <Text onPress={() => navigate(ROUTES.RegisterScreen.name)} style={{ fontWeight: 'bold' }}>
                {getMessage('joinTheClub')}
              </Text>
            </Text>
          </View>
        </View>
      </Screen>
      <AlertDialog
        show={loginAlert}
        title={getMessage('incorrectPassword')}
        message={getAlertMessage(email ?? '')}
        actionPress={() => setLoginAlert(false)}
        actionTitle={getMessage('tryAgain')}
      />
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
