import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native" // Share - API que permite compartilhar o resultado do cálculo 
import styles from "./style_result_imc";

// Componente ResultImc para exibir o resultado do cálculo de IMC e oferecer a opção de compartilhar o resultado.

export default function ResultImc(props) {
    // Função assíncrona usando a API de compartilhamento do React Native
    const onShare = async () => {
        // Chama a API Share para compartilhar o resultado do cálculo de IMC
        const result = await Share.share({
            message: "Meu IMC é: " + props.ResultImc,
        })
    }

    return (
        <View style={styles.contextImc}>
            {/* Container que exibe o resultado do cálculo de IMC e oferece a opção de compartilhamento */}
            <View style={styles.boxSharebutton}>
                {/* Exibe a mensagem informativa sobre o resultado do cálculo de IMC */}
                <Text style={styles.information}>{props.messageResultImc}</Text>
                
                {/* Exibe o valor calculado do IMC */}
                <Text style={styles.numberImc}>{props.ResultImc}</Text>
                
                {/* Botão que aciona a função de compartilhamento */}
                <TouchableOpacity
                    onPress={onShare}
                    style={styles.shared}
                >
                    {/* Texto do botão de compartilhamento */}
                    <Text style={styles.sharedText}>Compartilhar resultado</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
