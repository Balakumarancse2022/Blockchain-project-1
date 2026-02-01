import { LayoutDashboard, Map, FileText, Clock, QrCode, CheckCircle, Circle, ArrowRight } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const navItems = [
  { label: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
  { label: "View Lands", path: "/user/lands", icon: Map },
  { label: "My Requests", path: "/user/requests", icon: FileText },
  { label: "Status Tracking", path: "/user/tracking", icon: Clock },
  { label: "QR Verify", path: "/qr-verify", icon: QrCode },
];

const trackingSteps = [
  { id: 1, title: "Request Submitted", description: "Your buy request has been submitted", completed: true, date: "Jan 10, 2024" },
  { id: 2, title: "Visit Completed", description: "Site visit completed successfully", completed: true, date: "Jan 12, 2024" },
  { id: 3, title: "Buy Request Accepted", description: "Owner has accepted your buy request", completed: true, date: "Jan 14, 2024" },
  { id: 4, title: "Documents Submitted", description: "Required documents have been submitted", completed: true, date: "Jan 15, 2024" },
  { id: 5, title: "VAO Assigned", description: "Village Administrative Officer assigned", completed: true, date: "Jan 16, 2024" },
  { id: 6, title: "Authority Approved", description: "Government authority has approved the transfer", completed: false, date: "Pending" },
  { id: 7, title: "Ownership Transferred", description: "Blockchain record updated with new ownership", completed: false, date: "Pending" },
];

const UserTracking = () => {
  return (
    <DashboardLayout
      title="Status Tracking"
      subtitle="Track your land transfer progress"
      navItems={navItems}
      role="user"
    >
      {/* Active Transfer Card */}
      <div className="glass-card p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Active Transfer</h2>
            <p className="text-sm text-muted-foreground">Land ID: TN-337/1</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Estimated Completion</p>
            <p className="text-lg font-semibold text-primary">15-20 days</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Progress</span>
            <span>5 of 7 steps completed</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(5 / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {trackingSteps.map((step, index) => (
            <div key={step.id} className="flex gap-4 pb-8 last:pb-0">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  step.completed 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </div>
                {index < trackingSteps.length - 1 && (
                  <div className={`w-0.5 flex-1 mt-2 ${
                    step.completed ? "bg-primary" : "bg-border"
                  }`} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium ${
                    step.completed ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </h3>
                  <span className={`text-xs ${
                    step.completed ? "text-muted-foreground" : "text-primary"
                  }`}>
                    {step.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blockchain Integrity Note */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Blockchain Secured</h3>
            <p className="text-sm text-muted-foreground">
              All transfer steps are recorded on the blockchain. Once ownership is transferred, 
              the data becomes immutable and cannot be altered or deleted.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserTracking;
