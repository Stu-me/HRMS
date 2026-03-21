import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { checkHealth } from "../services/api";
import { COLORS } from "../constants/colors";

export default function MainLayout({ children }) {
  const [healthy, setHealthy] = useState(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    let mounted = true;

    const ping = async () => {
      setChecking(true);
      try {
        const res = await checkHealth();
        if (mounted) setHealthy(res.status === 200);
      } catch (err) {
        if (mounted) setHealthy(false);
      } finally {
        if (mounted) setChecking(false);
      }
    };

    ping();
    const id = setInterval(ping, 15000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'transparent' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <button
            disabled={checking}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.9rem',
              borderRadius: '999px',
              border: `1px solid ${healthy ? 'rgba(22, 163, 74, 0.35)' : 'rgba(239, 68, 68, 0.35)'}`,
              background: healthy ? 'rgba(22, 163, 74, 0.12)' : 'rgba(239, 68, 68, 0.12)',
              color: healthy ? '#bbf7d0' : '#fecdd3',
              boxShadow: healthy ? '0 0 12px rgba(22, 163, 74, 0.25)' : '0 0 12px rgba(239, 68, 68, 0.25)',
              cursor: checking ? 'wait' : 'default',
              minWidth: '140px',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: healthy ? COLORS.status.success : COLORS.status.error,
                boxShadow: healthy
                  ? '0 0 10px rgba(16, 185, 129, 0.8)'
                  : '0 0 10px rgba(239, 68, 68, 0.8)',
              }}
            />
            {healthy === null ? 'Checking…' : healthy ? 'Server Live' : 'Server Down'}
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
