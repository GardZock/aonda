import { useEffect, useState } from "react";
import Loading from "./loading";
import Home from "./src/pages/home";
import "./styles/global.css";

import * as SplashScreen from "expo-splash-screen";
import { Shrikhand_400Regular, useFonts } from "@expo-google-fonts/shrikhand";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [loaded, error] = useFonts({
    Shrikhand_400Regular,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <>{isLoading ? <Loading /> : <Home />}</>;
}
