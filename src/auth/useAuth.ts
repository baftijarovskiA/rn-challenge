import React, { useContext, useEffect, useState } from 'react'
import { appstorage, _AUTH } from '@app/shared/storage/storage'

interface AuthContextInterface {
  authenticated: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = React.createContext<AuthContextInterface>({
  authenticated: false,
  login: () => {},
  logout: () => {}
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export function useProvideAuth(): AuthContextInterface {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  const login = async () => {
    try {
      appstorage.set(_AUTH, true)
      setAuthenticated(true)
    } catch (error) {
      Promise.reject(error)
    }
  }

  const logout = () => {
    try {
      appstorage.set(_AUTH, false)
      setAuthenticated(false)
    } catch (error) {
      Promise.reject(error)
    }
  }

  useEffect(() => {
    try {
      const isAuthenticated = appstorage.getBoolean(_AUTH)
      setAuthenticated(isAuthenticated)
    } catch (err) {
      setAuthenticated(false)
    }
  }, [])

  return {
    authenticated,
    login,
    logout
  }
}
