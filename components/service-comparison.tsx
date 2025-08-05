"use client"

import { ArrowDownToDot, Zap } from "lucide-react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface ComparisonTier {
  name: string
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
}

const comparisonTiers: ComparisonTier[] = [
  {
    name: "What Others Do",
    description: "Common approaches in personal branding and marketing",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-gray-500 dark:text-gray-400 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "Inauthentic Scripts",
        description: "They will write scripts for you which don't connect with who you are",
        included: true,
      },
      {
        name: "Meaningless Editing",
        description: "They will do editing for you which makes no sense",
        included: true,
      },
      {
        name: "Empty Promises",
        description: "They will tell that this will get views and sales, but you are not satisfied",
        included: true,
      },
      {
        name: "Unhelpful Tools",
        description: "They will give you a CRM to track things but that does not help you",
        included: true,
      },
      {
        name: "Expensive Automation",
        description: "They will charge you making automations but those can be done by you in minutes",
        included: true,
      },
      {
        name: "Technical Limitations",
        description: "They don't know how to code and can't deal with technical things",
        included: true,
      },
    ],
  },
  {
    name: "What Me and My Team Does",
    description: "Our unique approach to elevating your personal brand",
    highlight: true,
    badge: "Premium Service",
    icon: (
      <div className="relative">
        <ArrowDownToDot className="w-7 h-7 relative z-10" />
      </div>
    ),
    features: [
      {
        name: "Personalized 1:1 Meetings",
        description: "1:1 Meetings to help you do what makes you satisfied",
        included: true,
      },
      {
        name: "Structured Content Framework",
        description: "Giving you a proper structure to write scripts, edit, and post without worrying about views or sales",
        included: true,
      },
      {
        name: "Full-Service Content Team",
        description: "Our team handles scripting, editing and posting",
        included: true,
      },
      {
        name: "Custom AI Solutions",
        description: "Our team builds AI agents and automations which help you not us",
        included: true,
      },
      {
        name: "Full-Stack Development",
        description: "We build full stack solutions such as AI SAAS/Agents which you can sell or build your startup/company",
        included: true,
      },
      {
        name: "Go-to-Market Strategy",
        description: "We will build you a Go-to-market strategy which you get sales for your product/service",
        included: true,
      },
    ],
  },
]

export function ServiceComparison() {
  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-zinc-900 dark:bg-zinc-100",
    "text-white dark:text-zinc-900",
    "border-none shadow-lg",
  )

  return (
    <section
      className="relative bg-white dark:bg-zinc-900 text-foreground py-12 px-4 md:py-16"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            How We're Different
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-3xl">
            Compare our comprehensive approach to personal branding and marketing with conventional methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisonTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                tier.highlight
                  ? "bg-gradient-to-b from-zinc-100/80 to-transparent dark:from-zinc-400/[0.15]"
                  : "bg-white dark:bg-zinc-800/50",
                "border",
                tier.highlight
                  ? "border-zinc-400/50 dark:border-zinc-400/20 shadow-xl"
                  : "border-zinc-200 dark:border-zinc-700 shadow-md",
                "hover:translate-y-0 hover:shadow-lg",
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-4 left-6">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl",
                      tier.highlight
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4">
                      <div
                        className={cn(
                          "mt-1 p-0.5 rounded-full transition-colors duration-200",
                          tier.highlight
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-zinc-400 dark:text-zinc-600",
                        )}
                      >
                        <CheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {feature.name}
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
