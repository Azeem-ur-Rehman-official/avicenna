import { createClient } from "@supabase/supabase-js";
const url = "https://cmjydyjfpsjslzablqld.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtanlkeWpmcHNqc2x6YWJscWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NDM1ODIsImV4cCI6MjAzOTMxOTU4Mn0.PoZxPPgSwCgiXYVsMTi-OqIw8qUHaDgxOK7NqPFKxkM";
export const supabase = createClient(url, key);
