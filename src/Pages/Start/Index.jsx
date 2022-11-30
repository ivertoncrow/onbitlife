import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../Components/Common/DefaultButton";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {

  const navigation = useNavigation();
  const handleNavAppExplanation = () => {
    navigation.navigate("AppExplanation");
  };

  return (
    <View style={styles.conteiner}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/icons/logo3.png")}
            style={styles.logo}
          />
          <LifeStatus></LifeStatus>
          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"} o
            melhor nível.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBotoom: 20,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 60,
  },
});
