import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [perfil, setPerfil] = useState("");
  const [resultados, setResultados] = useState([]);

  const classificarSolo = () => {
    let classe = "";

    if (perfil.toLowerCase().includes("argila")) {
      classe = "Latossolo";
    } else if (perfil.toLowerCase().includes("areia")) {
      classe = "Neossolo Quartzarênico";
    } else if (perfil.toLowerCase().includes("húmus")) {
      classe = "Organossolo";
    } else {
      classe = "Não identificado (precisa de mais dados)";
    }

    setResultados([...resultados, { perfil, classe }]);
    setPerfil("");
  };

  return (
    <ScrollView style={{ margin: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        🌱 SolosGeek - Classificação de Solos
      </Text>

      <TextInput
        placeholder="Descreva o solo (ex: argila, areia, húmus...)"
        value={perfil}
        onChangeText={setPerfil}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <Button title="Classificar Solo" onPress={classificarSolo} />

      <View style={{ marginTop: 20 }}>
        {resultados.map((item, index) => (
          <View
            key={index}
            style={{
              marginBottom: 10,
              padding: 10,
              backgroundColor: "#f0f0f0",
              borderRadius: 5,
            }}
          >
            <Text>📌 Solo descrito: {item.perfil}</Text>
            <Text>📖 Classe SIBCS: {item.classe}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
