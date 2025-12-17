import { login } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div>
      <form action={login}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Login</button>
        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
    </div>
  )
}