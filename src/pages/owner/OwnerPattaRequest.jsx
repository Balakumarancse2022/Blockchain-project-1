import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FileText,
  User,
  IdCard,
  Map,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { submitPattaRequest } from "@/services/patta.service";
import { forwardRef } from "react";

/* -------------------- Validation Schema -------------------- */
const pattaSchema = z.object({
  landId: z.string().min(5, "Invalid Land ID"),
  parentPatta: z.string().min(3, "Parent patta required"),
  area: z.string().min(3, "Area details required"),
  buyerName: z.string().min(3, "Buyer name required"),
  buyerAadhaar: z.string().regex(/^\d{12}$/, "Aadhaar must be 12 digits"),
});

const OwnerPattaRequest = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(pattaSchema),
  });

  /* -------------------- Submit Handler -------------------- */
  const onSubmit = async (data) => {
    try {
      await submitPattaRequest(data);

      toast({
        title: "Patta Request Submitted",
        description:
          "Your request has been forwarded to the authority for verification.",
      });

      navigate("/owner/dashboard");
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg border border-gray-800 hover:border-gray-600"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-green-400">
              Individual Patta Request
            </h1>
            <p className="text-sm text-gray-400">
              Secure digital patta subdivision & ownership transfer
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="flex gap-3 bg-green-500/10 border border-green-500/30 p-4 rounded-xl">
          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
          <p className="text-sm text-green-300">
            Only verified lands under your ownership are eligible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold mb-6">
            Patta Request Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Land Reference ID"
              icon={Map}
              placeholder="TN-LAND-1243"
              error={errors.landId?.message}
              {...register("landId")}
            />

            <Input
              label="Parent Patta Number"
              icon={FileText}
              placeholder="PT-998877"
              error={errors.parentPatta?.message}
              {...register("parentPatta")}
            />

            <Input
              label="Requested Area"
              icon={Map}
              placeholder="100 x 100 sq.ft"
              error={errors.area?.message}
              {...register("area")}
            />

            <Input
              label="Buyer Name"
              icon={User}
              placeholder="Full legal name"
              error={errors.buyerName?.message}
              {...register("buyerName")}
            />

            <div className="md:col-span-2">
              <Input
                label="Buyer Aadhaar Number"
                icon={IdCard}
                placeholder="12-digit Aadhaar"
                error={errors.buyerAadhaar?.message}
                {...register("buyerAadhaar")}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-lg border border-gray-700 text-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg bg-green-500 text-black font-semibold disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerPattaRequest;

/* -------------------- Reusable Input (FIXED) -------------------- */
const Input = forwardRef(({ label, icon: Icon, error, ...props }, ref) => (
  <div>
    <label className="text-sm text-gray-400 mb-1 block">{label}</label>
    <div className="relative">
      <Icon className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
      <input
        ref={ref}
        {...props}
        className="w-full pl-9 p-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none"
      />
    </div>
    {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
  </div>
));

Input.displayName = "Input";
