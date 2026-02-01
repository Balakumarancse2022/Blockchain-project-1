import { useState } from "react";
import { LayoutDashboard, Map, FileText, Clock, QrCode, MapPin, Calendar, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const navItems = [
  { label: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
  { label: "View Lands", path: "/user/lands", icon: Map },
  { label: "My Requests", path: "/user/requests", icon: FileText },
  { label: "Status Tracking", path: "/user/tracking", icon: Clock },
  { label: "QR Verify", path: "/qr-verify", icon: QrCode },
];

const lands = [
  {
    id: "TN-337/1",
    location: "Thiruvanmiyur, Chengalpattu",
    owner: "A. Manikandan",
    area: "2.5 Acres",
    type: "Dry Land",
    price: "₹45,00,000",
    estimatedTime: "45-60 days",
    verified: true,
  },
  {
    id: "TN-452/2",
    location: "Kelambakkam, Kanchipuram",
    owner: "S. Ramesh",
    area: "1.8 Acres",
    type: "Wet Land",
    price: "₹62,00,000",
    estimatedTime: "30-45 days",
    verified: true,
  },
  {
    id: "TN-128/3",
    location: "Mamallapuram, Chengalpattu",
    owner: "K. Lakshmi",
    area: "3.2 Acres",
    type: "Agricultural",
    price: "₹38,00,000",
    estimatedTime: "60-75 days",
    verified: true,
  },
  {
    id: "TN-789/4",
    location: "Tambaram, Chennai",
    owner: "R. Venkatesh",
    area: "0.8 Acres",
    type: "Residential Plot",
    price: "₹95,00,000",
    estimatedTime: "30-40 days",
    verified: true,
  },
];

const UserLands = () => {
  const [selectedLand, setSelectedLand] = useState<typeof lands[0] | null>(null);
  const [visitDate, setVisitDate] = useState("");
  const [visitRequested, setVisitRequested] = useState<string[]>([]);

  const handleRequestVisit = (landId: string) => {
    setVisitRequested([...visitRequested, landId]);
    setSelectedLand(null);
  };

  return (
    <DashboardLayout
      title="View Lands"
      subtitle="Browse available land listings"
      navItems={navItems}
      role="user"
    >
      {/* Filter Bar */}
      <div className="glass-card p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <Input placeholder="Search by location..." className="max-w-xs bg-secondary" />
          <select className="px-3 py-2 bg-secondary border border-border rounded-md text-sm">
            <option>All Land Types</option>
            <option>Wet Land</option>
            <option>Dry Land</option>
            <option>Agricultural</option>
            <option>Residential</option>
          </select>
          <select className="px-3 py-2 bg-secondary border border-border rounded-md text-sm">
            <option>Price Range</option>
            <option>Under ₹25 Lakhs</option>
            <option>₹25-50 Lakhs</option>
            <option>₹50-100 Lakhs</option>
            <option>Above ₹1 Crore</option>
          </select>
        </div>
      </div>

      {/* Lands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lands.map((land) => (
          <div key={land.id} className="glass-card overflow-hidden glow-effect">
            {/* Land Header */}
            <div className="bg-secondary/50 p-4 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-primary">{land.id}</span>
                {land.verified && (
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Verified
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {land.location}
              </div>
            </div>

            {/* Land Details */}
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Owner</span>
                <span className="text-sm font-medium text-foreground">{land.owner}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Area</span>
                <span className="text-sm font-medium text-foreground">{land.area}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Type</span>
                <span className="text-sm font-medium text-foreground">{land.type}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Market Price</span>
                <span className="text-sm font-bold text-primary">{land.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Est. Transfer Time</span>
                <span className="text-sm text-foreground">{land.estimatedTime}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 pt-0 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={`/qr-verify?land=${land.id}`}>QR Verify</a>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    disabled={visitRequested.includes(land.id)}
                    onClick={() => setSelectedLand(land)}
                  >
                    {visitRequested.includes(land.id) ? "Visit Requested" : "Request Visit"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  <DialogHeader>
                    <DialogTitle>Request Property Visit</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Property</p>
                      <p className="font-mono text-primary">{land.id}</p>
                      <p className="text-sm text-foreground">{land.location}</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="visitDate">Select Date & Time</Label>
                      <Input
                        id="visitDate"
                        type="datetime-local"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="bg-secondary"
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => handleRequestVisit(land.id)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Visit
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default UserLands;
