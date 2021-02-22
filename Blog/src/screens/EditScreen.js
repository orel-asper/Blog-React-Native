import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'


const EditScreen = ({ route, navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    const { id } = route.params
    const blogPost = state.find(post => post.id === id)

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.goBack())

            }} />
    )
}

export default EditScreen

const styles = StyleSheet.create({})
