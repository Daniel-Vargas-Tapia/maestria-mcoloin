import { createClient } from '@supabase/supabase-js'
const DATABASE_URL = 'https://zjcrnpisfufozpubspzy.supabase.co'
const ANON_PUBLIC = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqY3JucGlzZnVmb3pwdWJzcHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxMTg0NTQsImV4cCI6MjAwOTY5NDQ1NH0.Jzj5W5cfh46bHME7TZ76IxQyEihW4PmH4hyVfoIyJpQ'
export const supabase = createClient(DATABASE_URL, ANON_PUBLIC)
