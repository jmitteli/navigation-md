# MD Nav Demo
 
Exercise: Material Design and navigation (React Native, Expo, TypeScript).
 
A simple app with two screens (`HomeScreen` and `SecondScreen`) using stack navigation from
React Navigation. The default header is replaced with a custom application bar built with
React Native Paper's `Appbar`, set through `screenOptions` of `Stack.Navigator`.
 
The application bar uses conditional rendering (`? :`):
 
- **HomeScreen**: an `arrow-right` icon on the right navigates to `SecondScreen`
- **SecondScreen**: a back button on the left returns to `HomeScreen`
## Run
 
```bash
npm install
npx expo start
```
 