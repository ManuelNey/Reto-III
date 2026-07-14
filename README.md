---
title: "React Native: guía práctica y didáctica"
author: "Material de estudio para principiantes"
date: "Julio de 2026"
lang: es-UY
---

# Cómo utilizar esta guía

Esta guía está pensada para una persona que ya conoce las bases de JavaScript y React: variables, funciones, objetos, arreglos, componentes, JSX y eventos. El objetivo no es memorizar toda la API, sino aprender a construir interfaces móviles, manejar datos, navegar entre pantallas, consumir servicios y guardar información.

Los ejemplos utilizan **componentes funcionales y hooks**. La mayor parte del código está en JavaScript. Cuando trabajes con TypeScript, los archivos suelen cambiar de `.js` a `.tsx` y se agregan tipos para props, estados, parámetros de navegación y respuestas de API.

> **Nota de actualidad.** React Native y Expo evolucionan con rapidez. En julio de 2026, Expo se encuentra en una transición de versiones. Los comandos de esta guía utilizan `create-expo-app` y `npx expo install`, porque estas herramientas eligen versiones compatibles con el SDK del proyecto. Verifica siempre la documentación oficial cuando inicies un proyecto nuevo.

# Contenido

1. [Introducción a React Native](#1-introducción-a-react-native)
2. [Preparación del entorno](#2-preparación-del-entorno)
3. [Componentes principales](#3-componentes-principales)
4. [Componentes personalizados](#4-componentes-personalizados)
5. [Props y estado](#5-props-y-estado)
6. [Eventos e interacción](#6-eventos-e-interacción)
7. [Estilos en React Native](#7-estilos-en-react-native)
8. [Renderizado condicional y listas](#8-renderizado-condicional-y-listas)
9. [Hooks principales](#9-hooks-principales)
10. [Navegación](#10-navegación)
11. [Formularios](#11-formularios)
12. [Consumo de una API](#12-consumo-de-una-api)
13. [Almacenamiento local](#13-almacenamiento-local)
14. [Imágenes e íconos](#14-imágenes-e-íconos)
15. [Diferencias entre Android e iOS](#15-diferencias-entre-android-e-ios)
16. [Depuración y errores frecuentes](#16-depuración-y-errores-frecuentes)
17. [Buenas prácticas](#17-buenas-prácticas)
18. [Proyecto práctico final](#proyecto-práctico-final-lista-de-tareas)
19. [JavaScript y TypeScript](#javascript-y-typescript)
20. [Ideas principales](#ideas-principales)
21. [Comandos importantes](#comandos-importantes)
22. [Errores frecuentes](#errores-frecuentes)
23. [Glosario](#glosario-de-react-native)
24. [Ejercicios y autoevaluación](#10-ejercicios-prácticos-sin-solución)
25. [Ruta de aprendizaje](#ruta-de-aprendizaje-recomendada)

# 1. Introducción a React Native

## Concepto

React Native es una tecnología que permite crear aplicaciones para Android e iOS utilizando React y JavaScript. En lugar de dibujar una página con etiquetas HTML como `<div>` o `<p>`, se utilizan componentes móviles como `View`, `Text`, `Image` y `Pressable`.

React Native no convierte automáticamente una página web en una aplicación móvil. La lógica de React es parecida, pero la interfaz se construye con componentes que se conectan con controles nativos de cada plataforma.

## ¿Para qué se utiliza?

Se utiliza para crear aplicaciones móviles como catálogos, formularios, sistemas internos, aplicaciones educativas, comercios electrónicos, tableros, redes sociales y herramientas que consumen APIs.

## React, React Native y aplicación web

| Tecnología | Qué aporta | Interfaz principal | Resultado |
|---|---|---|---|
| React | Componentes, props, estado y hooks | No define una plataforma por sí solo | Se combina con otras herramientas |
| React para web | React más `react-dom` | HTML y CSS en el navegador | Sitio o aplicación web |
| React Native | React más componentes nativos | `View`, `Text`, `Image`, etc. | Aplicación Android/iOS y, con Expo, también web |

## React Native, Flutter y desarrollo nativo

- **React Native:** usa JavaScript o TypeScript y conceptos de React. Es conveniente cuando el equipo ya conoce desarrollo web con React.
- **Flutter:** usa Dart y su propio sistema de widgets. Controla de forma muy uniforme la apariencia entre plataformas.
- **Desarrollo nativo:** suele utilizar Kotlin/Java en Android y Swift/Objective-C en iOS. Ofrece acceso directo a cada plataforma, pero normalmente exige mantener más código separado.

No existe una opción universalmente mejor. La elección depende del equipo, el rendimiento requerido, las bibliotecas disponibles, la experiencia previa y el nivel de personalización nativa.

## ¿Qué se comparte entre Android e iOS?

Generalmente se puede compartir:

- La lógica de negocio.
- Componentes visuales.
- Hooks y estados.
- Validaciones.
- Consumo de APIs.
- Navegación.
- Servicios de almacenamiento.

Algunas partes pueden necesitar diferencias:

- Permisos.
- Configuración de compilación.
- Integraciones nativas específicas.
- Estilos o comportamientos propios de cada sistema.

## Ejemplo mínimo

```jsx
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
```

## Paso a paso

1. Se importan componentes desde `react-native`.
2. `App` es un componente funcional.
3. `View` funciona como contenedor.
4. `Text` muestra texto en pantalla.
5. `StyleSheet.create` organiza los estilos.
6. `flex: 1` hace que el contenedor ocupe el espacio disponible.

## Resultado visible

La aplicación mostrará el texto **Hola, React Native** centrado en la pantalla.

## Errores frecuentes

- Usar `<div>` o `<p>` como si fuera React web.
- Escribir texto directamente dentro de un `View` sin envolverlo en `Text`.
- Pensar que cualquier paquete web funciona automáticamente en React Native.
- Confundir React Native con una aplicación web dentro de un contenedor.

## Actividad práctica

Cambia el texto, el tamaño de fuente y agrega una segunda línea que muestre tu nombre.

# 2. Preparación del entorno

## Expo y React Native Community CLI

**Expo** es un conjunto de herramientas y módulos que simplifica el desarrollo con React Native. Permite iniciar rápidamente, instalar paquetes compatibles y probar la aplicación con Expo Go, emuladores o development builds.

**React Native Community CLI** ofrece una configuración más directa de los proyectos nativos Android e iOS. Puede ser conveniente cuando necesitas controlar desde el comienzo archivos nativos, integrar SDKs muy específicos o trabajar en una aplicación nativa existente.

## ¿Cuándo conviene Expo?

Expo es una excelente opción para:

- Aprender React Native.
- Crear prototipos.
- Aplicaciones pequeñas y medianas.
- Proyectos que utilizan módulos habituales como cámara, ubicación, archivos o notificaciones.
- Equipos que desean reducir configuración inicial.

Expo Go es útil para aprender, pero tiene límites: solo incluye módulos nativos previamente incorporados. Cuando necesitas código nativo personalizado, se utiliza un **development build**.

## Crear un proyecto

Para un proyecto JavaScript mínimo:

```bash
npx create-expo-app@latest MiPrimeraApp --template blank
cd MiPrimeraApp
npx expo start
```

Durante una transición de SDK, puedes fijar una plantilla concreta, por ejemplo:

```bash
npx create-expo-app@latest MiPrimeraApp --template blank@54
```

No copies una versión sin comprobar que sea compatible con tu Expo Go, emulador o development build.

## Estructura básica

Un proyecto sencillo puede comenzar así:

```text
MiPrimeraApp/
├── App.js
├── app.json
├── assets/
├── package.json
├── node_modules/
└── src/
    ├── components/
    ├── screens/
    └── services/
```

- `App.js`: punto principal de una plantilla en blanco.
- `app.json`: configuración de Expo.
- `assets`: imágenes, fuentes y recursos.
- `package.json`: dependencias y scripts.
- `src`: carpeta creada por ti para organizar la aplicación.

El proyecto predeterminado moderno de Expo puede utilizar Expo Router y una carpeta `app`. Esta guía utiliza una plantilla en blanco y React Navigation para explicar la navegación de forma explícita.

## Ejecutar la aplicación

```bash
npx expo start
```

Opciones habituales en la terminal:

- `a`: abrir Android.
- `i`: abrir iOS, disponible en macOS con el simulador configurado.
- `w`: abrir en navegador.
- Escanear el QR: abrir en un teléfono con Expo Go cuando la versión sea compatible.

También puedes ejecutar directamente:

```bash
npx expo start --android
npx expo start --ios
npx expo start --web
```

## Ejemplo para comprobar el entorno

```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>El entorno funciona correctamente.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
});
```

## Paso a paso

1. Expo ejecuta Metro, el servidor que prepara el código JavaScript.
2. El dispositivo o emulador se conecta al servidor.
3. `App` se renderiza.
4. Al guardar cambios, la aplicación normalmente se actualiza automáticamente.

## Resultado visible

Se verá el mensaje **El entorno funciona correctamente** en el centro.

## Errores frecuentes

- No instalar Node.js.
- Ejecutar comandos fuera de la carpeta del proyecto.
- Tener el teléfono y la computadora en redes que no pueden comunicarse.
- Usar una versión de Expo Go incompatible con el SDK.
- Confundir `npm install` con `npx expo install`: el segundo es preferible para paquetes nativos porque selecciona versiones compatibles.

## Actividad práctica

Crea el proyecto, ejecútalo en web y luego intenta abrirlo en un teléfono o emulador.

# 3. Componentes principales

Los componentes principales son las piezas visuales básicas de una aplicación.

## `View`

Es un contenedor para agrupar y distribuir componentes.

```jsx
<View style={{ padding: 16, backgroundColor: '#dbeafe' }}>
  <Text>Contenido dentro del View</Text>
</View>
```

## `Text`

Todo texto visible debe estar dentro de un componente `Text`.

```jsx
<Text style={{ fontSize: 20, fontWeight: '700' }}>Título</Text>
```

## `Image`

Imagen local:

```jsx
<Image
  source={require('./assets/logo.png')}
  style={{ width: 100, height: 100 }}
/>
```

Imagen remota:

```jsx
<Image
  source={{ uri: 'https://picsum.photos/300' }}
  style={{ width: 200, height: 200, borderRadius: 12 }}
/>
```

Las imágenes remotas necesitan dimensiones explícitas.

## `Button`

Es un botón simple con apariencia controlada principalmente por la plataforma.

```jsx
<Button title="Guardar" onPress={() => console.log('Guardado')} />
```

## `Pressable`

Permite construir botones personalizados y responder a estados como `pressed`.

```jsx
<Pressable
  onPress={() => console.log('Presionado')}
  style={({ pressed }) => ({
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2563eb',
    opacity: pressed ? 0.6 : 1,
  })}
>
  <Text style={{ color: '#fff' }}>Presionar</Text>
</Pressable>
```

## `TextInput`

Captura texto del teclado.

```jsx
<TextInput
  placeholder="Escribe tu nombre"
  onChangeText={(text) => console.log(text)}
  style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
/>
```

## `ScrollView`

Permite desplazar contenido. Renderiza todos sus hijos, por lo que es apropiado para contenido corto o variado.

```jsx
<ScrollView contentContainerStyle={{ padding: 16 }}>
  <Text>Bloque 1</Text>
  <Text>Bloque 2</Text>
  <Text>Bloque 3</Text>
</ScrollView>
```

## `FlatList`

Renderiza listas de forma eficiente. No crea todos los elementos al mismo tiempo.

```jsx
const courses = [
  { id: '1', name: 'React Native' },
  { id: '2', name: 'JavaScript' },
];

<FlatList
  data={courses}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

## `SafeAreaView`

El `SafeAreaView` incluido en el núcleo de React Native está deprecado. Para proyectos actuales se utiliza `react-native-safe-area-context`:

```bash
npx expo install react-native-safe-area-context
```

```jsx
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Contenido protegido</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

## Ejemplo integrado

```jsx
import { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductList() {
  const [search, setSearch] = useState('');
  const products = [
    { id: '1', name: 'Teclado' },
    { id: '2', name: 'Mouse' },
  ];

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/600/200' }}
        style={styles.image}
      />
      <Text style={styles.title}>Productos</Text>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar"
        style={styles.input}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => alert(item.name)}>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  image: { width: '100%', height: 120, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: '700' },
  input: { borderWidth: 1, borderColor: '#94a3b8', padding: 12, borderRadius: 8 },
  card: { padding: 16, marginBottom: 8, backgroundColor: '#f1f5f9', borderRadius: 8 },
});
```

## Paso a paso

1. `TextInput` actualiza `search`.
2. `filter` crea una lista según el texto.
3. `FlatList` recibe la lista filtrada.
4. Cada producto se muestra como un `Pressable`.
5. Al presionarlo se muestra el nombre.

## Resultado visible

Se verá una imagen, un título, un buscador y una lista filtrable.

## Errores frecuentes

- No asignar ancho y alto a una imagen remota.
- Usar `ScrollView` para miles de registros.
- Olvidar `keyExtractor` en `FlatList`.
- Intentar aplicar estilos complejos a `Button`.
- Importar `SafeAreaView` desde `react-native` en código nuevo.

## Actividad práctica

Agrega tres productos, muestra un precio y cambia el fondo de la tarjeta cuando se presiona.

# 4. Componentes personalizados

## Concepto

Un componente personalizado es una función que devuelve JSX. Permite dividir la interfaz en piezas pequeñas, legibles y reutilizables.

## Crear, exportar e importar

Archivo `src/components/ProfileCard.js`:

```jsx
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileCard({ name, role }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 12, backgroundColor: '#e2e8f0' },
  name: { fontSize: 18, fontWeight: '700' },
});
```

Archivo `App.js`:

```jsx
import { StyleSheet, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard name="Ana" role="Desarrolladora" />
      <ProfileCard name="Luis" role="Diseñador" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, gap: 12 },
});
```

## Componente padre e hijo

- `App` es el padre porque renderiza `ProfileCard`.
- `ProfileCard` es el hijo.
- El padre entrega información al hijo mediante props.

## Exportación predeterminada y nombrada

Exportación predeterminada:

```jsx
export default function ProfileCard() {}
```

Importación:

```jsx
import ProfileCard from './ProfileCard';
```

Exportación nombrada:

```jsx
export function ProfileCard() {}
export function ProfileAvatar() {}
```

Importación:

```jsx
import { ProfileCard, ProfileAvatar } from './ProfileCard';
```

## Paso a paso

1. Se crea un archivo para el componente.
2. La función recibe un objeto de props.
3. Se extraen `name` y `role`.
4. El padre reutiliza el componente con datos diferentes.

## Resultado visible

Se verán dos tarjetas con nombres y roles distintos, pero con el mismo diseño.

## Errores frecuentes

- Escribir el nombre del componente con minúscula.
- Equivocarse en la ruta del import.
- Mezclar exportación nombrada con importación predeterminada.
- Crear un componente enorme con demasiadas responsabilidades.

## Actividad práctica

Crea un componente `CourseCard` que reciba `title`, `duration` y `modality`.

# 5. Props y estado

## Props

Las props son datos que un componente padre entrega a un componente hijo. El hijo debe tratarlas como valores de solo lectura.

```jsx
function Greeting({ name }) {
  return <Text>Hola, {name}</Text>;
}
```

## Estado

El estado representa datos que cambian durante el uso de la aplicación. Cuando se actualiza, React vuelve a renderizar el componente.

## Diferencia

| Props | Estado |
|---|---|
| Llegan desde otro componente | Se administra dentro del componente o mediante un estado compartido |
| No se modifican directamente | Se actualiza con una función como `setCount` |
| Configuran un componente | Representan cambios de la interfaz |

## Contador con `useState`

```jsx
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Sumar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  number: { fontSize: 48, fontWeight: '700' },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff' },
});
```

## Formulario pequeño

```jsx
const [name, setName] = useState('');

<TextInput value={name} onChangeText={setName} />
<Text>Hola, {name || 'visitante'}</Text>
```

## Paso a paso

1. `useState(0)` crea el estado `count` con valor inicial cero.
2. `setCount` actualiza el estado.
3. `onPress` ejecuta una función.
4. React vuelve a renderizar y muestra el nuevo valor.
5. En el formulario, `value` y `onChangeText` forman un campo controlado.

## Resultado visible

El número aumenta al presionar **Sumar** y vuelve a cero al presionar **Reiniciar**.

## Errores frecuentes

- Modificar directamente el estado: `count = count + 1`.
- Olvidar que una actualización basada en el valor anterior puede escribirse como `setCount(current => current + 1)`.
- Crear estado para valores que pueden calcularse con otros estados.
- Intentar modificar una prop dentro del hijo.

## Actividad práctica

Agrega botones para restar y para aumentar de cinco en cinco. Evita que el contador quede por debajo de cero.

# 6. Eventos e interacción

## Eventos principales

- `onPress`: se ejecuta cuando se presiona un botón o elemento interactivo.
- `onChangeText`: recibe el texto actualizado de un `TextInput`.
- `onSubmitEditing`: se ejecuta al confirmar desde el teclado.

## Enviar información del hijo al padre

El padre entrega una función como prop. El hijo la ejecuta con un valor.

`TaskInput.js`:

```jsx
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function TaskInput({ onCreate }) {
  const [text, setText] = useState('');

  function submit() {
    const cleanText = text.trim();
    if (!cleanText) return;

    onCreate(cleanText);
    setText('');
  }

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        onSubmitEditing={submit}
        placeholder="Nueva tarea"
      />
      <Pressable onPress={submit}>
        <Text>Agregar</Text>
      </Pressable>
    </View>
  );
}
```

Padre:

```jsx
const [tasks, setTasks] = useState([]);

function addTask(title) {
  setTasks((current) => [...current, { id: Date.now().toString(), title }]);
}

<TaskInput onCreate={addTask} />
```

## Mostrar u ocultar según una condición

Con ternario:

```jsx
{isLoggedIn ? <Text>Bienvenido</Text> : <Text>Inicia sesión</Text>}
```

Con `&&`:

```jsx
{error && <Text style={{ color: 'red' }}>{error}</Text>}
```

## Paso a paso

1. El hijo guarda el texto localmente.
2. `submit` valida el contenido.
3. El hijo llama `onCreate(cleanText)`.
4. La función del padre actualiza la lista.
5. El hijo limpia su campo.

## Resultado visible

Al escribir y confirmar, la nueva tarea aparece en la lista administrada por el padre.

## Errores frecuentes

- Escribir `onPress={submit()}` y ejecutar la función durante el renderizado. Lo correcto es `onPress={submit}`.
- No validar espacios en blanco.
- Pasar una función con parámetros sin envolverla: usar `onPress={() => remove(id)}`.
- Crear ciclos de actualizaciones entre padre e hijo.

## Actividad práctica

Crea un hijo que permita elegir un color y envíe el color seleccionado al padre.

# 7. Estilos en React Native

## `StyleSheet.create`

Los estilos se expresan con objetos JavaScript. Las propiedades utilizan camelCase.

```jsx
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
});
```

## Flexbox

React Native utiliza Flexbox para distribuir elementos. La dirección predeterminada es `column`, a diferencia de la web donde suele pensarse primero en filas.

- `flexDirection`: `row` o `column`.
- `justifyContent`: distribuye en el eje principal.
- `alignItems`: alinea en el eje transversal.
- `flex`: indica cuánto espacio ocupa un elemento.

## Ejemplo

```jsx
import { StyleSheet, Text, View } from 'react-native';

export default function LayoutExample() {
  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <View style={[styles.box, styles.grow]}>
          <Text>Ocupa el espacio disponible</Text>
        </View>
        <View style={styles.box}>
          <Text>Fijo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  box: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#dbeafe',
  },
  grow: {
    flex: 1,
  },
});
```

## Diseño adaptable

Utiliza porcentajes, `flex`, `maxWidth`, `minWidth` y `useWindowDimensions`.

```jsx
import { useWindowDimensions } from 'react-native';

function ResponsiveCard() {
  const { width } = useWindowDimensions();
  const isLarge = width >= 768;

  return (
    <View style={{ padding: isLarge ? 32 : 16 }}>
      <Text style={{ fontSize: isLarge ? 28 : 20 }}>Contenido adaptable</Text>
    </View>
  );
}
```

## Diferencias con CSS

- No hay selectores ni cascada tradicional.
- No se usan unidades `px`; los números representan unidades independientes de densidad.
- Las propiedades usan camelCase: `backgroundColor`.
- No todas las propiedades CSS existen.
- Algunos valores se expresan como números: `fontSize: 18`.
- Los estilos pueden combinarse con arreglos: `[styles.base, isActive && styles.active]`.

## Resultado visible

Se verá una fila con dos cajas. La primera crecerá y la segunda mantendrá el tamaño necesario para su contenido.

## Errores frecuentes

- Usar guiones: `background-color`.
- Agregar `px`: `fontSize: '16px'`.
- Olvidar que `flexDirection` predeterminado es `column`.
- Fijar demasiados anchos y alturas.
- No probar en pantallas pequeñas.

## Actividad práctica

Crea una fila con tres botones que ocupen el mismo ancho. En pantallas angostas, cámbialos a columna con `useWindowDimensions`.

# 8. Renderizado condicional y listas

## Operador ternario

```jsx
<Text>{isOnline ? 'En línea' : 'Desconectado'}</Text>
```

## Operador `&&`

```jsx
{notificationCount > 0 && <Text>{notificationCount}</Text>}
```

## `map`

Es útil para listas pequeñas y conocidas.

```jsx
const tags = ['React', 'JavaScript', 'Móvil'];

<View>
  {tags.map((tag) => (
    <Text key={tag}>{tag}</Text>
  ))}
</View>
```

## `FlatList`

```jsx
const users = [
  { id: 'u1', name: 'Ana' },
  { id: 'u2', name: 'Mateo' },
];

<FlatList
  data={users}
  keyExtractor={(item) => item.id}
  renderItem={({ item, index }) => (
    <Text>{index + 1}. {item.name}</Text>
  )}
  ListEmptyComponent={<Text>No hay usuarios.</Text>}
/>
```

## Importancia de `key`

La clave ayuda a React a identificar qué elemento cambió, se agregó o se eliminó. Debe ser estable y única entre hermanos.

Evita usar el índice como clave cuando la lista puede reordenarse o eliminar elementos.

## `ScrollView` y `FlatList`

| `ScrollView` | `FlatList` |
|---|---|
| Renderiza todo el contenido | Renderiza de forma gradual |
| Conveniente para formularios y contenido corto | Conveniente para listas largas |
| Puede contener componentes muy diferentes | Se centra en datos repetidos |
| Es más simple | Ofrece separadores, encabezados, carga incremental y optimizaciones |

## Ejemplo con filtro

```jsx
const [showCompleted, setShowCompleted] = useState(false);
const tasks = [
  { id: '1', title: 'Estudiar', completed: true },
  { id: '2', title: 'Practicar', completed: false },
];

const visibleTasks = showCompleted
  ? tasks
  : tasks.filter((task) => !task.completed);

<FlatList
  data={visibleTasks}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Text style={item.completed ? { textDecorationLine: 'line-through' } : null}>
      {item.title}
    </Text>
  )}
/>
```

## Resultado visible

La lista puede mostrar todas las tareas o únicamente las pendientes según el estado del filtro.

## Errores frecuentes

- Usar una clave aleatoria nueva en cada render.
- Poner un `FlatList` vertical dentro de un `ScrollView` vertical sin necesidad.
- Mutar el arreglo con `push` y reutilizar la misma referencia.
- Olvidar devolver JSX dentro de `map`.

## Actividad práctica

Crea una lista de estudiantes y agrega un filtro para mostrar únicamente quienes aprobaron.

# 9. Hooks principales

## `useState`

Se utiliza para datos que cambian y afectan la interfaz.

```jsx
const [isVisible, setIsVisible] = useState(true);
```

## `useEffect`

Permite ejecutar efectos secundarios: cargar datos, guardar información, suscribirse a eventos o reaccionar a cambios.

```jsx
import { useEffect, useState } from 'react';

function ClockMessage() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Text>Segundos: {seconds}</Text>;
}
```

El arreglo vacío indica que el efecto se configura al montar el componente. La función retornada limpia el intervalo.

## `useContext`

Comparte datos con varios componentes sin pasar props manualmente por cada nivel.

```jsx
import { createContext, useContext, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const ThemeContext = createContext(null);

function ThemeButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Pressable onPress={toggleTheme}>
      <Text>{darkMode ? 'Usar tema claro' : 'Usar tema oscuro'}</Text>
    </Pressable>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme: () => setDarkMode((current) => !current) }}
    >
      <View style={{ flex: 1, backgroundColor: darkMode ? '#111827' : '#ffffff' }}>
        <ThemeButton />
      </View>
    </ThemeContext.Provider>
  );
}
```

## Cuándo utilizar cada uno

- `useState`: estado local simple.
- `useEffect`: sincronización con algo externo al renderizado.
- `useContext`: datos compartidos como tema, sesión o configuración.

## Resultado visible

El reloj aumenta cada segundo. El ejemplo de contexto permite cambiar el fondo sin pasar props intermedias.

## Errores frecuentes

- Usar `useEffect` para cálculos que pueden hacerse durante el render.
- Olvidar dependencias utilizadas dentro del efecto.
- Crear un bucle al actualizar en un efecto el mismo estado que aparece como dependencia.
- Usar contexto para cada estado pequeño y provocar renderizados innecesarios.
- Llamar hooks dentro de condiciones o bucles.

## Actividad práctica

Crea un contexto de idioma con los valores `es` y `en`, y muestra un saludo diferente según la selección.

# 10. Navegación

## Qué es React Navigation

React Navigation es una biblioteca para cambiar entre pantallas, mostrar encabezados y organizar flujos de navegación. Los navegadores más comunes son:

- **Stack:** cada pantalla nueva se coloca sobre la anterior.
- **Tabs:** muestra pestañas para alternar entre secciones.
- **Drawer:** abre un menú lateral.

## Instalación con Expo

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

`npx expo install` es importante para las dependencias nativas porque instala versiones compatibles con el SDK.

## Stack Navigator

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Inicio</Text>
      <Button
        title="Ver detalle"
        onPress={() => navigation.navigate('Detail', { courseId: 25 })}
      />
    </View>
  );
}

function DetailScreen({ navigation, route }) {
  const courseId = route.params?.courseId;

  return (
    <View>
      <Text>Curso seleccionado: {courseId}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Pasar parámetros

Se envían como segundo argumento:

```jsx
navigation.navigate('Detail', { courseId: 25 });
```

Se reciben desde `route.params`:

```jsx
const courseId = route.params?.courseId;
```

Conviene pasar identificadores o datos mínimos. No es recomendable usar los parámetros como almacenamiento global.

## Tabs Navigator

```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
```

Puedes colocar `MainTabs` como una pantalla dentro de un Stack para combinar ambos navegadores.

## Paso a paso

1. `NavigationContainer` mantiene el estado de navegación.
2. `Stack.Navigator` registra pantallas.
3. `navigation.navigate` abre otra pantalla.
4. `route.params` recibe parámetros.
5. `navigation.goBack` vuelve a la pantalla anterior.

## Resultado visible

La pantalla Inicio tendrá un botón. Al presionarlo se abrirá Detalle, se mostrará el identificador y se podrá volver.

## Errores frecuentes

- Colocar más de un `NavigationContainer` sin necesidad.
- Navegar a un nombre que no coincide exactamente con el registrado.
- Olvidar instalar `react-native-screens` o `react-native-safe-area-context`.
- Leer `route.params.courseId` sin considerar que `params` puede ser `undefined`.
- Pasar funciones o grandes objetos no serializables como parámetros.

## Actividad práctica

Crea tres pantallas: Inicio, Cursos y DetalleCurso. Desde Cursos, envía el nombre del curso a DetalleCurso.

# 11. Formularios

## Concepto

Un formulario móvil combina campos controlados, validaciones, mensajes y una acción de envío. En proyectos grandes se pueden usar bibliotecas como React Hook Form, pero conviene dominar primero el manejo manual.

## Ejemplo de inicio de sesión

```jsx
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  function validate() {
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = 'El correo es obligatorio.';
    } else if (!email.includes('@')) {
      nextErrors.email = 'Ingresa un correo válido.';
    }

    if (password.length < 6) {
      nextErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function submit() {
    setMessage('');

    if (!validate()) {
      return;
    }

    setMessage(`Sesión iniciada para ${email}`);
    setEmail('');
    setPassword('');
    setErrors({});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
        style={[styles.input, errors.email && styles.inputError]}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={submit}
        placeholder="Contraseña"
        secureTextEntry
        style={[styles.input, errors.password && styles.inputError]}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>

      {message && <Text style={styles.success}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, gap: 8 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#94a3b8', padding: 12, borderRadius: 8 },
  inputError: { borderColor: '#b91c1c' },
  error: { color: '#b91c1c', fontSize: 13 },
  button: { marginTop: 8, padding: 14, borderRadius: 8, backgroundColor: '#2563eb' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
  success: { color: '#15803d', marginTop: 8 },
});
```

## Paso a paso

1. Cada campo tiene su estado.
2. `validate` crea un objeto de errores.
3. Si hay errores, se muestran debajo del campo.
4. Si el formulario es válido, se simula un envío.
5. Los campos se limpian con cadenas vacías.

## Resultado visible

Se verá un formulario. Los campos incorrectos mostrarán mensajes rojos. Un envío válido mostrará un mensaje verde y limpiará los campos.

## Errores frecuentes

- Validar solamente en el servidor y no informar al usuario.
- Usar `email.includes('@')` como validación completa en un sistema real. Es solo una validación educativa mínima.
- Guardar contraseñas sin protección.
- No deshabilitar el botón durante un envío real.
- No usar `KeyboardAvoidingView` o un contenedor desplazable en formularios largos.

## Actividad práctica

Agrega un campo para confirmar contraseña y valida que ambos valores coincidan.

# 12. Consumo de una API

## Qué es una API REST

Una API permite que una aplicación se comunique con un servidor. En una API REST se utilizan direcciones y métodos como GET, POST, PUT, PATCH y DELETE para trabajar con recursos.

## `fetch`, `async` y `await`

```jsx
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return response.json();
}
```

- `async` permite utilizar `await`.
- `await` espera el resultado de una promesa.
- `response.ok` indica si el estado HTTP está dentro del rango exitoso.
- `response.json()` transforma la respuesta en datos JavaScript.

## Ejemplo con carga, éxito y error

```jsx
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadUsers() {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (requestError) {
      console.error(requestError);
      setError('No fue posible cargar los usuarios.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
        <Pressable onPress={loadUsers}>
          <Text>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Text style={{ fontWeight: '700' }}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}
```

## Paso a paso

1. El componente comienza en estado de carga.
2. `useEffect` llama a `loadUsers` una sola vez.
3. `fetch` solicita los datos.
4. Se comprueba `response.ok`.
5. Si todo funciona, se actualiza `users`.
6. Si falla, se muestra un error y un botón para reintentar.
7. `finally` termina el estado de carga.

## Resultado visible

Primero aparece un indicador. Luego se muestra una lista de nombres y correos. Si la conexión falla, aparece un mensaje con opción de reintentar.

## Errores frecuentes

- No verificar `response.ok`.
- Olvidar `await response.json()`.
- Mostrar una pantalla vacía mientras se carga.
- No manejar errores de red.
- Exponer claves secretas dentro del código de la aplicación.
- Actualizar un componente después de desmontarlo en operaciones muy largas sin control.

## Actividad práctica

Consume la API de publicaciones de JSONPlaceholder y muestra el título y el cuerpo de cada publicación.

# 13. Almacenamiento local

## Qué es AsyncStorage

AsyncStorage es un almacenamiento persistente de pares clave-valor. Es asincrónico y no está cifrado. Sirve para preferencias, datos sencillos, banderas o sesiones educativas, pero no para secretos sensibles sin protección adicional.

Solo almacena cadenas. Para guardar objetos o arreglos se utilizan `JSON.stringify` y `JSON.parse`.

## Instalación

```bash
npx expo install @react-native-async-storage/async-storage
```

## Guardar

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveTheme(theme) {
  await AsyncStorage.setItem('@preferences:theme', theme);
}
```

## Recuperar

```jsx
async function loadTheme() {
  const storedTheme = await AsyncStorage.getItem('@preferences:theme');
  return storedTheme ?? 'light';
}
```

## Eliminar

```jsx
async function removeTheme() {
  await AsyncStorage.removeItem('@preferences:theme');
}
```

## Ejemplo práctico

```jsx
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable, Text, View } from 'react-native';

const THEME_KEY = '@preferences:darkMode';

export default function Preferences() {
  const [darkMode, setDarkMode] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function restorePreference() {
      try {
        const storedValue = await AsyncStorage.getItem(THEME_KEY);
        setDarkMode(storedValue === 'true');
      } catch (error) {
        console.error('Error al recuperar la preferencia', error);
      } finally {
        setIsReady(true);
      }
    }

    restorePreference();
  }, []);

  async function toggleTheme() {
    const nextValue = !darkMode;
    setDarkMode(nextValue);

    try {
      await AsyncStorage.setItem(THEME_KEY, String(nextValue));
    } catch (error) {
      console.error('Error al guardar la preferencia', error);
    }
  }

  if (!isReady) {
    return <Text>Cargando preferencia...</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? '#111827' : '#fff' }}>
      <Pressable onPress={toggleTheme}>
        <Text style={{ color: darkMode ? '#fff' : '#111827' }}>
          Cambiar tema
        </Text>
      </Pressable>
    </View>
  );
}
```

## Paso a paso

1. Al montar, se busca la preferencia.
2. La cadena `'true'` se convierte a booleano mediante una comparación.
3. Al cambiar, primero se actualiza la interfaz.
4. Luego se guarda el nuevo valor.
5. Al cerrar y abrir, se recupera.

## Resultado visible

La aplicación recordará el tema seleccionado después de reiniciarse.

## Errores frecuentes

- Intentar guardar un objeto directamente.
- No utilizar `try/catch`.
- Guardar tokens sensibles sin considerar cifrado.
- Sobrescribir datos antes de terminar la carga inicial.
- Usar claves poco claras o repetidas.

## Actividad práctica

Guarda el nombre del usuario y recupéralo al volver a abrir la aplicación. Agrega un botón para eliminarlo.

# 14. Imágenes e íconos

## Imágenes locales

```jsx
<Image
  source={require('../assets/profile.png')}
  style={{ width: 80, height: 80, borderRadius: 40 }}
/>
```

La ruta dentro de `require` debe ser estática. No funciona de forma general construirla concatenando cadenas.

## Imágenes desde URL

```jsx
<Image
  source={{ uri: 'https://picsum.photos/400' }}
  style={{ width: '100%', height: 220 }}
  resizeMode="cover"
/>
```

## Íconos

Durante años Expo incluyó `@expo/vector-icons` como opción habitual:

```jsx
import { Ionicons } from '@expo/vector-icons';

<Ionicons name="checkmark-circle" size={28} color="green" />
```

Sin embargo, la documentación de Expo de 2026 marca `@expo/vector-icons` como deprecado y recomienda migrar hacia alternativas actuales, como paquetes de `@react-native-vector-icons` o soluciones nativas como `expo-symbols`, según la plataforma y el tipo de proyecto.

Ejemplo con un paquete específico de React Native Vector Icons:

```bash
npx expo install @react-native-vector-icons/material-design-icons
```

```jsx
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

<MaterialDesignIcons name="check" size={28} color="green" />
```

Algunas variantes pueden requerir un development build. Antes de elegir, revisa si el paquete funciona en Expo Go o necesita recompilar la aplicación.

## Recomendaciones de rendimiento

- Define dimensiones.
- Evita cargar imágenes mucho más grandes que el tamaño visible.
- Utiliza formatos y compresión adecuados.
- No renderices imágenes remotas ilimitadas sin paginación.
- Muestra un estado de carga o un recurso de reemplazo cuando sea importante.
- Agrega propiedades de accesibilidad cuando la imagen comunica información.

## Ejemplo completo

```jsx
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>María Pérez</Text>
        <Text>Estudiante de desarrollo móvil</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  textContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: '700' },
  button: { padding: 10, backgroundColor: '#e2e8f0', borderRadius: 8 },
  buttonText: { fontWeight: '700' },
});
```

## Resultado visible

Se verá una cabecera con foto circular, nombre, descripción y botón.

## Errores frecuentes

- No definir dimensiones para una imagen remota.
- Escribir mal la ruta local.
- Utilizar un nombre de ícono que no existe en el conjunto elegido.
- Instalar una biblioteca nativa y no reconstruir el development build.
- Seguir utilizando una biblioteca deprecada en un proyecto nuevo sin evaluar la migración.

## Actividad práctica

Crea una tarjeta de producto con imagen, nombre, precio y un ícono de favorito.

# 15. Diferencias entre Android e iOS

## `Platform`

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      default: {},
    }),
  },
});
```

También puedes usar:

```jsx
const topPadding = Platform.OS === 'ios' ? 12 : 8;
```

## Archivos específicos

React Native puede seleccionar archivos según la plataforma:

```text
PrimaryButton.ios.js
PrimaryButton.android.js
```

Luego se importa sin sufijo:

```jsx
import PrimaryButton from './PrimaryButton';
```

## Permisos

Los permisos de cámara, ubicación, notificaciones y archivos pueden variar en configuración, textos requeridos y comportamiento. No debes pedir permisos sin explicar para qué se utilizan. Algunas configuraciones requieren modificar `app.json`, plugins o archivos nativos y crear un nuevo build.

## Safe areas

Los recortes, islas, barras y áreas de gestos hacen que parte de la pantalla no sea segura. Utiliza `react-native-safe-area-context`, especialmente en contenido propio que no está protegido por el encabezado de navegación.

## Diferencias visuales

- Algunos controles predeterminados cambian de apariencia.
- El botón Atrás de Android tiene comportamiento propio.
- Teclados y selectores pueden ser diferentes.
- Sombras se expresan históricamente de manera distinta.
- Las convenciones de navegación y espaciado pueden variar.

## Ejemplo

```jsx
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

export default function PlatformButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>
        Ejecutando en {Platform.OS}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: Platform.OS === 'ios' ? 14 : 12,
    borderRadius: Platform.OS === 'ios' ? 12 : 6,
    backgroundColor: '#2563eb',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});
```

## Resultado visible

El botón mostrará la plataforma y tendrá un espaciado y radio ligeramente diferentes.

## Errores frecuentes

- Diseñar y probar únicamente en una plataforma.
- Duplicar toda la aplicación cuando solo cambia un estilo pequeño.
- Pedir permisos al iniciar sin contexto.
- Asumir que una función disponible en web existe igual en móvil.
- Ignorar el botón físico o gesto de volver en Android.

## Actividad práctica

Crea una tarjeta que use sombra en iOS y `elevation` en Android.

# 16. Depuración y errores frecuentes

## Cómo leer un error

1. Lee el primer mensaje concreto, no únicamente la larga pila.
2. Busca el nombre del archivo y la línea.
3. Identifica si es un error de sintaxis, importación, ejecución o dependencia.
4. Reproduce el problema con el cambio mínimo.
5. Revisa qué modificaste inmediatamente antes.

## `console.log`

```jsx
function addTask(task) {
  console.log('Tarea recibida:', task);
  console.log('Tipo:', typeof task);
}
```

También son útiles:

```jsx
console.warn('Dato incompleto');
console.error('Error al guardar', error);
console.table(tasks);
```

No dejes registros sensibles o demasiado ruido en producción.

## Errores con imports y rutas

```jsx
// Exportación predeterminada
export default function Card() {}
import Card from './Card';

// Exportación nombrada
export function Card() {}
import { Card } from './Card';
```

Comprueba mayúsculas y minúsculas. Una ruta que funciona en un sistema puede fallar en otro si el nombre real no coincide exactamente.

## Dependencias

Después de instalar un paquete nativo:

```bash
npx expo install nombre-del-paquete
```

Si el paquete no está incluido en Expo Go, crea o actualiza un development build. Reiniciar Metro no agrega por sí solo un módulo nativo a una aplicación ya compilada.

## Reiniciar la caché

```bash
npx expo start --clear
```

En problemas más persistentes, revisa la documentación de limpieza de cachés para tu sistema operativo. No elimines carpetas al azar sin entender qué se regenerará.

## Ejemplo de depuración

```jsx
async function loadData() {
  try {
    console.log('Comienza la solicitud');
    const response = await fetch(API_URL);
    console.log('Estado HTTP:', response.status);

    if (!response.ok) {
      throw new Error(`Solicitud fallida: ${response.status}`);
    }

    const data = await response.json();
    console.log('Cantidad recibida:', data.length);
    setItems(data);
  } catch (error) {
    console.error('Falló loadData:', error);
    setError('No fue posible cargar los datos.');
  }
}
```

## Resultado visible

El usuario verá un mensaje comprensible, mientras que el desarrollador tendrá información detallada en la consola.

## Problemas frecuentes

- **`Unable to resolve module`:** paquete no instalado o ruta incorrecta.
- **`Element type is invalid`:** exportación/importación incorrecta.
- **`Text strings must be rendered within a Text component`:** texto fuera de `Text`.
- **Pantalla en blanco:** error antes del render, retorno ausente o navegación mal configurada.
- **Expo Go no conecta:** red, firewall, SDK incompatible o servidor detenido.
- **Cambios no aparecen:** caché, archivo equivocado o aplicación conectada a otro servidor.

## Actividad práctica

Introduce voluntariamente un error en un import, observa el mensaje, corrígelo y documenta qué parte del error te indicó la solución.

# 17. Buenas prácticas

## Organización sugerida

```text
src/
├── components/     # Componentes reutilizables
├── screens/        # Pantallas completas
├── navigation/     # Navegadores
├── services/       # API, almacenamiento y servicios externos
├── hooks/          # Hooks personalizados
├── context/        # Contextos globales
├── utils/          # Funciones auxiliares
├── constants/      # Claves, rutas y valores constantes
└── styles/         # Estilos compartidos, si son necesarios
```

No es obligatorio comenzar con todas las carpetas. Agrégalas cuando exista una necesidad real.

## Principios prácticos

- Componentes con una responsabilidad clara.
- Nombres descriptivos: `TaskItem`, `isLoading`, `loadTasks`.
- Separar presentación, datos y navegación cuando la complejidad crece.
- Evitar estados duplicados.
- No mutar arreglos u objetos del estado.
- Mostrar carga, vacío, éxito y error.
- Reutilizar componentes, pero no crear abstracciones prematuras.
- Agregar accesibilidad a controles importantes.

## Ejemplo: separar servicio de pantalla

`services/usersApi.js`:

```jsx
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return response.json();
}
```

Pantalla:

```jsx
import { fetchUsers } from '../services/usersApi';

async function loadUsers() {
  try {
    setIsLoading(true);
    const users = await fetchUsers();
    setUsers(users);
  } catch (error) {
    setError('No fue posible cargar los usuarios.');
  } finally {
    setIsLoading(false);
  }
}
```

## Paso a paso

1. La URL y la lógica HTTP quedan fuera de la pantalla.
2. La pantalla decide cómo representar carga o error.
3. El servicio puede reutilizarse y probarse por separado.
4. Los nombres explican la intención.

## Resultado visible

La aplicación funciona igual, pero el código es más fácil de mantener.

## Errores frecuentes

- Crear una pantalla de cientos de líneas.
- Mezclar solicitudes HTTP, almacenamiento, validación y JSX en una única función.
- Utilizar nombres como `data`, `thing` o `x` sin contexto.
- Ignorar estados vacíos y errores.
- Optimizar con `useMemo` o `useCallback` sin necesidad ni medición.
- Copiar el mismo componente varias veces en lugar de parametrizarlo.

## Actividad práctica

Toma un componente grande de una práctica anterior y sepáralo en pantalla, componente de formulario, componente de elemento y servicio.


# Proyecto práctico final: lista de tareas

## Objetivo

La aplicación permitirá:

- Agregar tareas.
- Mostrar las tareas en una lista.
- Marcar tareas como completadas.
- Eliminar tareas.
- Filtrar todas, pendientes y completadas.
- Guardar las tareas con AsyncStorage.
- Navegar entre la pantalla principal y una pantalla de información.

## 1. Estructura de carpetas

```text
ListaTareas/
├── App.js
└── src/
    ├── components/
    │   ├── FilterBar.js
    │   ├── TaskForm.js
    │   └── TaskItem.js
    ├── navigation/
    │   └── AppNavigator.js
    ├── screens/
    │   ├── AboutScreen.js
    │   └── TasksScreen.js
    └── services/
        └── storage.js
```

## 2. Crear el proyecto e instalar dependencias

Para trabajar con una plantilla en blanco:

```bash
npx create-expo-app@latest ListaTareas --template blank
cd ListaTareas
```

Durante una transición de SDK puede ser necesario indicar una versión compatible con Expo Go. Por ejemplo, en julio de 2026 la documentación de Expo indica una transición en la que el proyecto para teléfono físico puede requerir la plantilla admitida por Expo Go:

```bash
npx create-expo-app@latest ListaTareas --template blank@54
```

Instala React Navigation:

```bash
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

Instala AsyncStorage:

```bash
npx expo install @react-native-async-storage/async-storage
```

Luego reemplaza `App.js` y crea la carpeta `src` con los archivos siguientes.

## 3. Código completo

### `App.js`

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

### `src/navigation/AppNavigator.js`

```jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from '../screens/TasksScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tareas"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Tareas"
        component={TasksScreen}
        options={{ title: 'Mi lista de tareas' }}
      />
      <Stack.Screen
        name="Informacion"
        component={AboutScreen}
        options={{ title: 'Información' }}
      />
    </Stack.Navigator>
  );
}
```

### `src/screens/TasksScreen.js`

```jsx
import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FilterBar from '../components/FilterBar';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { loadTasks, saveTasks } from '../services/storage';

export default function TasksScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [storageError, setStorageError] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    async function restoreTasks() {
      try {
        const storedTasks = await loadTasks();
        setTasks(storedTasks);
      } catch (error) {
        console.error('No se pudieron recuperar las tareas:', error);
        setStorageError('No se pudieron recuperar las tareas guardadas.');
      } finally {
        setIsLoading(false);
        setHasLoaded(true);
      }
    }

    restoreTasks();
  }, []);

  useEffect(() => {
    if (!hasLoaded) {
      return;
    }

    async function persistTasks() {
      try {
        await saveTasks(tasks);
        setStorageError('');
      } catch (error) {
        console.error('No se pudieron guardar las tareas:', error);
        setStorageError('No se pudieron guardar los últimos cambios.');
      }
    }

    persistTasks();
  }, [tasks, hasLoaded]);

  const visibleTasks = useMemo(() => {
    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  function addTask(title) {
    const newTask = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.centered} edges={['bottom', 'left', 'right']}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Cargando tareas...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.heading}>Organiza tu día</Text>
            <Text style={styles.summary}>
              {tasks.filter((task) => !task.completed).length} pendientes de{' '}
              {tasks.length}
            </Text>
          </View>

          <Pressable
            onPress={() =>
              navigation.navigate('Informacion', { totalTasks: tasks.length })
            }
            style={({ pressed }) => [
              styles.infoButton,
              pressed ? styles.pressed : null,
            ]}
            accessibilityRole="button"
          >
            <Text style={styles.infoButtonText}>Info</Text>
          </Pressable>
        </View>

        <TaskForm onAddTask={addTask} />
        <FilterBar selectedFilter={filter} onChangeFilter={setFilter} />

        {storageError ? (
          <Text style={styles.storageError}>{storageError}</Text>
        ) : null}

        <FlatList
          data={visibleTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          )}
          contentContainerStyle={
            visibleTasks.length > 0
              ? styles.listContent
              : styles.emptyListContent
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No hay tareas para mostrar</Text>
              <Text style={styles.emptyText}>
                Agrega una nueva tarea o cambia el filtro seleccionado.
              </Text>
            </View>
          }
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    color: '#475569',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  heading: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '800',
  },
  summary: {
    marginTop: 4,
    color: '#64748b',
  },
  infoButton: {
    minWidth: 64,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#e2e8f0',
  },
  infoButtonText: {
    color: '#0f172a',
    fontWeight: '700',
  },
  storageError: {
    color: '#b91c1c',
    fontSize: 13,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyListContent: {
    flexGrow: 1,
  },
  separator: {
    height: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    color: '#334155',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyText: {
    marginTop: 8,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
```

### `src/screens/AboutScreen.js`

```jsx
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen({ navigation, route }) {
  const totalTasks = route.params?.totalTasks ?? 0;

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
      <View style={styles.container}>
        <Text style={styles.title}>Acerca de la aplicación</Text>
        <Text style={styles.paragraph}>
          Esta aplicación demuestra componentes funcionales, hooks, navegación,
          formularios, listas, renderizado condicional y almacenamiento local.
        </Text>
        <Text style={styles.highlight}>
          Actualmente hay {totalTasks} tarea(s) guardada(s).
        </Text>

        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Volver</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#0f172a',
    fontSize: 26,
    fontWeight: '800',
  },
  paragraph: {
    marginTop: 16,
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
  },
  highlight: {
    marginTop: 16,
    color: '#1d4ed8',
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    borderRadius: 10,
    backgroundColor: '#2563eb',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
```

### `src/components/TaskForm.js`

```jsx
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      setError('Escribe una tarea antes de agregarla.');
      return;
    }

    onAddTask(cleanTitle);
    setTitle('');
    setError('');
  }

  function handleChangeText(value) {
    setTitle(value);

    if (error && value.trim()) {
      setError('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
        placeholder="Ej.: Estudiar React Native"
        returnKeyType="done"
        style={[styles.input, error ? styles.inputError : null]}
        accessibilityLabel="Nombre de la tarea"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Agregar tarea</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#9ca3af',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  inputError: {
    borderColor: '#b91c1c',
  },
  errorText: {
    color: '#b91c1c',
    fontSize: 13,
  },
  button: {
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
```

### `src/components/TaskItem.js`

```jsx
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onToggle(task.id)}
        style={({ pressed }) => [
          styles.taskButton,
          pressed ? styles.pressed : null,
        ]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
      >
        <View style={[styles.checkbox, task.completed ? styles.checkboxDone : null]}>
          {task.completed ? <Text style={styles.checkmark}>✓</Text> : null}
        </View>

        <Text style={[styles.title, task.completed ? styles.titleDone : null]}>
          {task.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onDelete(task.id)}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed ? styles.pressed : null,
        ]}
        accessibilityRole="button"
        accessibilityLabel={`Eliminar tarea ${task.title}`}
      >
        <Text style={styles.deleteText}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  taskButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2563eb',
    borderRadius: 6,
  },
  checkboxDone: {
    backgroundColor: '#2563eb',
  },
  checkmark: {
    color: '#ffffff',
    fontWeight: '800',
  },
  title: {
    flexShrink: 1,
    color: '#111827',
    fontSize: 16,
  },
  titleDone: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  deleteText: {
    color: '#b91c1c',
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.6,
  },
});
```

### `src/components/FilterBar.js`

```jsx
import { Pressable, StyleSheet, Text, View } from 'react-native';

const FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'pending', label: 'Pendientes' },
  { id: 'completed', label: 'Completadas' },
];

export default function FilterBar({ selectedFilter, onChangeFilter }) {
  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => {
        const isSelected = filter.id === selectedFilter;

        return (
          <Pressable
            key={filter.id}
            onPress={() => onChangeFilter(filter.id)}
            style={({ pressed }) => [
              styles.filterButton,
              isSelected ? styles.filterButtonSelected : null,
              pressed ? styles.pressed : null,
            ]}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Text
              style={[
                styles.filterText,
                isSelected ? styles.filterTextSelected : null,
              ]}
            >
              {filter.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 999,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
  },
  filterButtonSelected: {
    borderColor: '#1d4ed8',
    backgroundColor: '#dbeafe',
  },
  filterText: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
  },
  filterTextSelected: {
    color: '#1d4ed8',
  },
  pressed: {
    opacity: 0.7,
  },
});
```

### `src/services/storage.js`

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@lista_tareas:tareas';

export async function loadTasks() {
  const storedValue = await AsyncStorage.getItem(TASKS_KEY);

  if (!storedValue) {
    return [];
  }

  const parsedValue = JSON.parse(storedValue);
  return Array.isArray(parsedValue) ? parsedValue : [];
}

export async function saveTasks(tasks) {
  await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export async function clearTasks() {
  await AsyncStorage.removeItem(TASKS_KEY);
}
```


## 4. Ejecutar el proyecto

```bash
npx expo start
```

Opciones:

- Android: presiona `a` o ejecuta `npx expo start --android`.
- iOS en macOS: presiona `i` o ejecuta `npx expo start --ios`.
- Web: presiona `w` o ejecuta `npx expo start --web`.
- Teléfono físico: escanea el código QR con una versión compatible de Expo Go.

Si el proyecto parece utilizar una versión antigua del código:

```bash
npx expo start --clear
```

## 5. Funcionamiento paso a paso

### Inicio de la aplicación

`App.js` envuelve la aplicación con `SafeAreaProvider` y `NavigationContainer`. El proveedor de safe area permite proteger el contenido. El contenedor de navegación administra las pantallas.

### Navegación

`AppNavigator.js` registra `TasksScreen` e `AboutScreen` dentro de un Native Stack. La pantalla principal abre Información mediante:

```jsx
navigation.navigate('Informacion', { totalTasks: tasks.length });
```

La pantalla Información recibe el parámetro desde `route.params` y vuelve con `navigation.goBack()`.

### Carga inicial

`TasksScreen` comienza con `isLoading` en `true`. Su primer `useEffect` llama a `loadTasks()`. Cuando termina, actualiza la lista y marca `hasLoaded`.

La variable `hasLoaded` evita un error común: guardar inmediatamente el arreglo vacío antes de haber recuperado las tareas existentes.

### Guardado automático

El segundo `useEffect` se ejecuta cuando cambia `tasks`. Después de la carga inicial llama a `saveTasks(tasks)`.

AsyncStorage guarda cadenas, por eso el servicio convierte el arreglo con `JSON.stringify`. Al recuperar, utiliza `JSON.parse`.

### Agregar una tarea

`TaskForm` administra el texto. Cuando el usuario confirma:

1. Elimina espacios laterales.
2. Comprueba que no esté vacío.
3. Ejecuta `onAddTask(cleanTitle)`.
4. Limpia el campo.

El padre crea un objeto con `id`, `title` y `completed`.

### Marcar como completada

`toggleTask` utiliza `map`. Cuando encuentra la tarea seleccionada, crea un objeto nuevo y cambia `completed`. No modifica directamente el objeto anterior.

### Eliminar

`deleteTask` utiliza `filter` para crear un arreglo sin la tarea eliminada.

### Filtrar

`FilterBar` envía `all`, `pending` o `completed`. `visibleTasks` se calcula con `useMemo` para mostrar el grupo correspondiente.

### Lista

`FlatList` utiliza:

- `data`: tareas visibles.
- `keyExtractor`: identificador estable.
- `renderItem`: componente `TaskItem`.
- `ListEmptyComponent`: mensaje cuando no hay resultados.
- `ItemSeparatorComponent`: separación visual.

### Estados de carga y error

Mientras se recuperan datos, se muestra `ActivityIndicator`. Si AsyncStorage falla, se presenta un mensaje, además de registrar el error técnico en consola.

## 6. Pruebas manuales recomendadas

1. Agrega una tarea válida.
2. Intenta agregar una cadena vacía.
3. Marca y desmarca una tarea.
4. Prueba los tres filtros.
5. Elimina una tarea.
6. Cierra y vuelve a abrir la aplicación.
7. Abre Información y comprueba la cantidad.
8. Prueba la aplicación en Android y, si es posible, iOS.

## 7. Posibles mejoras futuras

- Editar el texto de una tarea.
- Agregar fecha y prioridad.
- Confirmar antes de eliminar.
- Ordenar por creación, prioridad o estado.
- Incorporar categorías.
- Sincronizar con una API y una cuenta de usuario.
- Agregar tema claro y oscuro.
- Crear pruebas unitarias y de interfaz.
- Mejorar accesibilidad y soporte para lectores de pantalla.
- Utilizar TypeScript para tipar tareas, props y navegación.

# JavaScript y TypeScript

La estructura visual no cambia de forma importante. En TypeScript:

- Los archivos JSX pasan de `.js` a `.tsx`.
- Se define un tipo para la tarea.
- Se tipan las props.
- Se tipa la lista de rutas y sus parámetros.

Ejemplo:

```tsx
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  // El JSX puede mantenerse prácticamente igual.
}
```

TypeScript ayuda a detectar errores antes de ejecutar, pero no reemplaza validaciones de datos externos. Una respuesta de API puede no respetar el tipo esperado y debe validarse.

# Ideas principales

- React Native usa los conceptos de React para construir interfaces móviles.
- No utiliza HTML ni CSS tradicional.
- Expo reduce la configuración y es apropiado para aprender y comenzar proyectos.
- Los componentes deben ser pequeños, claros y reutilizables.
- Props transmiten datos; estado representa cambios.
- Los eventos permiten responder a la interacción.
- Flexbox organiza la interfaz.
- `FlatList` es preferible para listas largas.
- `useEffect` sincroniza el componente con sistemas externos.
- React Navigation organiza pantallas.
- Toda operación remota o persistente necesita estados de carga y error.
- AsyncStorage es persistente, pero no cifrado.
- Android e iOS comparten gran parte del código, aunque hay diferencias.
- Leer errores y aislar el problema es parte central del desarrollo.

# Comandos importantes

| Acción | Comando |
|---|---|
| Crear proyecto en blanco | `npx create-expo-app@latest MiApp --template blank` |
| Entrar a la carpeta | `cd MiApp` |
| Iniciar Expo | `npx expo start` |
| Abrir Android | `npx expo start --android` |
| Abrir iOS | `npx expo start --ios` |
| Abrir web | `npx expo start --web` |
| Limpiar caché | `npx expo start --clear` |
| Instalar paquete compatible | `npx expo install paquete` |
| Instalar paquete JavaScript | `npm install paquete` |
| Ejecutar proyecto nativo Android | `npx expo run:android` |
| Ejecutar proyecto nativo iOS | `npx expo run:ios` |
| Generar carpetas nativas | `npx expo prebuild` |

# Errores frecuentes

1. Utilizar etiquetas HTML.
2. Mostrar texto fuera de `Text`.
3. Modificar directamente el estado.
4. Ejecutar un evento durante el render: `onPress={save()}`.
5. Usar claves inestables en listas.
6. No manejar carga, vacío y error.
7. Equivocarse entre exportación predeterminada y nombrada.
8. Instalar una dependencia nativa incompatible.
9. No reconstruir después de agregar código nativo.
10. Guardar objetos en AsyncStorage sin convertirlos.
11. Sobrescribir almacenamiento antes de terminar la carga.
12. No probar en más de una pantalla o plataforma.
13. Pasar objetos grandes por parámetros de navegación.
14. Incluir secretos en el código del cliente.
15. Utilizar APIs o componentes deprecados sin comprobar alternativas.

# Glosario de React Native

**API:** interfaz que permite intercambiar información entre sistemas.

**AsyncStorage:** almacenamiento local persistente, asincrónico y no cifrado.

**Componente:** función reutilizable que devuelve una parte de la interfaz.

**Development build:** versión de desarrollo de la aplicación que incluye sus propios módulos nativos.

**Expo:** framework y conjunto de herramientas para aplicaciones React Native.

**Expo Go:** aplicación de prueba con un conjunto predefinido de módulos nativos.

**FlatList:** componente optimizado para listas.

**Hook:** función de React que permite utilizar estado, efectos y otras capacidades.

**JSX:** sintaxis que permite describir la interfaz dentro de JavaScript.

**Metro:** servidor y empaquetador utilizado durante el desarrollo.

**Navegador:** componente que organiza cambios entre pantallas.

**Props:** datos que un padre entrega a un hijo.

**Render:** proceso de calcular y mostrar la interfaz.

**Safe area:** zona de la pantalla que no queda tapada por recortes, barras o gestos.

**State o estado:** datos que cambian durante la ejecución.

**Stack:** navegación en la que las pantallas se apilan.

**Tabs:** navegación mediante pestañas.

**View:** contenedor fundamental de React Native.

# 10 ejercicios prácticos sin solución

1. Crea una tarjeta de curso con título, duración, docente y botón de inscripción.
2. Construye un contador con sumar, restar, reiniciar y un límite máximo.
3. Crea un formulario de registro con nombre, correo, contraseña y confirmación.
4. Muestra una lista de productos con buscador y filtro por disponibilidad.
5. Consume una API de publicaciones y agrega una pantalla de detalle.
6. Guarda una preferencia de tema con AsyncStorage.
7. Crea navegación con Stack y Tabs combinados.
8. Diseña una aplicación de notas que permita agregar y eliminar notas.
9. Aplica estilos diferentes para Android e iOS en una tarjeta.
10. Refactoriza una pantalla grande separándola en componentes, hooks y servicios.

# 5 preguntas de autoevaluación con respuestas

## 1. ¿Cuál es la diferencia principal entre props y estado?

Las props llegan desde otro componente y se tratan como solo lectura. El estado se administra y actualiza para representar cambios en la interfaz.

## 2. ¿Por qué `FlatList` suele ser mejor que `ScrollView` para una lista larga?

Porque renderiza los elementos de forma gradual y evita mantener todos los elementos en memoria al mismo tiempo.

## 3. ¿Para qué se utiliza `useEffect`?

Para sincronizar un componente con sistemas externos al renderizado, como APIs, temporizadores, almacenamiento o suscripciones.

## 4. ¿Por qué AsyncStorage necesita `JSON.stringify` para guardar un arreglo?

Porque AsyncStorage almacena cadenas. `JSON.stringify` convierte el arreglo a texto y `JSON.parse` lo reconstruye.

## 5. ¿Qué diferencia existe entre Expo Go y un development build?

Expo Go incluye un conjunto fijo de módulos nativos y es útil para aprender. Un development build es una aplicación de desarrollo propia que puede incluir módulos nativos y configuración específica del proyecto.

# Ruta de aprendizaje recomendada

## Etapa 1: interfaz y React

1. Componentes básicos.
2. JSX.
3. Props.
4. `useState`.
5. Eventos.
6. Estilos y Flexbox.

Proyecto sugerido: contador y perfil personal.

## Etapa 2: listas y formularios

1. `TextInput` controlado.
2. Validaciones.
3. `map` y `FlatList`.
4. Renderizado condicional.
5. Componentes reutilizables.

Proyecto sugerido: lista de compras sin persistencia.

## Etapa 3: navegación y persistencia

1. Stack.
2. Tabs.
3. Parámetros.
4. AsyncStorage.
5. Safe areas.

Proyecto sugerido: lista de tareas de esta guía.

## Etapa 4: datos externos

1. `fetch`.
2. `async/await`.
3. Carga y error.
4. Servicios separados.
5. Paginación y búsqueda.

Proyecto sugerido: catálogo que consume una API.

## Etapa 5: nivel intermedio

1. Context y hooks personalizados.
2. TypeScript.
3. Autenticación real.
4. Formularios con una biblioteca.
5. Pruebas.
6. Accesibilidad.
7. Development builds y EAS.

Proyecto sugerido: aplicación con cuenta, API y sincronización.

# Fuentes oficiales consultadas

- [React Native: componentes y APIs](https://reactnative.dev/docs/components-and-apis)
- [React Native: StyleSheet](https://reactnative.dev/docs/stylesheet)
- [React Native: FlatList](https://reactnative.dev/docs/flatlist)
- [React Native: TextInput](https://reactnative.dev/docs/textinput)
- [Expo: crear un proyecto](https://docs.expo.dev/get-started/create-a-project/)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)
- [Expo: configuración del entorno](https://docs.expo.dev/get-started/set-up-your-environment/)
- [React Navigation: instalación](https://reactnavigation.org/docs/getting-started/)
- [React Navigation: Native Stack](https://reactnavigation.org/docs/native-stack-navigator/)
- [React Navigation: parámetros](https://reactnavigation.org/docs/params/)
- [React Navigation: safe areas](https://reactnavigation.org/docs/handling-safe-area/)
- [AsyncStorage: documentación](https://react-native-async-storage.github.io/)
- [Expo: iconos](https://docs.expo.dev/guides/icons/)
- [Expo: TypeScript](https://docs.expo.dev/guides/typescript/)
