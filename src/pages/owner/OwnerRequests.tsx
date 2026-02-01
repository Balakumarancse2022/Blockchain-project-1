import { LayoutDashboard, Map, FileText, Plus, QrCode, Check, X, Eye } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", path: "/owner/dashboard", icon: LayoutDashboard },
  { label: "My Lands", path: "/owner/lands", icon: Map },
  { label: "Sell Requests", path: "/owner/requests", icon: FileText },
  { label: "Add Land", path: "/owner/add-land", icon: Plus },
  { label: "Generate QR", path: "/owner/qr", icon: QrCode },
];

const sellRequests = [
  { 
    id: "SR-001", 
    buyer: "Rajesh Kumar", 
    buyerContact: "+91 98765 43210",
    landId: "TN-337/1", 
    offeredPrice: "₹48,00,000",
    status: "pending" as const,
    date: "2024-01-15" 
  },
  { 
    id: "SR-002", 
    buyer: "Priya Sharma", 
    buyerContact: "+91 87654 32109",
    landId: "TN-452/2", 
    offeredPrice: "₹65,00,000",
    status: "pending" as const,
    date: "2024-01-14" 
  },
  { 
    id: "SR-003", 
    buyer: "Arun Patel", 
    buyerContact: "+91 76543 21098",
    landId: "TN-128/3", 
    offeredPrice: "₹40,00,000",
    status: "approved" as const,
    date: "2024-01-12" 
  },
  { 
    id: "SR-004", 
    buyer: "Meena Devi", 
    buyerContact: "+91 65432 10987",
    landId: "TN-789/4", 
    offeredPrice: "₹92,00,000",
    status: "processing" as const,
    date: "2024-01-10" 
  },
  { 
    id: "SR-005", 
    buyer: "Vijay Krishnan", 
    buyerContact: "+91 54321 09876",
    landId: "TN-234/5", 
    offeredPrice: "₹35,00,000",
    status: "rejected" as const,
    date: "2024-01-08" 
  },
];

const OwnerRequests = () => {
  return (
    <DashboardLayout
      title="Sell Requests"
      subtitle="Review and manage incoming purchase requests"
      navItems={navItems}
      role="owner"
    >
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-foreground">5</p>
          <p className="text-xs text-muted-foreground">Total Requests</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-warning">2</p>
          <p className="text-xs text-muted-foreground">Pending Review</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-primary">2</p>
          <p className="text-xs text-muted-foreground">Approved</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-destructive">1</p>
          <p className="text-xs text-muted-foreground">Rejected</p>
        </div>
      </div>

      {/* Requests Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">All Sell Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Request ID</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Buyer</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Land ID</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Offered Price</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Date</th>
                <th className="text-left text-sm font-medium text-muted-foreground p-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sellRequests.map((request) => (
                <tr key={request.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="p-4 text-sm font-mono text-foreground">{request.id}</td>
                  <td className="p-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{request.buyer}</p>
                      <p className="text-xs text-muted-foreground">{request.buyerContact}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-mono text-primary">{request.landId}</td>
                  <td className="p-4 text-sm font-semibold text-foreground">{request.offeredPrice}</td>
                  <td className="p-4">
                    <StatusBadge status={request.status} />
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{request.date}</td>
                  <td className="p-4">
                    {request.status === "pending" ? (
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
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

export default OwnerRequests;
