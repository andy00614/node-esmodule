import Home from '@/pages/Home';
import Resume from '@/pages/Resume'

interface IRouter {
  path: string;
  element: JSX.Element;
}

const router: Array<IRouter> = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/resume',
    element: <Resume />
  }
]

export default router
