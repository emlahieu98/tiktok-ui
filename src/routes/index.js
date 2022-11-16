/* Pages */
import Home from '../pages/Home/index'
import Following from '../pages/Following/index'
import Upload from '../pages/Upload'
import Profile from '../pages/Profile'
import Search from '../pages/Search'

/* Layout */
import { HeaderOnly } from '../components/Layout'

/* public routers */
export const publicRoutes = [
    { path: '', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]
export const privateRoutes = []
