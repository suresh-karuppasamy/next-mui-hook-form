import AuthForm from '@/components/Auth/AuthForm'

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm isSignUp={true} />
    </section>
  )
}

export default SignUp