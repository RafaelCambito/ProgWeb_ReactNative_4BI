import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    contextImc:{
        flex: 1,
        marginTop: 20,
        paddingTop: 20,
        alignItems: "center",
        width: "100",
        
    },
    resultImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 16,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: "#fc1e05",
        fontWeight: "bold",
        justifyContent: "center",
    },
    information:{
        fontSize: 20,
        color: "#fc1e05",
        fontWeight: "bold",
        justifyContent: "center",
    },
    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 24,
    },
    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 30,
        paddingBottom: 12,
        paddingTop: 12,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 20,
    }

});

export default styles