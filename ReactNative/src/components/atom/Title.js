import React from 'react'

import { Text, StyleSheet } from 'react-native';


const Title = (props) => {
    return (
        <Text style={[styles.title, props.style]}>{props.title}</Text>
    )
}

export default Title
const styles = StyleSheet.create({
    title: {
        fontFamily: "IranSansB",
        fontSize: 20,
        textAlign: "right",
        padding: 20
    }
})