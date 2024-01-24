import { createBrowserRouter } from 'react-router-dom';
import {RegistrationPage} from "./pages/RegistrationPage";
import {SignInPage} from "./pages/SignInPage";
import {MainMenuPage} from "./pages/MainMenuPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMenuPage />
    },
    {
        path: "/signin",
        element: <SignInPage />
    },
    {
        path: '/registration',
        element: <RegistrationPage />,
    },

]);