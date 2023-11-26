import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,     
    },
    form:{
        width: "100%",
    },
    formLabel:{
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#dedcdc",
        height: 38,
        margin: 12,
        paddingLeft:10,
    },
    ButtonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#02b039",
        paddingTop:10,
        paddingBottom:10,
        marginLeft: 10,
        marginTop:20,
        marginBottom: 20,
    },
    textButtonCalculator:{
        fontSize: 22,
        color: "#ffffff",
        fontWeight: "bold",
    },
    errorMessage:{
        fontSize: 15,
        color:"red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc:{
        width: "100%",
        height: "50%",
    }
});

export default styles