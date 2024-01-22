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
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

function RegistrationForm() {
    const [state, setState] = useState<State>({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
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
                    <FormTitle>Регистрация</FormTitle>
                    <StyledForm onSubmit={handleSubmit}>
                        <StyledInput
                            type="text"
                            id="name"
                            placeholder="Имя"
                            value={state.name}
                            onChange={(e) => handleChange(e, 'name')}
                        />
                        <StyledInput
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={state.email}
                            onChange={(e) => handleChange(e, 'email')}
                        />
                        <StyledInput
                            type="tel"
                            id="phone"
                            placeholder="Телефон"
                            value={state.phone}
                            onChange={(e) => handleChange(e, 'phone')}
                        />
                        <StyledInput
                            type="password"
                            id="password"
                            placeholder="Пароль"
                            value={state.password}
                            onChange={(e) => handleChange(e, 'password')}
                        />
                        <StyledInput
                            type="password"
                            id="confirmPassword"
                            placeholder="Повторите пароль"
                            value={state.confirmPassword}
                            onChange={(e) => handleChange(e, 'confirmPassword')}
                        />
                        <SubmitButton type="submit">Приступить к работе</SubmitButton>
                    </StyledForm>
                </FormContainer>
            </PageContainer>
        </>

    );
}

export default RegistrationForm;

