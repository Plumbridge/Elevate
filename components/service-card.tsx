"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  className?: string
}

export default function ServiceCard({ icon, title, description, link, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={cn("glass p-6 rounded-xl border border-primary/10 h-full flex flex-col", className)}
    >
      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground flex-grow mb-6">{description}</p>
      <Link href={link} className="block mt-auto">
        <Button variant="ghost" className="group p-0 h-auto hover:bg-transparent">
          <span className="mr-1 group-hover:mr-2 transition-all">Learn More</span>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  )
}

