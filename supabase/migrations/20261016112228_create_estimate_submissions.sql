/*
# Create estimate_requests table (single-tenant, no auth)

1. New Tables
- `estimate_requests`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — customer's full name
  - `phone` (text, not null) — customer's phone number
  - `email` (text, not null) — customer's email address
  - `service_requested` (text, not null) — the service the customer is interested in
  - `property_type` (text) — residential, commercial, etc.
  - `project_location` (text) — ZIP code or city of the project
  - `description` (text, not null) — description of the electrical issue or project
  - `preferred_contact` (text) — phone, email, or either
  - `status` (text, default 'new') — for tracking: new, contacted, completed
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `estimate_requests`.
- Allow anon + authenticated INSERT only (public can submit estimates).
- No SELECT, UPDATE, or DELETE for anon/authenticated (only service role can manage).
*/

CREATE TABLE IF NOT EXISTS estimate_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_requested text NOT NULL,
  property_type text,
  project_location text,
  description text NOT NULL,
  preferred_contact text DEFAULT 'either',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE estimate_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_estimates" ON estimate_requests;
CREATE POLICY "anon_insert_estimates" ON estimate_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_estimates" ON estimate_requests;
DROP POLICY IF EXISTS "anon_update_estimates" ON estimate_requests;
DROP POLICY IF EXISTS "anon_delete_estimates" ON estimate_requests;
