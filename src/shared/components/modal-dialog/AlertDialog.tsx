import React, { ReactElement } from 'react'
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import { GLOBAL_STYLES } from '@app/shared/styles/styles'
import { colors, fontSize } from '@app/shared/theme'
import { Button } from '../buttons/Button'

interface Props {
  show: boolean
  title: string
  message: string
  actionTitle: string
  actionPress: () => void
}

export const AlertDialog = ({ show, title, message, actionPress, actionTitle }: Props): ReactElement => {
  return (
    <>
      <Modal transparent style={GLOBAL_STYLES.FlexCenter} visible={show}>
        <View style={{ ...GLOBAL_STYLES.FlexCenter, ...{ backgroundColor: colors.black_50 } }}>
          <View style={S.ModalContainer}>
            <Text style={S.AlertTitle}>{title}</Text>
            <Text style={S.AlertMessage}>{message}</Text>
            <View style={S.AlertButton}>
              <Button label={actionTitle} onPress={actionPress} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const S = StyleSheet.create({
  ModalContainer: {
    width: Dimensions.get('screen').width / 1.5,
    height: Dimensions.get('screen').height / 2.5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20
  },
  AlertButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 20,
    right: 20
  },
  AlertTitle: {
    textAlign: 'center',
    fontSize: fontSize.XL
  },
  AlertMessage: {
    textAlign: 'center',
    fontSize: fontSize.M,
    marginTop: 30
  }
})
