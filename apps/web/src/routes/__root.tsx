import Header from '@/components/header';
import Loader from '@/components/loader';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import '../index.css';

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: 'portfolio-blog'
      },
      {
        name: 'description',
        content: 'portfolio-blog is a web application'
      }
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  })
});

function RootComponent() {
  const isFetching = useRouterState({
    select: (s) => s.isLoading
  });

  const router = useRouter();
  const currentRoute = router.state.location.pathname;
  const isHome = currentRoute === '/';

  return (
    <>
      <HeadContent />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        <div className="min-h-screen flex justify-center items-center  ">
          <div className="grid grid-rows-[auto_1fr] h-svh  max-w-7xl w-full">
            {!isHome && <Header />}
            {isFetching ? <Loader /> : <Outlet />}
          </div>
        </div>
        <Toaster richColors />
      </ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
