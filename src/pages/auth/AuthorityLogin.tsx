import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, User, Lock, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/services/api";

const authorityRoles = [
  { id: "vao", label: "Village Administrative Officer (VAO)" },
  { id: "ri", label: "Revenue Inspector" },
  { id: "tahsildar", label: "Tahsildar" },
];

const AuthorityLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    authorityId: "",
    password: "",
    role: "",
  });

  

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await apiRequest("/authority/login", "POST", formData);
    navigate("/authority/dashboard");
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={false} />
      
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Authority Portal
            </h1>
            <p className="text-sm text-muted-foreground">
              Government officials login for verification & approval
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="authorityId">Authority ID</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="authorityId"
                  placeholder="Enter your Authority ID"
                  value={formData.authorityId}
                  onChange={(e) => setFormData({ ...formData, authorityId: e.target.value })}
                  className="bg-secondary border-border pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-secondary border-border pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Select Role</Label>
              <div className="space-y-2">
                {authorityRoles.map((role) => (
                  <label
                    key={role.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.role === role.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.id}
                      checked={formData.role === role.id}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="sr-only"
                    />
                    <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                      formData.role === role.id ? "border-primary" : "border-muted-foreground"
                    }`}>
                      {formData.role === role.id && (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-sm text-foreground">{role.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full gap-2">
              Access Authority Portal
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="bg-secondary/50 rounded-lg p-4 mt-4">
              <p className="text-xs text-muted-foreground text-center">
                🔒 This portal is for authorized government officials only. 
                Unauthorized access is strictly prohibited.
              </p>
            </div>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            <Link to="/" className="hover:text-primary">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorityLogin;