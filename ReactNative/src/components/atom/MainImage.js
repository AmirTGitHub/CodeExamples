import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get("window").width;
const MainImage = (props) => {
    return (
        <Image
            source={{ uri: "https://iranwire.com/" + props.mainImage }}
            style={styles.rowOneImage}
        />
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: screenWidth,
        aspectRatio: 1.77,
        resizeMode: "cover"
    },
})

export default MainImage
