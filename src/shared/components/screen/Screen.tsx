import React, { ReactElement, ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { Header } from '../header/Header'

interface Props {
  children: ReactNode
  onBack?: () => void
  action?: ReactElement
  refreshControl?: ReactElement
  noPadding?: boolean
}

export const Screen = ({ children, onBack, action, refreshControl, noPadding }: Props): ReactElement => {
  return (
    <>
      <Header onBack={onBack} action={action} />
      <ScrollView
        contentContainerStyle={{ flex: 1, padding: noPadding ? 0 : 20, position: 'relative' }}
        refreshControl={refreshControl}
      >
        {children}
      </ScrollView>
    </>
  )
}
