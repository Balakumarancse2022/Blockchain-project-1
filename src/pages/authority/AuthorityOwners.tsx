import { 
  LayoutDashboard, Users, Map, FileCheck, Link2, FileText,
  Eye, CheckCircle, XCircle, AlertTriangle
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", path: "/authority/dashboard", icon: LayoutDashboard },
  { label: "View Owners", path: "/authority/owners", icon: Users },
  { label: "View Lands", path: "/authority/lands", icon: Map },
  { label: "Document Verification", path: "/authority/verify", icon: FileCheck },
  { label: "Blockchain Logs", path: "/authority/logs", icon: Link2 },
  { label: "Patta Requests", path: "/authority/patta", icon: FileText },
];

const owners = [
  { 
    id: "OWN-001",
    name: "A. Manikandan", 
    mobile: "+91 98765 43210", 
    email: "manikandan@email.com",
    totalLands: 3, 
    status: "verified" as const 
  },
  { 
    id: "OWN-002",
    name: "S. Ramesh", 
    mobile: "+91 87654 32109", 
    email: "ramesh@email.com",
    totalLands: 2, 
    status: "verified" as const 
  },
  { 
    id: "OWN-003",
    name: "K. Lakshmi", 
    mobile: "+91 76543 21098", 
    email: "lakshmi@email.com",
    totalLands: 5, 
    status: "verified" as const 
  },
  { 
    id: "OWN-004",
    name: "R. Venkatesh", 
    mobile: "+91 65432 10987", 
    email: "venkatesh@email.com",
    totalLands: 1, 
    status: "pending" as const 
  },
  { 
    id: "OWN-005",
    name: "P. Sundaram", 
    mobile: "+91 54321 09876", 
    email: "sundaram@email.com",
    totalLands: 4, 
    status: "verified" as const 
  },
];

const AuthorityOwners = () => {
  return (
    <DashboardLayout
      title="View Owners"
      subtitle="Registered land owners in the system"
      navItems={navItems}
      role="authority"
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-foreground">156</p>
          <p className="text-xs text-muted-foreground">Total Owners</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-primary">148</p>
          <p className="text-xs text-muted-foreground">Verified</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-warning">8</p>
          <p className="text-xs text-muted-foreground">Pending Verification</p>
        </div>
      </div>

      {/* Owners Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">All Registered Owners</h2>
          <input 
            type="text" 
            placeholder="Search owners..." 
            className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm w-64"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Owner ID</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Owner Name</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Mobile</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Email</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Total Lands</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {owners.map((owner) => (
                <tr key={owner.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="p-4 text-sm font-mono text-foreground">{owner.id}</td>
                  <td className="p-4 text-sm font-medium text-foreground">{owner.name}</td>
                  <td className="p-4 text-sm text-muted-foreground">{owner.mobile}</td>
                  <td className="p-4 text-sm text-muted-foreground">{owner.email}</td>
                  <td className="p-4 text-sm text-center font-semibold text-foreground">{owner.totalLands}</td>
                  <td className="p-4">
                    <StatusBadge status={owner.status} />
                  </td>
                  <td className="p-4">
                    <Button size="sm" variant="ghost">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AuthorityOwners;
