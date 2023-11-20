import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

const HomeScreen = () => {
    const data = [
        {
            appImage: require("../../assets/smile.png"),
            app_name: "SMILE Merchant Onboarding"
        },
        {
            appImage: require("../../assets/branch-cob.png"),
            app_name: "Branch Customer Onboarding"
        },
        {
            appImage: require("../../assets/assisted-cob.png"),
            app_name: "Assisted Customer Onboarding"
        },

        {
            appImage: require("../../assets/hp-cob.png"),
            app_name: "HP Customer Onboarding"
        },
        {
            appImage: require("../../assets/yoma.png"),
            app_name: "Next App Self Onboarding"
        },
        {
            appImage: require("../../assets/rsu-cob.png"),
            app_name: "RSU Self Onboarding"
        },
        {
            appImage: require("../../assets/wave-yellow.png"),
            app_name: "Wave Agent Onboarding"
        },
        {
            appImage: require("../../assets/wave-blue.png"),
            app_name: "Wave Subscriber Onboarding"
        }
    ]

    const gridSize = 3;
    const gridData = data.concat(new Array(gridSize * gridSize - data.length).fill({ appImage: null, app_name: "" }));
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/tadingyut.png')} style={styles.image} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', right: '16%', bottom: 320 }}>Good Morning,Htoo Aung Lin❤️</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red', bottom: 310, right: '40%' }}>Services</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Centralized</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', bottom: 205, color: 'white', left: 5 }}>OnBoarding</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'yellow', left: 5, bottom: 190 }}>Head Office,Yoma</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', left: 5, bottom: 180 }}>Software Engineer</Text>
            </View>
            <View style={styles.grid}>
                {gridData.map((item, index) => (
                    <View key={index} style={styles.appContainer}>
                        <Surface style={styles.appItem}>
                            {item.appImage && <Image source={item.appImage} style={styles.appImage} />}
                            <Text style={styles.appName}>{item.app_name}</Text>
                        </Surface>
                    </View>
                ))}
            </View>



        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 220,
        display: 'flex'
    },
    image: {
        width: 400,
        height: 150,
        bottom: 320,
    },
    textContainer: {
        position: 'absolute',
        bottom: 750,
        top: 10,
        left: 0,
        right: 0,

    },
    text: {
        fontSize: 30,
        bottom: 200,
        fontWeight: 'bold',
        color: 'white',
       
        padding: 2,
        borderRadius: 5,
    },
    grid: {

        bottom: 230,
        margin: 20,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    appContainer: {
        alignItems: "center",
        width: '30%',
        marginBottom: 20,
        height: '50%',
    },
    appItem: {
        alignItems: "center",
        elevation: 4,
        bottom: 60,
        padding: 20,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    appImage: {
        width: 50,
        height: 60,
    },
    appName: {
        fontSize: 10,
        top: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 10,
    }
})
export default HomeScreen;