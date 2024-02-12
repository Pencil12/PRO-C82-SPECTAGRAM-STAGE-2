import React, { Component } from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View style={style.contianer} >
            <SafeAreaView style={style.droidSafeArea}/>
            <View style={style.appTitle}>
            <View style={style.appIcon}>
                <Image
                    source={require("../assets/logo.png")}
                    style={style.iconImage}
                    ></Image>
                </View>
                <View style={style.appTitleTextContianer}>
                    <Text style={style.appTitleText}>Spectagram</Text>
                </View>    
            </View>
        <View style={style.cardContainer}>
            <FlatList
                keyExtractor={this.keyExtractor}
                data={post}
                renderItem={this.renderItem}
                />
        </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroudCikir: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : CSSVariableReferenceValue(35)
    },
    appTitle: {
        flex: .07,
        flexDirection: "row"
    },
    appIcon: {
        flex: .02,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        widtj: "100%",
        height: "100%",
        resizeMode: "contian"
    },
    appTitleTextContianer: {
        flex: .8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RValue(28),
    },
    cardContainer: {
        flex:0.05
    }
})