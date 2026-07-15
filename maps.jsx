import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

// Datos de ejemplo para los lugares, en la app real estos datos vendrían de la API.
const lugares = [
  {
    id: "1",
    lat: -34.9011,
    lng: -56.1645,
    titulo: "Montevideo",
    estado: "Operativa",
  },
  {
    id: "2",
    lat: -34.878,
    lng: -56.0755,
    titulo: "Pocitos",
    estado: "Alerta",
  },
  {
    id: "3",
    lat: -34.309466,
    lng: -55.960309,
    titulo: "Casa Thiago",
    estado: "Fuera de servicio",
  },
  {
    id: "4",
    lat: -30.948706,
    lng: -57.520326,
    titulo: "Termas Arapey",
    estado: "Mantenimiento",
  },
];

//Mapeo de los colores por estado de la estación
const coloresEstado = {
  Operativa: "#00CC00",
  Alerta: "#FFCC00",
  "Fuera de servicio": "#CC0000",
  Mantenimiento: "#808080",
};

export default function MapsScreen() {
  const [estacionSeleccionada, setEstacionSeleccionada] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -32.5228,
          longitude: -55.7658,
          latitudeDelta: 7.0,
          longitudeDelta: 7.0,
        }}
      >
        {lugares.map((lugar) => (
          <Marker
            key={lugar.id}
            coordinate={{
              latitude: lugar.lat,
              longitude: lugar.lng,
            }}
            title={lugar.titulo}
            description={lugar.estado}
            anchor={{ x: 0.25, y: 0.25 }}
            onPress={() => setEstacionSeleccionada(lugar)}
          >
            <View
              style={[
                styles.marcador,
                {
                  backgroundColor: coloresEstado[lugar.estado] || "#000000",
                },
              ]}
            >
              <View style={styles.marcadorInterior} />
            </View>
          </Marker>
        ))}
      </MapView>

      {estacionSeleccionada && (
        <View style={styles.card}>
          <Text style={styles.titulo}>{estacionSeleccionada.titulo}</Text>

          <Text
            style={{
              color: coloresEstado[estacionSeleccionada.estado],
              fontWeight: "600",
            }}
          >
            {estacionSeleccionada.estado}
          </Text>

          <View style={{ height: 15 }} />

          <Text>Latencia: 12 ms</Text>
          <Text>Satélites: 18</Text>
          <Text>Disponibilidad: 99.8%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  marcador: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  marcadorInterior: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#fff",
    backgroundColor: "transparent",
  },

  card: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 25,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },
});
