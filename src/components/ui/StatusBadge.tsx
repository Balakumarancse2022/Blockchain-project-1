import { cn } from "@/lib/utils";

type StatusType = "pending" | "approved" | "rejected" | "processing" | "completed" | "verified";

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
}

const statusStyles: Record<StatusType, string> = {
  pending: "status-pending",
  approved: "status-approved",
  rejected: "status-rejected",
  processing: "status-processing",
  completed: "bg-primary/20 text-primary",
  verified: "bg-primary/20 text-primary",
};

const defaultLabels: Record<StatusType, string> = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
  processing: "Processing",
  completed: "Completed",
  verified: "Verified",
};

const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  return (
    <span className={cn("status-badge", statusStyles[status])}>
      {label || defaultLabels[status]}
    </span>
  );
};

export default StatusBadge;
