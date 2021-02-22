import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer';



const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'get_blogposts':
            return action.payload
        default:
            return state
    }
}


const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        // dispatch({ type: 'add_blogpost', payload: { title, content } })
        callback ? callback() : null
    }
}


const deleeBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}
const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content })
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content },
        })
        callback ? callback() : null
    }
}

export const { Context, Provider } = createDataContext(BlogReducer, { addBlogPost, deleeBlogPost, editBlogPost, getBlogPosts }, [])

