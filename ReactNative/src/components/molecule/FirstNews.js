import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Title from '../atom/Title'
import MainImage from '../atom/MainImage'
import AutherAndDate from './AuthorAndDate'
import AuthorAndDate from './AuthorAndDate';

const FirstNews = props => {

    return (
        <TouchableOpacity onPress={props.handlePress}>
            <MainImage mainImage={props.mainImage} />
            <Title title={props.title} />
            <AuthorAndDate pubDate={props.pubDate} category={props.category} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({})




export default FirstNews
