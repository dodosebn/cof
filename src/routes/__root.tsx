import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '@/components/footer'


export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      {/* Main content area */}
      <main className="flex-grow overflow-y-auto">
        <Outlet />
      </main>

      <Footer />

      <TanStackRouterDevtools />
    </div>
  ),
});

