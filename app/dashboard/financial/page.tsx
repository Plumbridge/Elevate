import { ArrowRight, Calculator, CreditCard, DollarSign, Download, PiggyBank, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function FinancialPlanningPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Financial Planning</h1>
        <p className="text-muted-foreground">Manage your study abroad finances and scholarships</p>
      </div>

      {/* Financial Overview */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="col-span-2 rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="mr-2 h-5 w-5" /> Financial Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/5 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Estimated Total Cost</p>
              <p className="text-2xl font-bold">$35,000</p>
              <p className="text-xs text-muted-foreground">For first year</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Secured Funding</p>
              <p className="text-2xl font-bold">$28,500</p>
              <p className="text-xs text-muted-foreground">81% of total</p>
            </div>
            <div className="bg-primary/5 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Funding Gap</p>
              <p className="text-2xl font-bold text-yellow-500">$6,500</p>
              <p className="text-xs text-muted-foreground">Needs attention</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Funding Progress</h3>
              <span className="text-sm">81%</span>
            </div>
            <div className="w-full bg-primary/10 h-2 rounded-full">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: "81%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium">Funding Sources</h3>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <PiggyBank className="h-4 w-4 mr-3 text-primary" />
                <span>Personal Savings</span>
              </div>
              <span>$10,000</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-3 text-primary" />
                <span>Family Support</span>
              </div>
              <span>$8,500</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-3 text-primary" />
                <span>Merit Scholarship</span>
              </div>
              <span>$10,000</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4">Financial Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="min-w-[80px] text-sm">
                <span className="text-green-500 font-medium">Completed</span>
                <p className="text-xs text-muted-foreground">Mar 10</p>
              </div>
              <div className="ml-4 pb-4 border-l border-primary/20 pl-4">
                <p className="font-medium">FAFSA Application</p>
                <p className="text-sm text-muted-foreground">Federal student aid application submitted</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="min-w-[80px] text-sm">
                <span className="text-green-500 font-medium">Completed</span>
                <p className="text-xs text-muted-foreground">Mar 15</p>
              </div>
              <div className="ml-4 pb-4 border-l border-primary/20 pl-4">
                <p className="font-medium">Merit Scholarship</p>
                <p className="text-sm text-muted-foreground">$10,000 scholarship awarded</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="min-w-[80px] text-sm">
                <span className="text-yellow-500 font-medium">Upcoming</span>
                <p className="text-xs text-muted-foreground">Apr 15</p>
              </div>
              <div className="ml-4 pb-4 border-l border-primary/20 pl-4">
                <p className="font-medium">Tuition Deposit</p>
                <p className="text-sm text-muted-foreground">$500 deposit due</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="min-w-[80px] text-sm">
                <span className="text-muted-foreground font-medium">Upcoming</span>
                <p className="text-xs text-muted-foreground">Aug 1</p>
              </div>
              <div className="ml-4 pl-4">
                <p className="font-medium">Fall Tuition Payment</p>
                <p className="text-sm text-muted-foreground">First semester payment due</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="rounded-xl glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calculator className="mr-2 h-5 w-5" /> Cost Breakdown
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">Academic Year Expenses</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 rounded-lg bg-primary/5">
                <span>Tuition & Fees</span>
                <span className="font-medium">$20,000</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-primary/5">
                <span>Housing & Meals</span>
                <span className="font-medium">$10,000</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-primary/5">
                <span>Books & Supplies</span>
                <span className="font-medium">$1,200</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-primary/5">
                <span>Health Insurance</span>
                <span className="font-medium">$1,800</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-primary/5">
                <span>Personal Expenses</span>
                <span className="font-medium">$2,000</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <span className="font-medium">Total</span>
                <span className="font-bold">$35,000</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium mb-3">Financial Planning Tools</h3>
            <Link
              href="#"
              className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="flex items-center">
                <Calculator className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Budget Calculator</p>
                  <p className="text-sm text-muted-foreground">Plan your monthly expenses</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Scholarship Finder</p>
                  <p className="text-sm text-muted-foreground">Discover additional funding opportunities</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="flex items-center">
                <Download className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Financial Documents</p>
                  <p className="text-sm text-muted-foreground">Download statements and forms</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scholarship Opportunities */}
      <div className="rounded-xl glass p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Scholarship Opportunities</h2>
          <Link href="#" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">International Student Merit Award</h3>
                <p className="text-sm text-muted-foreground mb-2">$5,000 - Based on academic achievement</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-primary/10 mr-2">Deadline: May 15</span>
                  <span className="px-2 py-1 rounded bg-green-500/10 text-green-500">High Match</span>
                </div>
              </div>
              <button className="text-sm px-3 py-1 rounded bg-primary text-white">Apply</button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-primary/5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Global Leadership Scholarship</h3>
                <p className="text-sm text-muted-foreground mb-2">$3,500 - For students with leadership experience</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-primary/10 mr-2">Deadline: June 1</span>
                  <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500">Medium Match</span>
                </div>
              </div>
              <button className="text-sm px-3 py-1 rounded bg-primary text-white">Apply</button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-primary/5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">STEM Excellence Award</h3>
                <p className="text-sm text-muted-foreground mb-2">$4,000 - For students in STEM fields</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-primary/10 mr-2">Deadline: May 30</span>
                  <span className="px-2 py-1 rounded bg-green-500/10 text-green-500">High Match</span>
                </div>
              </div>
              <button className="text-sm px-3 py-1 rounded bg-primary text-white">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
