import { ThemeProvider } from '@/context/ThemeProvider'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <ThemeProvider defaultTheme="light">
    <Outlet />
    <TanStackRouterDevtools />
    <p className="text-sm text-center pb-2">
      {`© ${new Date().getFullYear()}. Todos os direitos reservados aos autores. `}
      Caso algum conteúdo deva ser removido ou creditado de forma diferente, entre em contato{' '}
      <a href="mailto:lucasfernandes.contato@outlook.com" className="text-blue-600 underline">
        aqui
      </a>
      .
    </p>
  </ThemeProvider>
)

export const Route = createRootRoute({
  component: RootLayout,
})
