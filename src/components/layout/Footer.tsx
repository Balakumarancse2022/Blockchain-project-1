import { Shield, Lock, Database } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">About SecureLandX</h4>
            <p className="text-sm text-muted-foreground">
              A blockchain-powered land registry system ensuring transparent, 
              tamper-proof ownership records and seamless transfer processes.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Security Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-primary" />
                Blockchain Immutability
              </li>
              <li className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-primary" />
                End-to-End Encryption
              </li>
              <li className="flex items-center gap-2">
                <Database className="h-3.5 w-3.5 text-primary" />
                Distributed Storage
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Government Land Registry Department<br />
              support@securelandx.gov<br />
              1800-XXX-XXXX (Toll Free)
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 SecureLandX. All rights reserved. This is a UI prototype demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
