import React from 'react';

// Import the Button component with error handling
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  try {
    // Try to import the actual Button component
    const ActualButton = require("@/components/ui/button").Button;
    return <ActualButton variant={variant} size={size} className={className} {...props}>{children}</ActualButton>;
  } catch (error) {
    // Fallback to a basic button if import fails
    console.warn("Button component failed to load, using fallback");
    return (
      <button 
        className={`px-4 py-2 rounded font-medium ${
          variant === "glow" ? "bg-purple-600 hover:bg-purple-700 text-white" : 
          variant === "outline" ? "border border-gray-300 hover:bg-gray-100" : 
          "bg-gray-900 text-white hover:bg-gray-800"
        } ${
          size === "lg" ? "text-lg px-6 py-3" : ""
        } ${className}`} 
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default function PricingPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Packages</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Choose the package that best fits your needs and budget. All packages include our core services, with additional features in higher tiers.
        </p>
      </div>
      
      {/* Simplified grid that's less likely to cause rendering issues */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Pure Play Package */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Pure Play</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Direct and once-off specialized services</p>
          <ul className="space-y-2 mb-6">
            {[
              "Visa application and documentation assistance",
              "University application assistance (single application)",
              "Personal statement writing",
              "Interview preparation",
              "Timeline assistance"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-3xl font-bold mb-6">$500</p>
          <Button variant="glow" size="lg" className="w-full">Choose Pure Play</Button>
        </div>
        
        {/* Basic Package */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Self-paced, automated approach with structured guidance</p>
          <ul className="space-y-2 mb-6">
            {[
              "Limited access to our AI System",
              "University application guidelines (up to 3 universities)",
              "Visa application guidelines and timelines",
              "Access to document templates and outlines",
              "Limited (2-3) expert consultation sessions",
              "Access to alumni career network"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-3xl font-bold mb-6">$1,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Basic</Button>
        </div>
        
        {/* Intermediate Package */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Intermediate</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Hybrid approach with full automation and weekly mentorship</p>
          <ul className="space-y-2 mb-6">
            {[
              "Full access to our automated application system",
              "University shortlisting (up to 5 universities)",
              "Application materials assistance (essays, resume)",
              "Mock interviews for university and visa",
              "Application deadline tracking and reminders",
              "Weekly one-on-one mentorship",
              "General post-acceptance guidance"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-3xl font-bold mb-6">$3,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Intermediate</Button>
        </div>
        
        {/* Advanced Package */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md md:col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Advanced</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Premium end-to-end expert assistance at every stage</p>
          <ul className="space-y-2 mb-6">
            {[
              "End-to-end application management",
              "University shortlisting and customized strategy",
              "Unlimited mentorship sessions",
              "In-depth personal statement and essay coaching",
              "Full document preparation support",
              "Extra-curricular advising",
              "Scholarship search and application support",
              "Comprehensive pre-departure support"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-3xl font-bold mb-6">$5,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Advanced</Button>
        </div>
        
        {/* Free Assessment - Simplified layout */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md md:col-span-1 lg:col-span-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-semibold mb-4">Free Assessment</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Get started with our AI-powered study abroad guidance</p>
              <ul className="space-y-2">
                {[
                  "Input your background, goals, and preferences",
                  "Receive general information and website links",
                  "Get a personalized statement evaluation",
                  "See your % chance of admission",
                  "Explore study abroad options with no commitment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end flex-shrink-0">
              <p className="text-3xl font-bold mb-6">FREE</p>
              <Button variant="outline" size="lg" className="w-full md:w-auto px-8">Start Free Assessment</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-500 dark:text-gray-400">
          All packages can be customized to fit your specific needs. Contact us for a personalized quote.
        </p>
      </div>
    </div>
  );
}
