import React, { useContext ,useLayoutEffect } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ route , navigation}) => {
    const { id } = route.params
    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit' ,{id: id})}>
                    <Text style={styles.plus}>Edit</Text>
                </TouchableOpacity>
            ),
        })
    }, [])

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({
    plus: {
        fontSize: 20,
        paddingRight: 20,
    }
})
