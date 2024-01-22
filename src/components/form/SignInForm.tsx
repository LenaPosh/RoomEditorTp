import {ChangeEvent, FormEvent, useState} from 'react';
import {
    PageContainer,
    FormContainer,
    FormTitle,
    StyledForm,
    StyledInput,
    SubmitButton, GlobalStyle
} from './FormStyles';
interface State {
    email: string;
    password: string;
}

function SignInForm() {
    const [state, setState] = useState<State>({
        email: '',
        password: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        field: keyof State
    ) => {
        setState({
            ...state,
            [field]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <>
            <GlobalStyle/>
            <PageContainer>
                <FormContainer>
                    <FormTitle>Авторизация</FormTitle>
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledInput
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={state.email}
                            onChange={(e) => handleChange(e, 'email')}
                        />
                        <StyledInput
                            type="password"
                            id="password"
                            placeholder="Пароль"
                            value={state.password}
                            onChange={(e) => handleChange(e, 'password')}
                        />
                        <SubmitButton type="submit">Войти</SubmitButton>
                    </StyledForm>
                </FormContainer>
            </PageContainer>
        </>

    );
}

export default SignInForm;
