import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import ResultImc from "./ResultImc"
import styles from "./styleform"

// API Vibration - Vibra o aparelho quando não for informado peso ou altura
// API Keyboard - Utilizada para controlar eventos do teclado.


export default function Form(props) {    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o PESO e ALTURA")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton]= useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator (){
        // Converte a altura para ponto em casos do usuário colocar vírgla e calcula o IMC
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))  
    }

    function verificationImc (){
        // Verifica se o IMC é nulo. Se for, utiliza a API de vibração e repasso uma mensagem de erro.
        if(imc == null){
            Vibration.vibrate(); // API Vibration - Vibra o aparelho quando não for informado peso ou altura
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc(){
        //Verifica se peso e altura foram fornecidos. Se sim, chama imcCalculator para calcular o IMC, atualiza os estados e redefine as variáveis.
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)        
        }
        else{
            // Se não, chama verificationImc para tratar o caso de IMC não fornecido
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o PESO e ALTURA")
        }    
    }

    return(
    <View style={styles.formContext}>
        {imc == null ? 
        // Se o IMC for nulo, exibe o formulário de entrada
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.70"
                keyboardType="numeric" />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 80.00"
                keyboardType="numeric" />
            <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() => {
                    validationImc()
                } }
            >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </Pressable>
            : 
            // Se o IMC não for nulo, exibe o resultado do IMC
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} ResultImc={imc} />
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => {validationImc()}}
                >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }       
         </View>

    );
}

