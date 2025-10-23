import { ThemeProvider } from "@/context/ThemeProvider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <ThemeProvider defaultTheme="light">
    <Outlet />
    <TanStackRouterDevtools />
  </ThemeProvider>
);

export const Route = createRootRoute({
  component: RootLayout,
});
