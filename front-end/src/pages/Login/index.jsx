function Login() {
  return (
    <div>
      <input
        data-testid="common_login__input-email"
      />
      <input
        data-testid="common_login__input-password"
      />

      <button
        data-testid="common_login__button-login"
        type="button"
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>

    </div>
  );
}

export default Login;
