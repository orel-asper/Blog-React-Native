import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'



const BlogPostForm = ({ onSubmit , initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View>
            <Text style={styles.lable}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.lable}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
            <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
        </View>
    )
}


export default BlogPostForm

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    },
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    lable: {
        fontSize: 20,
        marginBottom: 10,
        borderColor: '#ccc',
        marginLeft: 5,
    }
})
