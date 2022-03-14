import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
export default function App() {
  const kvadratuMasyvas = [];
  const opacityValues = [];
  const animations = [];

  for (let i = 0; i < 500; i++) {
    // kuriam skaicius
    kvadratuMasyvas.push(i);
    // kuriam animuotas vertes
    opacityValues.push(new Animated.Value(0));
    //kuriam pacias animacijas, kurios keis tas vertes per laika
    animations.push(
      Animated.timing(opacityValues[i], { toValue: 1, duration: 100 })
    );
  }

  // kai puslapis pirma kart surenderinamas paleidziam animacijas
  useEffect(() => {
    Animated.stagger(5, animations).start()
  }, []);

  // animated.view kaip opacity nurodom issaugota reiksme
  return (
    <View style={styles.container}>
      {kvadratuMasyvas.map((skaicius, index) => {
        return (
          <Animated.View
            key={index}
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#F4743B",
              marginLeft: 4,
              marginTop: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              opacity: opacityValues[index],
            }}
          >
          </Animated.View>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
