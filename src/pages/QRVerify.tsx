import { useState } from "react";
import { Link } from "react-router-dom";
import { QrCode, Search, CheckCircle, Shield, AlertTriangle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QRVerify = () => {
  const [landId, setLandId] = useState("");
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 1500);
  };

  const verificationResult = {
    landId: "TN-337/1",
    surveyNo: "TN-337/1/2024",
    pattaNo: "PT-892654",
    ownerName: "A. Manikandan",
    location: "Thiruvanmiyur, Chengalpattu",
    area: "2.5 Acres",
    landType: "Dry Land",
    blockchainHash: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    lastVerified: "2024-01-15 14:32:18",
    status: "AUTHENTIC",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <QrCode className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              QR Verification
            </h1>
            <p className="text-muted-foreground">
              Verify land authenticity using QR code or Land ID
            </p>
          </div>

          {/* Search Input */}
          <div className="glass-card p-6 mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter Land ID (e.g., TN-337/1)"
                  value={landId}
                  onChange={(e) => setLandId(e.target.value)}
                  className="pl-10 bg-secondary h-12"
                />
              </div>
              <Button 
                size="lg" 
                onClick={handleVerify}
                disabled={verifying}
              >
                {verifying ? "Verifying..." : "Verify"}
              </Button>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <QrCode className="h-4 w-4" />
              <span>Or scan QR code using your device camera</span>
            </div>
          </div>

          {/* Verification Result */}
          {verified && (
            <div className="animate-fade-in">
              {/* Success Header */}
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  ✓ Document Verified
                </h2>
                <p className="text-muted-foreground">
                  This land record is authentic and verified on blockchain
                </p>
              </div>

              {/* Details Card */}
              <div className="glass-card p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Land Record Details
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Land ID</p>
                      <p className="font-mono text-primary">{verificationResult.landId}</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Survey Number</p>
                      <p className="font-mono text-foreground">{verificationResult.surveyNo}</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Patta Number</p>
                      <p className="font-mono text-foreground">{verificationResult.pattaNo}</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Owner Name</p>
                      <p className="font-medium text-foreground">{verificationResult.ownerName}</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Location</p>
                      <p className="text-sm text-foreground">{verificationResult.location}</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Area</p>
                      <p className="text-foreground">{verificationResult.area}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground mb-2">Blockchain Hash</p>
                    <p className="font-mono text-xs text-primary break-all">
                      {verificationResult.blockchainHash}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Last Verified: {verificationResult.lastVerified}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QRVerify;
