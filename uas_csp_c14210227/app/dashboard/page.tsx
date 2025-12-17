import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: announcements } = await supabase.from('announcements').select()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}</p>

      <h2>Announcements</h2>
      <ul>
        {announcements?.map((announcement) => (
          <li key={announcement.id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}