import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_JOBBOS = 'GOT_JOBBOS'

/**
 * INITIAL STATE
 */
const defaultJobbos = []

/**
 * ACTION CREATORS
 */
const gotJobbos = jobbos => ({
  type: GOT_JOBBOS,
  jobbos
})

/**
 * THUNK CREATORS
 */
export const getJobbosFromServer = () => async dispatch => {
  try {
    const res = await axios.get('/api/jobbos')
    dispatch(gotJobbos(res.data || defaultJobbos))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultJobbos, action) {
  switch (action.type) {
    case GOT_JOBBOS:
      return action.jobbos
    default:
      return state
  }
}
