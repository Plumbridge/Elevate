"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatInterface } from "@/components/ai-chat/chat-interface"

export function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <>
      {!isChatOpen && (
        <Button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 p-0 shadow-lg hover:from-purple-700 hover:to-indigo-700 lg:bottom-auto lg:right-auto lg:top-4 lg:mr-4"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {isChatOpen && (
        <div
          className={
            isMobile
              ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              : "fixed bottom-0 right-0 top-0 z-50 w-1/3 min-w-[400px]"
          }
        >
          <div className="h-full">
            <ChatInterface onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
