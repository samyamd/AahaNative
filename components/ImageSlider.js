import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";

const ImageSlider = () => {
    const img = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        require('../assets/logo.png'),
    ]
    return (
        <View>
            <SliderBox
                images={img}
                autoplay={true}
                circleLoop
                dotColor={"#0163d2"}
                onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
            />

        </View>
    )
}

export default ImageSlider

const styles = StyleSheet.create({})
