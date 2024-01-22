import { createBrowserRouter } from 'react-router-dom';
import {RegistrationPage} from "./pages/RegistrationPage";
import {SignInPage} from "./pages/SignInPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage />
    },
    {
        path: '/registration',
        element: <RegistrationPage />,
    },

]);