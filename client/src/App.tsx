import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-gray-50 min-h-screen font-inter">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
