import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TarjetaEstacionDetalle } from "../../components/tarjeta-estacion-detalle";
import { coloresEstado } from "../../constants/estaciones";
import {
  fetchDetallesEstacion,
  fetchObtenerEstaciones,
} from "../../services/estacionesApi";

function PuntoEstacion({ estado }) {
  const color = coloresEstado[estado] || "#808080";
  return (
    <View style={[styles.anilloMedio, { backgroundColor: `${color}55` }]}>
      <View style={[styles.puntoCentral, { backgroundColor: color }]} />
    </View>
  );
}

export default function MapsScreen() {
  const [estaciones, setEstaciones] = useState(null);
  const [detallesEstacionSelecionada, setDetallesEstacionSelecionada] =
    useState(null);
  const [cargando, setCargando] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["40%"], []);

  //cada 5 segundos, se actualizan las estaciones con su estado general
  useEffect(() => {
    const intervalo = setInterval(() => {
      fetchObtenerEstaciones().then(setEstaciones);
    }, 5000); // cada 5 segundos

    return () => clearInterval(intervalo); // limpieza al desmontar
  }, []);

  // abre o cierra el bottom sheet según haya (o no) una estación seleccionada
  useEffect(() => {
    if (cargando || detallesEstacionSelecionada) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [cargando, detallesEstacionSelecionada]);

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
        {estaciones?.map((lugar) => (
          <Marker
            key={lugar.id}
            coordinate={{ latitude: lugar.lat, longitude: lugar.lng }}
            title={lugar.titulo}
            description={lugar.estado}
            anchor={{ x: 0.5, y: 0.5 }}
            tracksViewChanges={false}
            onPress={() => {
              setCargando(true);
              setDetallesEstacionSelecionada(null);
              fetchDetallesEstacion(lugar.id).then((data) => {
                setDetallesEstacionSelecionada(data);
                setCargando(false);
              });
            }}
          >
            <PuntoEstacion estado={lugar.estado} />
          </Marker>
        ))}
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={() => setDetallesEstacionSelecionada(null)}
      >
        <BottomSheetView style={styles.contenidoSheet}>
          {cargando && <Text style={styles.titulo}>Cargando detalles...</Text>}

          {!cargando && detallesEstacionSelecionada && (
            <TarjetaEstacionDetalle
              nombreEstacion={detallesEstacionSelecionada.nombreEstacion}
              estado={detallesEstacionSelecionada.estado}
              latencia={detallesEstacionSelecionada.latencia}
              satelites={detallesEstacionSelecionada.satelites}
              disponibilidad={detallesEstacionSelecionada.disponibilidad}
              estadoTexto={detallesEstacionSelecionada.estadoTexto}
            />
          )}
        </BottomSheetView>
      </BottomSheet>
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
  anilloMedio: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  puntoCentral: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  contenidoSheet: {
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
    paddingHorizontal: 18,
  },
});
