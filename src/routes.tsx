import { createBrowserRouter } from 'react-router-dom';
import {RegistrationPage} from "./pages/RegistrationPage";
import {SignInPage} from "./pages/SignInPage";
import {MainMenuPage} from "./pages/MainMenuPage";
import StartPage from "./pages/StartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StartPage />
    },
    {
        path: "/main",
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