import LoginForm from '@/components/Auth/LoginForm'

const Login = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log('Login attempt:', email, password);
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default Login; 