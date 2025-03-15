
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MoebelliftMieten from "./pages/MoebelliftMieten";
import Umzuege from "./pages/Umzuege";
import Raeumung from "./pages/Raeumung";
import Reinigungspartner from "./pages/Reinigungspartner";
import UeberUns from "./pages/UeberUns";
import OffertenAnfordern from "./pages/OffertenAnfordern";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/moebellift-mieten" element={<MoebelliftMieten />} />
          <Route path="/umzuege" element={<Umzuege />} />
          <Route path="/raeumung" element={<Raeumung />} />
          <Route path="/reinigungspartner" element={<Reinigungspartner />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/offerten-anfordern" element={<OffertenAnfordern />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
