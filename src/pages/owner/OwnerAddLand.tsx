import { useState } from "react";
import { LayoutDashboard, Map, FileText, Plus, QrCode, Upload, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/owner/dashboard", icon: LayoutDashboard },
  { label: "My Lands", path: "/owner/lands", icon: Map },
  { label: "Sell Requests", path: "/owner/requests", icon: FileText },
  { label: "Add Land", path: "/owner/add-land", icon: Plus },
  { label: "Generate QR", path: "/owner/qr", icon: QrCode },
];

const OwnerAddLand = () => {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(false);
  const [ocrComplete, setOcrComplete] = useState(false);
  const [formData, setFormData] = useState({
    surveyNo: "",
    pattaNo: "",
    village: "",
    taluk: "",
    district: "",
    area: "",
    landType: "",
    marketPrice: "",
    description: "",
  });

  const handleUpload = () => {
    setUploaded(true);
    setTimeout(() => {
      setOcrComplete(true);
      setFormData({
        surveyNo: "TN-567/8/2024",
        pattaNo: "PT-123456",
        village: "Porur",
        taluk: "Sriperumbudur",
        district: "Kanchipuram",
        area: "1.5 Acres",
        landType: "Agricultural",
        marketPrice: "",
        description: "",
      });
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/owner/qr");
  };

  return (
    <DashboardLayout
      title="Add New Land"
      subtitle="Register a new property with OCR verification"
      navItems={navItems}
      role="owner"
    >
      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Document Upload */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-foreground mb-4">Step 1: Upload Land Document</h3>
            
            {!uploaded ? (
              <div
                onClick={handleUpload}
                className="border-2 border-dashed border-border rounded-xl p-10 text-center cursor-pointer hover:border-primary/50 transition-colors"
              >
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground mb-2">Click to upload land document</p>
                <p className="text-sm text-muted-foreground">
                  PDF, JPG, PNG (Max 10MB) - Patta, Chitta, or Sale Deed
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">land_document.pdf</p>
                    <p className="text-xs text-muted-foreground">2.3 MB</p>
                  </div>
                  {ocrComplete && (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                </div>

                {ocrComplete && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">OCR Extraction Successful</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ✓ Document background verified<br />
                      ✓ Survey number not duplicated<br />
                      ✓ Matches government registry format
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Land Details */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-foreground mb-4">Step 2: Verify Land Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="surveyNo">Survey Number</Label>
                <Input
                  id="surveyNo"
                  value={formData.surveyNo}
                  onChange={(e) => setFormData({ ...formData, surveyNo: e.target.value })}
                  className="bg-secondary"
                  placeholder="Auto-filled from OCR"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pattaNo">Patta Number</Label>
                <Input
                  id="pattaNo"
                  value={formData.pattaNo}
                  onChange={(e) => setFormData({ ...formData, pattaNo: e.target.value })}
                  className="bg-secondary"
                  placeholder="Auto-filled from OCR"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  className="bg-secondary"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taluk">Taluk</Label>
                <Input
                  id="taluk"
                  value={formData.taluk}
                  onChange={(e) => setFormData({ ...formData, taluk: e.target.value })}
                  className="bg-secondary"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="bg-secondary"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Land Area</Label>
                <Input
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="bg-secondary"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landType">Land Type</Label>
                <Input
                  id="landType"
                  value={formData.landType}
                  onChange={(e) => setFormData({ ...formData, landType: e.target.value })}
                  className="bg-secondary"
                  disabled={ocrComplete}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marketPrice">Market Price (₹)</Label>
                <Input
                  id="marketPrice"
                  placeholder="Enter expected price"
                  value={formData.marketPrice}
                  onChange={(e) => setFormData({ ...formData, marketPrice: e.target.value })}
                  className="bg-secondary"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Label htmlFor="description">Additional Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Any additional details about the property..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-secondary"
                rows={3}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1" disabled={!ocrComplete}>
              <QrCode className="h-4 w-4 mr-2" />
              Register & Generate QR
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default OwnerAddLand;
