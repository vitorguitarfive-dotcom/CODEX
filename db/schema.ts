export const createDiagnosticLeadsTableSql = `
  CREATE TABLE IF NOT EXISTS diagnostic_leads (
    id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL,
    name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    profile TEXT NOT NULL,
    result_id TEXT NOT NULL,
    result_title TEXT NOT NULL,
    answers_json TEXT NOT NULL,
    source_url TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    status TEXT NOT NULL DEFAULT 'new'
  )
`;

export const createDiagnosticLeadsCreatedAtIndexSql = `
  CREATE INDEX IF NOT EXISTS idx_diagnostic_leads_created_at
  ON diagnostic_leads(created_at DESC)
`;

export const createDiagnosticLeadsResultIndexSql = `
  CREATE INDEX IF NOT EXISTS idx_diagnostic_leads_result_id
  ON diagnostic_leads(result_id)
`;
