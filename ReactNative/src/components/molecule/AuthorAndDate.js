import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
moment.loadPersian({ usePersianDigits: true });


const AuthorAndDate = (props) => {
    return (
        <View style={styles.authorDate}>
            <Text style={styles.date}>
                {" "}
                | {moment(props.pubDate).format(" jD jMMMM  jYY")}
            </Text>
            <Text style={styles.category}>
                {props.category}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    authorDate: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginHorizontal: 20
    },
    date: {
        color: "black",
        fontFamily: "IranSansR"
    },
    category: {
        color: "#76a56f",
        fontFamily: "IranSansB"

    }
})
export default AuthorAndDate

