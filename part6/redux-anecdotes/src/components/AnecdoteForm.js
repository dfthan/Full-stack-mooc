import { useDispatch } from 'react-redux'
import { postAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()


    const addAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ""
        dispatch(postAnecdote(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote" />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm