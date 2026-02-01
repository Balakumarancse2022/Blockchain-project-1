import { MapPin, FileCheck, QrCode, Eye } from "lucide-react";

export default function MyLands() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">My Registered Lands</h2>
          <p className="text-sm text-gray-400">
            View and manage all lands registered under your ownership
          </p>
        </div>
      </div>

      {/* Land Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500 transition-all">
        
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Survey No: TN-124/3
            </h3>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Thanjavur • Papanasam Taluk
            </p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
            Verified
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4" />

        {/* Land Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Land Type</p>
            <p className="text-white font-medium">Agricultural</p>
          </div>
          <div>
            <p className="text-gray-400">Area Size</p>
            <p className="text-white font-medium">2.45 Acres</p>
          </div>
          <div>
            <p className="text-gray-400">Patta Status</p>
            <p className="text-white font-medium">Active</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-sm text-gray-300 hover:border-green-500 hover:text-green-400 transition">
            <Eye className="w-4 h-4" />
            View Details
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition">
            <FileCheck className="w-4 h-4" />
            Documents
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-sm text-gray-300 hover:border-purple-500 hover:text-purple-400 transition">
            <QrCode className="w-4 h-4" />
            QR Code
          </button>
        </div>
      </div>
    </div>
  );
}
