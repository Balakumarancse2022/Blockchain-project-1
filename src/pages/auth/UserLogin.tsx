import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserLogin = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    password: "",
  });

  /* ================= REGEX ================= */
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^.{8,}$/;

  /* ================= VALIDATIONS ================= */
  const isMobileValid = phoneRegex.test(formData.mobile);
  const isEmailValid = emailRegex.test(formData.email);
  const isPasswordValid = passwordRegex.test(formData.password);

  const isRegisterValid =
    formData.fullName.trim() !== "" &&
    isMobileValid &&
    isEmailValid &&
    formData.address.trim() !== "" &&
    isPasswordValid;

  const isLoginValid = isEmailValid && isPasswordValid;

  const canSubmit = isRegistering ? isRegisterValid : isLoginValid;

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    navigate("/user/dashboard");
  };

  /* ================= INPUT STYLE ================= */
  const inputStyle = (isValid, value) =>
    value
      ? isValid
        ? "border-green-500"
        : "border-red-500"
      : "";

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={false} />

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">
              {isRegistering ? "Create Account" : "User Login"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isRegistering
                ? "Register as a buyer to explore land records"
                : "Sign in to your buyer account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            {isRegistering && (
              <>
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Mobile Number</Label>
                  <Input
                    placeholder="10 digit number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className={inputStyle(isMobileValid, formData.mobile)}
                  />
                  {!isMobileValid && formData.mobile && (
                    <p className="text-xs text-red-500">
                      Enter valid 10-digit mobile number
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputStyle(isEmailValid, formData.email)}
              />
              {!isEmailValid && formData.email && (
                <p className="text-xs text-red-500">
                  Only @gmail.com allowed
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Minimum 8 characters"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={inputStyle(isPasswordValid, formData.password)}
              />
              {!isPasswordValid && formData.password && (
                <p className="text-xs text-red-500">
                  Minimum 8 characters required
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRegistering ? "Create Account" : "Sign In"}
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="text-center pt-4 border-t">
              <p className="text-sm">
                {isRegistering ? "Already have an account?" : "Don't have an account?"}
                <button
                  type="button"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-primary ml-1"
                >
                  {isRegistering ? "Sign In" : "Register"}
                </button>
              </p>
            </div>
          </form>

          <p className="text-center text-xs mt-6">
            <Link to="/" className="hover:text-primary">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
