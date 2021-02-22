import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { v4 as uuidv4 } from 'uuid';

const indexScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create Screen')}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            ),
        })
    }, [])

    const { state, deleeBlogPost, getBlogPosts } = useContext(Context)

    useEffect(() => {
        getBlogPosts()
        const Lisener = navigation.addListener('focus', () => {
            getBlogPosts()
        })
        return () => {
            Lisener.remove()
        }
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.id}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleeBlogPost(item.id)}>
                                <Text style={styles.X}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>)
                }}
            />
        </View>
    )
}




export default indexScreen

const styles = StyleSheet.create({
    row: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18,
    },
    X: {
        paddingHorizontal: 5,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    plus: {
        fontSize: 28,
        paddingRight: 20,
    }
})
