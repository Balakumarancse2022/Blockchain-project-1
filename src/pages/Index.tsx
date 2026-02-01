import { Link } from "react-router-dom";
import { User, Home, Shield, ArrowRight, CheckCircle, Lock, Database, Cpu } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roleCards = [
  {
    title: "Buyer / User",
    description:
      "Search and verify land records, request property visits, track purchase status, and complete secure ownership transfers.",
    icon: User,
    path: "/login/user",
    buttonText: "Login as Buyer",
  },
  {
    title: "Land Owner",
    description:
      "Register your land with OCR verification, manage properties, review sell requests, and initiate blockchain-secured transfers.",
    icon: Home,
    path: "/login/owner",
    buttonText: "Login as Owner",
  },
  {
    title: "Government Authority",
    description:
      "Verify documents, approve transfers, monitor blockchain logs, and ensure regulatory compliance across all transactions.",
    icon: Shield,
    path: "/login/authority",
    buttonText: "Authority Portal",
  },
];

const features = [
  {
    icon: Lock,
    title: "Immutable Records",
    description: "Once recorded, ownership data cannot be altered or deleted",
  },
  {
    icon: Database,
    title: "Distributed Storage",
    description: "Data replicated across multiple nodes for redundancy",
  },
  {
    icon: Cpu,
    title: "Smart Verification",
    description: "OCR-powered document extraction and validation",
  },
  {
    icon: CheckCircle,
    title: "QR Authentication",
    description: "Instant verification of land records via QR codes",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Secure, Transparent
            <br />
            <span className="text-primary">Land Ownership</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A next-generation land registry system leveraging blockchain technology
            for tamper-proof records, seamless transfers, and complete transparency.
          </p>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {roleCards.map((role) => (
              <div
                key={role.title}
                className="glass-card p-6 text-left glow-effect group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <role.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {role.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {role.description}
                </p>

                <Link
                  to={role.path}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  {role.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built for Security & Trust
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every feature designed to eliminate fraud, ensure transparency,
              and streamline the land registry process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How SecureLandX Works
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Document Upload & OCR",
                desc: "Land documents are uploaded and automatically parsed using OCR technology",
              },
              {
                step: "02",
                title: "Verification & Validation",
                desc: "Government authorities verify document authenticity and cross-reference records",
              },
              {
                step: "03",
                title: "Blockchain Recording",
                desc: "Verified ownership data is hashed and stored on the immutable blockchain",
              },
              {
                step: "04",
                title: "QR Code Generation",
                desc: "Unique QR codes are generated for instant verification of land records",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex items-start gap-6 p-6 rounded-xl bg-card/50 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary/30">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </section>
       <p className="text-muted-foreground max-w-xl mx-auto">
             Academic Prototype – Not an official government portal .
            </p>
      <Footer />
    </div>
  );
};

export default Index;
