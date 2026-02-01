import { 
  LayoutDashboard, Users, Map, FileCheck, Link2, Activity, FileText,
  Eye, CheckCircle, AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";

const navItems = [
  { label: "Dashboard", path: "/authority/dashboard", icon: LayoutDashboard },
  { label: "View Owners", path: "/authority/owners", icon: Users },
  { label: "View Lands", path: "/authority/lands", icon: Map },
  { label: "Document Verification", path: "/authority/verify", icon: FileCheck },
  { label: "Blockchain Logs", path: "/authority/logs", icon: Link2 },
  { label: "Patta Requests", path: "/authority/patta", icon: FileText },
];

const pendingVerifications = [
  { id: "DOC-001", owner: "A. Manikandan", landId: "TN-337/1", type: "Transfer", date: "2024-01-15" },
  { id: "DOC-002", owner: "S. Ramesh", landId: "TN-452/2", type: "Registration", date: "2024-01-14" },
  { id: "DOC-003", owner: "K. Lakshmi", landId: "TN-128/3", type: "Transfer", date: "2024-01-13" },
];

const systemActivity = [
  { id: 1, text: "New transfer request submitted", time: "10 mins ago", type: "info" },
  { id: 2, text: "Document verified for TN-337/1", time: "1 hour ago", type: "success" },
  { id: 3, text: "VAO assigned to transfer case", time: "2 hours ago", type: "processing" },
  { id: 4, text: "Blockchain record updated", time: "3 hours ago", type: "success" },
];

const AuthorityDashboard = () => {
  return (
    <DashboardLayout
      title="Authority Control Panel"
      subtitle="Government Verification & Surveillance"
      navItems={navItems}
      role="authority"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Registered Owners"
          value={156}
          subtitle="Active in system"
          icon={Users}
        />
        <StatCard
          title="Total Lands"
          value={342}
          subtitle="Under surveillance"
          icon={Map}
        />
        <StatCard
          title="Pending Verifications"
          value={12}
          subtitle="Awaiting review"
          icon={FileCheck}
        />
        <StatCard
          title="Blockchain Records"
          value="1.2K"
          subtitle="Immutable entries"
          icon={Link2}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Pending Verifications */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Pending Verifications</h2>
            <Link to="/authority/verify" className="text-sm text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {pendingVerifications.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-warning/20 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{doc.owner}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.landId} · {doc.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">{doc.date}</span>
                  <Link
                    to="/authority/verify"
                    className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Activity */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">System Activity</h2>
          </div>
          <div className="space-y-4">
            {systemActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`h-2 w-2 rounded-full mt-2 ${
                  activity.type === "success" ? "bg-primary" :
                  activity.type === "info" ? "bg-info" : "bg-warning"
                }`} />
                <div>
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "View Owners", icon: Users, path: "/authority/owners", count: "156" },
          { label: "View Lands", icon: Map, path: "/authority/lands", count: "342" },
          { label: "Verify Documents", icon: FileCheck, path: "/authority/verify", count: "12" },
          { label: "Blockchain Logs", icon: Link2, path: "/authority/logs", count: "1.2K" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="glass-card p-4 text-center glow-effect group"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{item.count} records</p>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AuthorityDashboard;
