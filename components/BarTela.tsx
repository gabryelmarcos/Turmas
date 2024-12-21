import { Stack, Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react'
export default function BarTela() {
    return(
        
        <View style={styles.bar} >
            <Image source={require('~/assets/arrow.png')} />
            <Image source={require('~/assets/Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start', 
        position: 'absolute',     
        top: 100,                  
        left: 0,
        right: 0,
        paddingHorizontal: 20,    
        marginTop: 40, 
      },
})