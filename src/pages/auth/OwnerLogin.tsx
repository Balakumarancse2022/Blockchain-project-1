import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, FileText, Lock, ArrowRight, CheckCircle, Upload } from "lucide-react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const OwnerLogin = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [ocrExtracted, setOcrExtracted] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: "",
    mobile: "",
    email: "",
    surveyNo: "",
    pattaNo: "",
    village: "",
    taluk: "",
    landArea: "",
    landType: "",
    password: "",
  });

  /* ================= REGEX ================= */
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegex = /^.{8,}$/;
  const surveyRegex = /^[A-Z]{2}-\d{3}\/\d\/\d{4}$/;

  /* ================= VALIDATIONS ================= */
  const isMobileValid = phoneRegex.test(formData.mobile);
  const isEmailValid = emailRegex.test(formData.email);
  const isPasswordValid = passwordRegex.test(formData.password);
  const isSurveyValid = surveyRegex.test(formData.surveyNo);

  const isRegisterValid =
    ocrExtracted &&
    formData.ownerName &&
    isMobileValid &&
    isEmailValid &&
    isPasswordValid;

  const isLoginValid = isSurveyValid && isPasswordValid;

  const canSubmit = isRegistering ? isRegisterValid : isLoginValid;

  /* ================= OCR MOCK ================= */
  const handleFileUpload = () => {
    setTimeout(() => {
      setOcrExtracted(true);
      setFormData({
        ...formData,
        surveyNo: "TN-337/1/2024",
        pattaNo: "PT-892654",
        village: "Thiruvanmiyur",
        taluk: "Chengalpattu",
        landArea: "2.5 Acres",
        landType: "Dry Land",
        ownerName: "A. Manikandan",
      });
    }, 1500);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    navigate("/owner/dashboard");
  };

  const inputStyle = (valid, value) =>
    value ? (valid ? "border-green-500" : "border-red-500") : "";

  return (
    <div className="min-h-screen bg-background">
      <Header showAuth={false} />

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">
              {isRegistering ? "Register as Land Owner" : "Owner Login"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isRegistering
                ? "Upload your land document for OCR verification"
                : "Sign in using Survey Number"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            {isRegistering ? (
              <>
                <div className="space-y-2">
                  <Label>Upload Land Document</Label>
                  <div
                    onClick={handleFileUpload}
                    className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary"
                  >
                    <Upload className="mx-auto mb-2" />
                    <p className="text-sm">Click to upload document</p>
                  </div>
                </div>

                {ocrExtracted && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle className="h-5 w-5" />
                      OCR Verified Successfully
                    </div>
                  </div>
                )}

                <Input disabled value={formData.surveyNo} />
                <Input disabled value={formData.pattaNo} />
                <Input disabled value={formData.village} />
                <Input disabled value={formData.taluk} />
                <Input disabled value={formData.landArea} />
                <Input disabled value={formData.landType} />
                <Input disabled value={formData.ownerName} />

                <div>
                  <Label>Mobile</Label>
                  <Input
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className={inputStyle(isMobileValid, formData.mobile)}
                  />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputStyle(isEmailValid, formData.email)}
                  />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={inputStyle(isPasswordValid, formData.password)}
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label>Survey Number</Label>
                  <Input
                    placeholder="TN-337/1/2024"
                    value={formData.surveyNo}
                    onChange={(e) =>
                      setFormData({ ...formData, surveyNo: e.target.value })
                    }
                    className={inputStyle(isSurveyValid, formData.surveyNo)}
                  />
                </div>

                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={inputStyle(isPasswordValid, formData.password)}
                  />
                </div>
              </>
            )}

            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full gap-2 disabled:opacity-50"
            >
              {isRegistering ? "Complete Registration" : "Sign In"}
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="text-center pt-4 border-t">
              <p className="text-sm">
                {isRegistering ? "Already registered?" : "New land owner?"}
                <button
                  type="button"
                  onClick={() => {
                    setIsRegistering(!isRegistering);
                    setOcrExtracted(false);
                  }}
                  className="text-primary ml-1"
                >
                  {isRegistering ? "Sign In" : "Register Land"}
                </button>
              </p>
            </div>
          </form>

          <p className="text-center text-xs mt-6">
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;
