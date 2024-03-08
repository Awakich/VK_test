import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import '@/app/index.css'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Layout>
            <App />
        </Layout>
    </Provider>
)