# React Native Challenge Application

This project is a challenge application for CreateApe and the app is called CreateApeApp.

## Setup environments

### `yarn setup`

### Starting project

After the environment setup start the application with those scripts:

### iOS

### `yarn ios`

### Android

### `yarn android`

Runs the app in the development mode.

### Test cases

- Successful login:
  - hello@gmail.com
  - 12345678
- Incorrect password:
  - hello@gmail.com
  - 123456789
- Email not registered:
  - hello@email.com
  - 12345678

### Coding Manifesto

- We will use functional components.
- It's preferred to use vscode IDE.
- We will keep the `console.log` statements free of warnings/errors as much as possible.
- We will use `kebap-case` for file names and folder names.
- Folder names always should be singular.
- We will name component files as `MyButton.tsx` as the main component that's exported from the file would be `export const MyButton = () => { ...}`. This aids in searchability of components.
- We will use non-relative imports (i.e. instead of `import { Something } from '../../../shared/Example.ts'` -> `import { Something} from 'src/shared/Example.ts'`). Auto import in your IDE should out-of-the-box setup to import files like this.
- We will use `named` exports instead of `export default`. (this aids in re-factoring and renaming things later-on)

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive
