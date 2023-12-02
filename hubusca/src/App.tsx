import { QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'
import { Client } from './hooks'


export function App() {

  return (
    <QueryClientProvider client={Client}>
        <AppRoutes />
        <GlobalStyle />
    </QueryClientProvider>
  )
}

