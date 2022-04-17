import { Fragment } from 'react'
import { AdventureScreen } from '@app/screens/adventure/AdventureScreen'
import { HomeScreen } from '@app/screens/home/HomeScreen'
import { IncomeScreen } from '@app/screens/income/IncomeScreen'
import { LibraryScreen } from '@app/screens/library/LibraryScreen'
import { LoginScreen } from '@app/screens/login/LoginScreen'
import { RegisterScreen } from '@app/screens/register/RegisterScreen'
import { WelcomeScreen } from '@app/screens/welcome/WelcomeScreen'

export const ROUTES = {
  WelcomeScreen: {
    name: 'welcomeScreen',
    Component: WelcomeScreen,
    authentication: false,
    nested: {}
  },
  LoginScreen: {
    name: 'loginScreen',
    Component: LoginScreen,
    authentication: false,
    nested: {}
  },
  RegisterScreen: {
    name: 'registerScreen',
    Component: RegisterScreen,
    authentication: false,
    nested: {}
  },
  HomeTab: {
    name: 'homeTab',
    authentication: true,
    Component: Fragment,
    nested: {
      HomeScreen: {
        name: 'homeScreen',
        Component: HomeScreen
      }
    }
  },
  IncomeTab: {
    name: 'incomeTab',
    authentication: true,
    Component: Fragment,
    nested: {
      HomeScreen: {
        name: 'incomeScreen',
        Component: IncomeScreen
      }
    }
  },
  AdventureTab: {
    name: 'adventureTab',
    authentication: true,
    Component: Fragment,
    nested: {
      AdventureScreen: {
        name: 'adventureScreen',
        Component: AdventureScreen
      }
    }
  },
  LibraryTab: {
    name: 'libraryTab',
    authentication: true,
    Component: Fragment,
    nested: {
      LibraryScreen: {
        name: 'libraryScreen',
        Component: LibraryScreen
      }
    }
  }
}
