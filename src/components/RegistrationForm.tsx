import { useState, ChangeEvent, FormEvent } from 'react';

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
        <div className="page-container">
            <div className="form-container">
                <div className="form-title">Регистрация</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="name"
                            placeholder="Имя"
                            value={state.name}
                            onChange={(e) => handleChange(e, 'name')}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={state.email}
                            onChange={(e) => handleChange(e, 'email')}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Телефон"
                            value={state.phone}
                            onChange={(e) => handleChange(e, 'phone')}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Пароль"
                            value={state.password}
                            onChange={(e) => handleChange(e, 'password')}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Повторите пароль"
                            value={state.confirmPassword}
                            onChange={(e) => handleChange(e, 'confirmPassword')}
                        />
                    </div>
                    <button type="submit">Приступить к работе</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
