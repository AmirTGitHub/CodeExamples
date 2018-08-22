import React from 'react'
import { Image, StyleSheet } from 'react-native';

const SmallImage = () => {
    return (
        <Image
            source={{ uri: "https://iranwire.com/" + props.image }}
            style={styles.rowOneImage}
        />
    )
}

const styles = StyleSheet.create({
    rowOneImage: {
        marginTop: 10,
        width: 150,
        aspectRatio: 1.77,
        resizeMode: "cover",
        marginLeft: 15
    }
})
export default SmallImage
