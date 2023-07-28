import { createClient } from '@supabase/supabase-js'

const supabase_url = 'https://phqmhovulchjwssxvtkv.supabase.co'
const anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocW1ob3Z1bGNoandzc3h2dGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1MjExMjEsImV4cCI6MjAwNjA5NzEyMX0.xoUWa0WDzYD83uh-7hEWlfGblLDSwErkKEcr7lAwKu4'

export const supabase = createClient(supabase_url, anon_key)

