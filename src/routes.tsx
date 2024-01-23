import { createBrowserRouter } from 'react-router-dom';
import {RegistrationPage} from "./pages/RegistrationPage";
import {SignInPage} from "./pages/SignInPage";
import {MainMenuPage} from "./pages/MainMenuPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage />
    },
    {
        path: "/main-menu",
        element: <MainMenuPage />
    },
    {
        path: '/registration',
        element: <RegistrationPage />,
    },

]);