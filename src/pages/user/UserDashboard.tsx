import { LayoutDashboard, Map, FileText, Clock, QrCode } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
  { label: "View Lands", path: "/user/lands", icon: Map },
  { label: "My Requests", path: "/user/requests", icon: FileText },
  { label: "Status Tracking", path: "/user/tracking", icon: Clock },
  { label: "QR Verify", path: "/qr-verify", icon: QrCode },
];

const recentRequests = [
  { id: "TN-337/1", owner: "A. Manikandan", status: "processing" as const, date: "2024-01-15" },
  { id: "TN-452/2", owner: "S. Ramesh", status: "approved" as const, date: "2024-01-14" },
  { id: "TN-128/3", owner: "K. Lakshmi", status: "pending" as const, date: "2024-01-12" },
];

const UserDashboard = () => {
  return (
    <DashboardLayout
      title="SecureLandX"
      subtitle="Buyer Dashboard"
      navItems={navItems}
      role="user"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Available Lands"
          value={48}
          subtitle="In your search area"
          icon={Map}
        />
        <StatCard
          title="My Requests"
          value={5}
          subtitle="Active requests"
          icon={FileText}
        />
        <StatCard
          title="Pending Visits"
          value={2}
          subtitle="Scheduled this week"
          icon={Clock}
        />
        <StatCard
          title="Verified Lands"
          value={3}
          subtitle="QR verified"
          icon={QrCode}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link to="/user/lands" className="glass-card p-6 glow-effect group">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Map className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Browse Lands</h3>
              <p className="text-sm text-muted-foreground">Explore verified land listings</p>
            </div>
          </div>
        </Link>
        
        <Link to="/qr-verify" className="glass-card p-6 glow-effect group">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <QrCode className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Verify Land</h3>
              <p className="text-sm text-muted-foreground">Scan QR to verify ownership</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Requests */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Recent Requests</h2>
          <Link to="/user/requests" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-sm font-medium text-muted-foreground pb-3">Land ID</th>
                <th className="text-left text-sm font-medium text-muted-foreground pb-3">Owner</th>
                <th className="text-left text-sm font-medium text-muted-foreground pb-3">Status</th>
                <th className="text-left text-sm font-medium text-muted-foreground pb-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentRequests.map((request) => (
                <tr key={request.id}>
                  <td className="py-4 text-sm font-mono text-foreground">{request.id}</td>
                  <td className="py-4 text-sm text-foreground">{request.owner}</td>
                  <td className="py-4">
                    <StatusBadge status={request.status} />
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{request.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
