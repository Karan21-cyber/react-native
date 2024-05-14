import HomeScreen from "@/screen/home";
import OnBoardingScreen from "@/screen/onBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/screen/welcome";
import { LoginScreen } from "@/screen/login/login-screen";
import { SignUpScreen } from "@/screen/signup/sign-up-screen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Activity">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true, autoHideHomeIndicator: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, autoHideHomeIndicator: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false, autoHideHomeIndicator: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
