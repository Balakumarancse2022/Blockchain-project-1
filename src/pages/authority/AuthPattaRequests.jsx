import {
  CheckCircle,
  XCircle,
  FileText,
  MapPin,
  User,
  Clock,
} from "lucide-react";

export default function AuthorityPattaRequests() {
  const requests = [
    {
      id: 1,
      landId: "TN-337/1",
      area: "100 x 100 sq.ft",
      buyer: "Ramesh Kumar",
      submittedOn: "12 Sep 2026",
      status: "PENDING",
    },
    {
      id: 2,
      landId: "TN-452/2",
      area: "80 x 60 sq.ft",
      buyer: "Suresh M",
      submittedOn: "10 Sep 2026",
      status: "PENDING",
    },
  ];

  const approve = (id) => {
    alert(`✅ Patta Request ${id} Approved`);
  };

  const reject = (id) => {
    alert(`❌ Patta Request ${id} Rejected`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      {/* ================= HEADER (LEFT ONLY) ================= */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-green-400">
          Patta Requests Approval
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          Review, verify and approve individual patta subdivision and ownership transfer requests submitted by land owners
        </p>
      </div>

      {/* ================= CENTERED CARDS ================= */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">

          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition"
            >
              {/* ---------- Card Header ---------- */}
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h2 className="text-lg font-semibold">
                    Land ID: {req.landId}
                  </h2>
                  <p className="text-xs text-gray-400">
                    Submitted on {req.submittedOn}
                  </p>
                </div>

                <StatusBadge status={req.status} />
              </div>

              {/* ---------- Card Details ---------- */}
              <div className="space-y-3 text-sm">
                <InfoRow
                  icon={MapPin}
                  label="Requested Area"
                  value={req.area}
                />
                <InfoRow
                  icon={User}
                  label="Buyer Name"
                  value={req.buyer}
                />
                <InfoRow
                  icon={Clock}
                  label="Status"
                  value={req.status}
                />
              </div>

              {/* ---------- Actions ---------- */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => reject(req.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>

                <button
                  onClick={() => approve(req.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                >
                  <CheckCircle className="w-4 h-4" />
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {requests.length === 0 && (
        <div className="text-center text-gray-400 py-20">
          <FileText className="w-12 h-12 mx-auto mb-4 opacity-40" />
          <p className="text-sm">
            No patta requests pending for approval
          </p>
        </div>
      )}
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

const StatusBadge = ({ status }) => {
  const styles = {
    PENDING: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    APPROVED: "bg-green-500/10 text-green-400 border-green-500/30",
    REJECTED: "bg-red-500/10 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-4 h-4 text-gray-500" />
    <span className="text-gray-400">{label}:</span>
    <span className="text-gray-200 font-medium">{value}</span>
  </div>
);
