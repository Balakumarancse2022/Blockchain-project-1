import { saveAs } from "file-saver";
import {
  LayoutDashboard,
  Map,
  FileText,
  QrCode,
  Clock,
  Shield,
  Plus,
  Download,
  Book,
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/ui/StatCard";
import { Button } from "@/components/ui/button";

/* ---------------- Navigation ---------------- */
const navItems = [
  { label: "Dashboard", path: "/owner/dashboard", icon: LayoutDashboard },
  { label: "My Lands", path: "/owner/lands", icon: Map },
  { label: "Sell Requests", path: "/owner/requests", icon: FileText },
  { label: "Add Land", path: "/owner/add-land", icon: Plus },
  { label: "Generate QR", path: "/owner/qr", icon: QrCode },
  { label: "Patta Requests", path: "/owner/patta-request", icon: Book },
];

/* ---------------- Recent Activity ---------------- */
const recentActivity = [
  { id: 1, text: "Land TN-337/1 verified by authority", time: "2 hours ago", type: "success" },
  { id: 2, text: "OCR & QR validation completed for TN-452/2", time: "5 hours ago", type: "success" },
  { id: 3, text: "Sell request received from buyer Rajesh K.", time: "1 day ago", type: "info" },
  { id: 4, text: "Buyer requested site visit for TN-128/3", time: "2 days ago", type: "info" },
  { id: 5, text: "Authority verification started for transfer", time: "3 days ago", type: "processing" },
  { id: 6, text: "VAO & Revenue Inspector assigned", time: "3 days ago", type: "processing" },
];

/* ---------------- Quick Actions ---------------- */
const quickActions = [
  { label: "Add Land", icon: Plus, path: "/owner/add-land", description: "Register new property" },
  { label: "View My Lands", icon: Map, path: "/owner/lands", description: "Manage your properties" },
  { label: "Generate QR", icon: QrCode, path: "/owner/qr", description: "Create verification codes" },
];

/* ---------------- Report Data ---------------- */
const ownerReportData = [
  {
    landId: "TN-337/1",
    location: "Chennai",
    area: "2400 sqft",
    status: "Verified",
    blockchainHash: "0x9a7f...21ab",
  },
  {
    landId: "TN-452/2",
    location: "Coimbatore",
    area: "1800 sqft",
    status: "Transfer In Progress",
    blockchainHash: "0x8bc3...9f22",
  },
];

const OwnerDashboard = () => {
  /* ---------------- Download Report ---------------- */
  const downloadOwnerReport = () => {
    const headers = ["Land ID", "Location", "Area", "Status", "Blockchain Hash"];

    const rows = ownerReportData.map((land) => [
      land.landId,
      land.location,
      land.area,
      land.status,
      land.blockchainHash,
    ]);

    const csvContent =
      "SecureLandX - Owner Land Report\n\n" +
      headers.join(",") +
      "\n" +
      rows.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "SecureLandX_Owner_Report.csv");
  };

  return (
    <DashboardLayout
      title="SecureLandX · Land Ownership & Transfer Control Panel"
      navItems={navItems}
      role="owner"
    >
      {/* Header Actions */}
      <div className="flex justify-end gap-3 mb-6">
        <Button variant="outline" size="sm" onClick={downloadOwnerReport}>
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>

        <Button size="sm" asChild>
          <Link to="/owner/add-land">
            <Plus className="h-4 w-4 mr-2" />
            Add New Land
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Lands Registered" value={12} subtitle="Verified & Active" icon={Map} />
        <StatCard
          title="Sell Requests"
          value={5}
          subtitle="Pending approvals"
          icon={FileText}
          trend={{ value: "+2 this week", positive: true }}
        />
        <StatCard title="Transfers in Progress" value={3} subtitle="Authority stage" icon={Clock} />
        <StatCard title="Completed Transfers" value={4} subtitle="Blockchain secured" icon={Shield} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 pb-4 border-b border-border last:border-0"
              >
                <div
                  className={`h-2 w-2 rounded-full mt-2 ${
                    activity.type === "success"
                      ? "bg-primary"
                      : activity.type === "info"
                      ? "bg-info"
                      : "bg-warning"
                  }`}
                />
                <div>
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.path}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <action.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blockchain Integrity */}
      <div className="glass-card p-6 border-primary/30">
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Blockchain Integrity</h3>
            <p className="text-sm text-muted-foreground">
              All ownership records are hashed and stored on blockchain. Once a
              transfer is completed, data becomes immutable and tamper-proof.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OwnerDashboard;
