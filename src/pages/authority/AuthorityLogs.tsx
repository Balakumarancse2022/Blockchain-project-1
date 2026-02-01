import { 
  LayoutDashboard, Users, Map, FileCheck, Link2, FileText
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", path: "/authority/dashboard", icon: LayoutDashboard },
  { label: "View Owners", path: "/authority/owners", icon: Users },
  { label: "View Lands", path: "/authority/lands", icon: Map },
  { label: "Document Verification", path: "/authority/verify", icon: FileCheck },
  { label: "Blockchain Logs", path: "/authority/logs", icon: Link2 },
  { label: "Patta Requests", path: "/authority/patta", icon: FileText },
];

const blockchainLogs = [
  { 
    blockId: "BLK-00892341",
    hash: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    timestamp: "2024-01-15 14:32:18",
    type: "OWNERSHIP_TRANSFER",
    landId: "TN-337/1",
    status: "CONFIRMED"
  },
  { 
    blockId: "BLK-00892340",
    hash: "0x3a7bd3e2360a3d29eea436fcfb7e44c735d117c42d1c1835420b6b9942dd4f1b",
    timestamp: "2024-01-15 13:45:02",
    type: "DOCUMENT_VERIFICATION",
    landId: "TN-452/2",
    status: "CONFIRMED"
  },
  { 
    blockId: "BLK-00892339",
    hash: "0x64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c",
    timestamp: "2024-01-15 12:18:45",
    type: "LAND_REGISTRATION",
    landId: "TN-567/8",
    status: "CONFIRMED"
  },
  { 
    blockId: "BLK-00892338",
    hash: "0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    timestamp: "2024-01-15 11:05:33",
    type: "AUTHORITY_APPROVAL",
    landId: "TN-128/3",
    status: "CONFIRMED"
  },
  { 
    blockId: "BLK-00892337",
    hash: "0x8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    timestamp: "2024-01-15 10:22:11",
    type: "QR_GENERATION",
    landId: "TN-789/4",
    status: "CONFIRMED"
  },
];

const AuthorityLogs = () => {
  return (
    <DashboardLayout
      title="Blockchain Logs"
      subtitle="Immutable transaction records"
      navItems={navItems}
      role="authority"
    >
      {/* Terminal-style Log Viewer */}
      <div className="glass-card overflow-hidden">
        <div className="bg-[#0d1117] p-4 border-b border-[#30363d]">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive/80" />
            <div className="h-3 w-3 rounded-full bg-warning/80" />
            <div className="h-3 w-3 rounded-full bg-primary/80" />
            <span className="ml-4 text-sm text-muted-foreground font-mono">
              blockchain-logs.securelandx.gov
            </span>
          </div>
        </div>
        
        <div className="bg-[#0d1117] p-6 max-h-[600px] overflow-auto">
          <div className="space-y-4 font-mono text-sm">
            {blockchainLogs.map((log, index) => (
              <div key={log.blockId} className="border-b border-[#30363d] pb-4 last:border-0">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <span className="text-primary">[{log.timestamp}]</span>
                  <span className="text-warning">{log.type}</span>
                </div>
                <div className="space-y-1 pl-4">
                  <p className="text-foreground">
                    <span className="text-muted-foreground">Block ID:</span>{" "}
                    <span className="text-info">{log.blockId}</span>
                  </p>
                  <p className="text-foreground break-all">
                    <span className="text-muted-foreground">Hash:</span>{" "}
                    <span className="text-primary/80">{log.hash}</span>
                  </p>
                  <p className="text-foreground">
                    <span className="text-muted-foreground">Land ID:</span>{" "}
                    <span className="text-foreground">{log.landId}</span>
                  </p>
                  <p className="text-foreground">
                    <span className="text-muted-foreground">Status:</span>{" "}
                    <span className="text-primary">✓ {log.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#161b22] p-4 border-t border-[#30363d]">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Total Blocks: 892,341</span>
            <span>Network: SecureLandX Mainnet</span>
            <span>Last Sync: 2 mins ago</span>
          </div>
        </div>
      </div>

      {/* Integrity Status */}
      <div className="mt-6 glass-card p-6 border-primary/30">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
            <Link2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Blockchain Integrity Verified</h3>
            <p className="text-sm text-muted-foreground">
              All blocks are cryptographically linked. No tampering detected. Chain validated 2 minutes ago.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AuthorityLogs;
