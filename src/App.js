import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Container from './components/Container/Container';
import '@pnotify/core/dist/BrightTheme.css';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName:"HomePage" */));
const RegisterPage = lazy(() => import('./views/RegisterPage' /* webpackChunkName:"MoviesPage" */));
const LoginPage = lazy(() => import('./views/LoginPage' /* webpackChunkName:"MovieDetailsPage" */));
const ContactsPage = lazy(() => import('./views/ContactsPage' /* webpackChunkName:"MovieDetailsPage" */));


// const useLocalStorage = (key, defaultValue) => {
//    const [state, setState] = useState(() => {
//        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
//    });
//     return [state, setState].
// };


export default function App() {

     return (
       <Container>
         <AppBar />
         
         <Suspense fallback="waiting...">
           <Switch>
             <Route path="/" exact>
               <HomePage />
             </Route>
             
             <Route path="/login" exact>
               <LoginPage />
             </Route>
             
             <Route path="/register" exact>
               <RegisterPage />
             </Route>
             
             <Route path="/contacts" exact>
               <ContactsPage />
             </Route>
             
             <Route>
               <HomePage />
             </Route>
           </Switch>
         </Suspense>
    </Container>        
    );
};