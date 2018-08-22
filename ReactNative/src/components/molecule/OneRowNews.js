import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import SmallImage from '../atom/SmallImage'
import Title from '../atom/Title'

const OneRowNews = () => {
    return (
        <TouchableOpacity
            style={styles.rowOne}
            onPress={() => this.handlePress(news[1].pk)}
        >
            <View style={styles.rowOneTextImage}>
                <SmallImage image={props.image} />
                <Title title={news[1].title} style={styles.title} />

                <Text style={styles.rowOneTitle}>{news[1].title}</Text>
            </View>
            <View style={[styles.dateAndCat, styles.firstRowDate]}>
                <Text style={styles.dateText}>
                    {moment(news[1].pub_date).format(" jD jMMMM  jYY")}
                </Text>
                <Text style={styles.greenText}>{news[1].category}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rowOneTitle: {
        height: 80,
        fontFamily: "IranSansB",
        width: screenWidth - 140,
        alignSelf: "center",
        paddingHorizontal: 10,
        textAlign: "right",
        marginRight: 10
    },
    rowOneTextImage: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
})
export default OneRowNews
