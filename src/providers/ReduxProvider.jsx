'use client'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

function ReduxProvider() {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default ReduxProvider