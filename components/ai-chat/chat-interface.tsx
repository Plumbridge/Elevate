"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Paperclip, Mic, Bot, User, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChatStore } from "@/lib/stores/chat-store"
import type { ChatMessage } from "@/lib/types"
import { Markdown } from "@/components/ai-chat/markdown"

interface ChatInterfaceProps {
  onClose: () => void
}

export function ChatInterface({ onClose }: ChatInterfaceProps) {
  const { messages, isLoading, sendMessage, clearMessages } = useChatStore()

  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (input.trim() && !isLoading) {
      sendMessage(input.trim())
      setInput("")

      // Focus back on input after sending
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-full flex-col border-l border-primary/10 bg-card">
      {/* Chat header */}
      <div className="flex items-center justify-between border-b border-primary/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 bg-primary/20">
            <Bot className="h-4 w-4 text-primary" />
          </Avatar>
          <div>
            <h3 className="font-medium">Elevate Assistant</h3>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="h-5 px-1 text-xs font-normal text-muted-foreground">
                AI
              </Badge>
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Chat messages */}
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-4 p-4">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
              <Bot className="h-12 w-12 text-muted-foreground" />
              <h3 className="text-lg font-medium">How can I help you today?</h3>
              <p className="text-sm text-muted-foreground">
                Ask me about your applications, visa status, accommodation, or any other questions about studying
                abroad.
              </p>
            </div>
          ) : (
            messages.map((message, index) => <ChatMessageItem key={index} message={message} />)
          )}
          {isLoading && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 bg-primary/20">
                <Bot className="h-4 w-4 text-primary" />
              </Avatar>
              <div className="flex-1 rounded-lg bg-muted p-3">
                <div className="flex gap-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input area */}
      <div className="border-t border-primary/10 p-4">
        <div className="flex items-end gap-2">
          <Textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[60px] resize-none"
            maxRows={5}
          />
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          {messages.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearMessages} className="h-8 text-xs">
              Clear chat
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

interface ChatMessageItemProps {
  message: ChatMessage
}

function ChatMessageItem({ message }: ChatMessageItemProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <Avatar className={cn("h-8 w-8", isUser ? "bg-blue-500" : "bg-primary/20")}>
        {isUser ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-primary" />}
      </Avatar>
      <div className={cn("flex-1 rounded-lg p-3", isUser ? "bg-blue-500 text-white" : "bg-muted")}>
        {isUser ? <p className="whitespace-pre-wrap">{message.content}</p> : <Markdown content={message.content} />}
      </div>
    </div>
  )
}
