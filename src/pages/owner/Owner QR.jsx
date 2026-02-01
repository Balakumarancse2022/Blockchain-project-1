import QRCode from "react-qr-code";

export default function OwnerQR() {
  const landData = {
    owner: "A. Manikandan",
    surveyNo: "337/1A",
    pattaNo: "TN-SLM-337/1A-2026-45321",
    status: "Approved"
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-xl text-center w-[360px]">

        <h2 className="text-xl font-bold mb-4">🔳 Land QR Code</h2>

        <QRCode
          value={JSON.stringify(landData)}
          size={200}
          bgColor="#0f172a"
          fgColor="#22c55e"
        />

        <p className="text-sm text-gray-400 mt-4">
          Scan this QR to verify land ownership
        </p>

      </div>
    </div>
  );
}
