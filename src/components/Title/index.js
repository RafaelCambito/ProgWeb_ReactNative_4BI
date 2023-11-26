import React from "react"
import { View, Text } from "react-native"
import styles from "./styletitle";

// Componente para exibir o título na interface do aplicativo

export default function Title() {
    return (
        // Container principal do componente, aplicando estilos definidos em "styletitle"
        <View style={styles.boxTitle}>
            {/* Texto do título do aplicativo */}
            <Text style={styles.textTitle}>Meu IPMC --- IFPR</Text>
        </View>
    );
}
