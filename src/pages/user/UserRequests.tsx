import { LayoutDashboard, Map, FileText, Clock, QrCode, Eye, X, Check } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
  { label: "View Lands", path: "/user/lands", icon: Map },
  { label: "My Requests", path: "/user/requests", icon: FileText },
  { label: "Status Tracking", path: "/user/tracking", icon: Clock },
  { label: "QR Verify", path: "/qr-verify", icon: QrCode },
];

const requests = [
  { 
    id: "REQ-001", 
    landId: "TN-337/1", 
    owner: "A. Manikandan", 
    status: "processing" as const, 
    statusLabel: "Authority Verification",
    date: "2024-01-15",
    action: "view"
  },
  { 
    id: "REQ-002", 
    landId: "TN-452/2", 
    owner: "S. Ramesh", 
    status: "approved" as const, 
    statusLabel: "Owner Approved",
    date: "2024-01-14",
    action: "proceed"
  },
  { 
    id: "REQ-003", 
    landId: "TN-128/3", 
    owner: "K. Lakshmi", 
    status: "pending" as const, 
    statusLabel: "Visit Scheduled",
    date: "2024-01-12",
    action: "view"
  },
  { 
    id: "REQ-004", 
    landId: "TN-789/4", 
    owner: "R. Venkatesh", 
    status: "completed" as const, 
    statusLabel: "Ownership Transferred",
    date: "2024-01-10",
    action: "certificate"
  },
  { 
    id: "REQ-005", 
    landId: "TN-234/5", 
    owner: "P. Sundaram", 
    status: "rejected" as const, 
    statusLabel: "Buy Request Rejected",
    date: "2024-01-08",
    action: null
  },
];

const UserRequests = () => {
  return (
    <DashboardLayout
      title="My Requests"
      subtitle="Track your land purchase requests"
      navItems={navItems}
      role="user"
    >
      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {[
          { label: "Total Requests", value: 5, color: "text-foreground" },
          { label: "Pending", value: 1, color: "text-warning" },
          { label: "Processing", value: 1, color: "text-info" },
          { label: "Approved", value: 2, color: "text-primary" },
          { label: "Rejected", value: 1, color: "text-destructive" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-4 text-center">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Requests Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">All Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Request ID</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Land ID</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Owner</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Date</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="p-4 text-sm font-mono text-foreground">{request.id}</td>
                  <td className="p-4 text-sm font-mono text-primary">{request.landId}</td>
                  <td className="p-4 text-sm text-foreground">{request.owner}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <StatusBadge status={request.status} />
                      <p className="text-xs text-muted-foreground">{request.statusLabel}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{request.date}</td>
                  <td className="p-4">
                    {request.action === "view" && (
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    )}
                    {request.action === "proceed" && (
                      <Button size="sm">
                        <Check className="h-4 w-4 mr-1" />
                        Proceed
                      </Button>
                    )}
                    {request.action === "certificate" && (
                      <Button variant="outline" size="sm" className="text-primary">
                        Download Certificate
                      </Button>
                    )}
                    {!request.action && (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
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

export default UserRequests;
