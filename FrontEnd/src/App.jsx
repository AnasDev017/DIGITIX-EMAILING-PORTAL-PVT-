import EmailPortal from "./components/EmailPortal";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      {/* Global Toast Provider */}
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={3000}
      />

      {/* Main App */}
      <EmailPortal />
    </>
  );
}
