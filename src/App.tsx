import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { submitPattaRequest } from "@/services/patta.service";


import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QRVerify from "./pages/QRVerify";

// Auth
import UserLogin from "./pages/auth/UserLogin";
import OwnerLogin from "./pages/auth/OwnerLogin";
import AuthorityLogin from "./pages/auth/AuthorityLogin";

// User Dashboard
import UserDashboard from "./pages/user/UserDashboard";
import UserLands from "./pages/user/UserLands";
import UserRequests from "./pages/user/UserRequests";
import UserTracking from "./pages/user/UserTracking";

// Owner Dashboard
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import OwnerAddLand from "./pages/owner/OwnerAddLand";
import OwnerRequests from "./pages/owner/OwnerRequests";
import OwnerMylands from "./pages/owner/OwnerMylandS";
import OwnerQR from "./pages/owner/Owner QR.jsx";
import OwnerPattaRequest from "./pages/owner/OwnerPattaRequest.jsx";

// Authority Dashboard
import AuthorityDashboard from "./pages/authority/AuthorityDashboard";
import AuthorityOwners from "./pages/authority/AuthorityOwners";
import AuthorityLogs from "./pages/authority/AuthorityLogs";
import AuthorityPattaRequests from "./pages/authority/AuthPattaRequests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qr-verify" element={<QRVerify />} />
          
          {/* Auth Routes */}
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/owner" element={<OwnerLogin />} />
          <Route path="/login/authority" element={<AuthorityLogin />} />
          
          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/lands" element={<UserLands />} />
          <Route path="/user/requests" element={<UserRequests />} />
          <Route path="/user/tracking" element={<UserTracking />} />
          
          {/* Owner Routes */}
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
          <Route path="/owner/lands" element={<OwnerMylands />} />
          <Route path="/owner/add-land" element={<OwnerAddLand />} />
          <Route path="/owner/requests" element={<OwnerRequests />} />
          <Route path="/owner/qr" element={<OwnerQR />} />
          <Route path="/owner/patta-request" element={<OwnerPattaRequest />} />

          
          {/* Authority Routes */}
          <Route path="/authority/dashboard" element={<AuthorityDashboard />} />
          <Route path="/authority/owners" element={<AuthorityOwners />} />
          <Route path="/authority/lands" element={<AuthorityDashboard />} />
          <Route path="/authority/verify" element={<AuthorityDashboard />} />
          <Route path="/authority/logs" element={<AuthorityLogs />} />
          <Route path="/authority/patta" element={<AuthorityPattaRequests />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
