import React, { Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue} from "react-native-responsive-fontsize"

export default class PostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     componentDidMount() { }

     render() {
        reuturn (
            <View style={style.container}>
                <View style={StyleSheet.cardContainer}>
                    <View style={StyleSheet.authorContainer}>
                        <View style={StyleSheet.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                                ></Image>
                        </View>
                        <View style={style.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={required("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={style.captionContainer}>
                        <Text style={style.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={style.captionContainer}>
                        <View style={style.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={style.likeText}>12k</Text>
                        </View>
                        </View>    
                </View>
            </View>
        )
     }
}