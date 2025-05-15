"use client"

import Link from "next/link"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  // Define all features that will be shown across all packages
  const allFeatures = [
    "AI-powered guidance",
    "Application assistance",
    "Personal statement support",
    "Expert consultation",
    "University shortlisting",
    "Interview preparation",
    "Document preparation",
    "Alumni network access",
    "Post-acceptance support",
    "Pre-departure & cultural support",
  ]

  // Define which features are included in each package
  const featuresByPackage = {
    freemium: ["AI-powered guidance", "Application assistance", "Personal statement support"],
    purePlay: [
      "AI-powered guidance",
      "Application assistance",
      "Personal statement support",
      "Expert consultation",
      "Interview preparation",
      "Document preparation",
    ],
    basic: [
      "AI-powered guidance",
      "Application assistance",
      "Personal statement support",
      "Expert consultation",
      "University shortlisting",
      "Interview preparation",
      "Document preparation",
      "Alumni network access",
    ],
    intermediate: [
      "AI-powered guidance",
      "Application assistance",
      "Personal statement support",
      "Expert consultation",
      "University shortlisting",
      "Interview preparation",
      "Document preparation",
      "Alumni network access",
      "Post-acceptance support",
    ],
    advanced: allFeatures,
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-gradient">Packages</span>
        </h1>
        <p className="text-muted-foreground mb-12">
          Choose the package that best fits your needs and budget. All packages include our core services, with
          additional features in higher tiers.
        </p>
      </div>

      {/* Pricing Tabs */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Freemium Package */}
          <div className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/20">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-semibold mb-2">Freemium</h2>
                <p className="text-muted-foreground h-12">Try our AI-powered guidance before you commit</p>
                <div className="mt-4 mb-2">
                  <div className="text-3xl font-bold">$0</div>
                </div>
              </div>
              <div className="border-t border-border p-6 flex-1">
                <ul className="space-y-4 mb-8">
                  {allFeatures.map((feature) => (
                    <FeatureItem
                      key={`freemium-${feature}`}
                      included={featuresByPackage.freemium.includes(feature)}
                      limited={feature === "Personal statement support"}
                    >
                      {feature}
                    </FeatureItem>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="text-sm text-muted-foreground mb-4">Free forever</div>
                <Link href="/signup?package=freemium">
                  <Button variant="glow" size="lg" className="w-full">
                    Try For Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pure Play Package */}
          <div className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/20">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-semibold mb-2">Pure Play</h2>
                <p className="text-muted-foreground h-12">Direct and once-off specialized services</p>
                <div className="mt-4 mb-2">
                  <div className="text-3xl font-bold">$500</div>
                </div>
              </div>
              <div className="border-t border-border p-6 flex-1">
                <ul className="space-y-4 mb-8">
                  {allFeatures.map((feature) => (
                    <FeatureItem key={`purePlay-${feature}`} included={featuresByPackage.purePlay.includes(feature)}>
                      {feature}
                    </FeatureItem>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="text-sm text-muted-foreground mb-4">One-time service</div>
                <Link href="/signup?package=purePlay">
                  <Button variant="glow" size="lg" className="w-full">
                    Choose Pure Play
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Basic Package */}
          <div className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/20">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                <p className="text-muted-foreground h-12">Self-paced guidance with limited expert support</p>
                <div className="mt-4 mb-2">
                  <div className="text-3xl font-bold">$1,500</div>
                </div>
              </div>
              <div className="border-t border-border p-6 flex-1">
                <ul className="space-y-4 mb-8">
                  {allFeatures.map((feature) => (
                    <FeatureItem key={`basic-${feature}`} included={featuresByPackage.basic.includes(feature)}>
                      {feature}
                    </FeatureItem>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="text-sm text-muted-foreground mb-4">1 month duration</div>
                <Link href="/signup?package=basic">
                  <Button variant="glow" size="lg" className="w-full">
                    Choose Basic
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Intermediate Package - Most Popular */}
          <div className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col relative border-2 border-purple-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/30">
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium z-10">
                Most Popular
              </div>
              <div className="p-6 pb-4 bg-gradient-to-b from-purple-600/10 to-transparent">
                <h2 className="text-2xl font-semibold mb-2">Intermediate</h2>
                <p className="text-muted-foreground h-12">Hybrid approach with weekly human mentorship</p>
                <div className="mt-4 mb-2">
                  <div className="text-3xl font-bold">$3,000</div>
                </div>
              </div>
              <div className="border-t border-border p-6 flex-1">
                <ul className="space-y-4 mb-8">
                  {allFeatures.map((feature) => (
                    <FeatureItem
                      key={`intermediate-${feature}`}
                      included={featuresByPackage.intermediate.includes(feature)}
                    >
                      {feature}
                    </FeatureItem>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="text-sm text-muted-foreground mb-4">3 months duration</div>
                <Link href="/signup?package=intermediate">
                  <Button variant="glow" size="lg" className="w-full">
                    Choose Intermediate
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Advanced Package */}
          <div className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/20">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-semibold mb-2">Advanced</h2>
                <p className="text-muted-foreground h-12">Premium end-to-end application management</p>
                <div className="mt-4 mb-2">
                  <div className="text-3xl font-bold">$5,000</div>
                </div>
              </div>
              <div className="border-t border-border p-6 flex-1">
                <ul className="space-y-4 mb-8">
                  {allFeatures.map((feature) => (
                    <FeatureItem key={`advanced-${feature}`} included={featuresByPackage.advanced.includes(feature)}>
                      {feature}
                    </FeatureItem>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="text-sm text-muted-foreground mb-4">6 months duration</div>
                <Link href="/signup?package=advanced">
                  <Button variant="glow" size="lg" className="w-full">
                    Choose Advanced
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          All packages can be customized to fit your specific needs. Contact us for a personalized quote.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Can I upgrade my package later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade to a higher tier package at any time. We'll prorate the cost based on your remaining
              time.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and bank transfers. For certain regions, we also offer
              installment plans.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Is there a refund policy?</h3>
            <p className="text-muted-foreground">
              We offer a 14-day money-back guarantee if you're not satisfied with our services. Please contact our
              support team for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ children, included = false, limited = false }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">
        {included ? (
          <Check className={cn("h-5 w-5", limited ? "text-muted-foreground" : "text-green-500")} />
        ) : (
          <div className="h-5 w-5 rounded-full border border-muted-foreground/30"></div>
        )}
      </div>
      <span className={cn(included ? "" : "text-muted-foreground", "text-sm")}>
        {children}
        {limited && <span className="text-xs text-muted-foreground ml-1">(limited)</span>}
      </span>
    </li>
  )
}
