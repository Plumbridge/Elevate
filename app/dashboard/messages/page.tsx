import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, User, Star, Archive, CheckCheck } from "lucide-react"

export default function MessagesPage() {
  // Mock conversation data
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Academic Advisor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've reviewed your course selections and they look good. Let me know if you have any questions.",
      time: "10:30 AM",
      unread: true,
      online: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Visa Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Your visa application is progressing well. We should hear back within the next week.",
      time: "Yesterday",
      unread: false,
      online: false,
    },
    {
      id: 3,
      name: "Accommodation Team",
      role: "Housing Support",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We've secured your housing request for the fall semester. Please confirm by Friday.",
      time: "Monday",
      unread: true,
      online: true,
    },
    {
      id: 4,
      name: "Financial Aid Office",
      role: "Financial Support",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Your scholarship application has been received. We'll review it shortly.",
      time: "Aug 15",
      unread: false,
      online: false,
    },
    {
      id: 5,
      name: "Dr. Emily Rodriguez",
      role: "Program Director",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Looking forward to welcoming you to our program next semester!",
      time: "Aug 10",
      unread: false,
      online: true,
    },
  ]

  // Mock messages for the active conversation
  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hi there! I hope you're doing well. I wanted to check in on your course registration progress.",
      time: "10:15 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content:
        "Hello Sarah! I'm doing great, thanks. I've selected most of my courses but had a question about the elective requirements.",
      time: "10:20 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content:
        "Of course, I'd be happy to help with that. For your program, you need to select two humanities electives and one science elective.",
      time: "10:22 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      content:
        "That makes sense. I was looking at taking Introduction to Psychology and World Literature for humanities. Would those work?",
      time: "10:25 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Sarah Johnson",
      content:
        "Those are excellent choices! Both will fulfill your humanities requirements. For your science elective, I'd recommend Environmental Science or Introduction to Biology if you haven't taken those yet.",
      time: "10:28 AM",
      isMe: false,
    },
    {
      id: 6,
      sender: "Sarah Johnson",
      content: "I've reviewed your course selections and they look good. Let me know if you have any questions.",
      time: "10:30 AM",
      isMe: false,
    },
  ]

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Communicate with your advisors and support team</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with conversations */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-8" />
            </div>
          </div>

          <Tabs defaultValue="all" className="flex-1">
            <div className="px-3 pt-3">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="flagged">Flagged</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="flex-1 overflow-auto p-0 m-0">
              <div className="divide-y">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex items-start p-3 gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${conversation.id === 1 ? "bg-gray-100 dark:bg-gray-800" : ""}`}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <img src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      </Avatar>
                      {conversation.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {conversation.time}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{conversation.role}</p>
                      <p className="text-sm truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread && (
                      <Badge variant="default" className="rounded-full h-2 w-2 p-0 bg-blue-500" />
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unread" className="flex-1 overflow-auto p-0 m-0">
              <div className="divide-y">
                {conversations
                  .filter((c) => c.unread)
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className="flex items-start p-3 gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <Avatar className="h-10 w-10">
                        <img src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-medium truncate">{conversation.name}</h3>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                            {conversation.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{conversation.role}</p>
                        <p className="text-sm truncate">{conversation.lastMessage}</p>
                      </div>
                      <Badge variant="default" className="rounded-full h-2 w-2 p-0 bg-blue-500" />
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="flagged" className="flex-1 p-4">
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <Star className="h-12 w-12 text-muted-foreground mb-2" />
                <h3 className="font-medium text-lg">No flagged messages</h3>
                <p className="text-muted-foreground">Flag important messages to find them quickly</p>
              </div>
            </TabsContent>

            <TabsContent value="archived" className="flex-1 p-4">
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <Archive className="h-12 w-12 text-muted-foreground mb-2" />
                <h3 className="font-medium text-lg">No archived messages</h3>
                <p className="text-muted-foreground">Archive messages to keep your inbox clean</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="p-3 border-b flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <img src={conversations[0].avatar || "/placeholder.svg"} alt={conversations[0].name} />
              </Avatar>
              <div>
                <h3 className="font-medium">{conversations[0].name}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
                  Online • {conversations[0].role}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="text-center">
              <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Today</span>
            </div>

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] ${message.isMe ? "bg-blue-500 text-white rounded-t-lg rounded-bl-lg" : "bg-gray-100 dark:bg-gray-800 rounded-t-lg rounded-br-lg"} p-3`}
                >
                  {!message.isMe && <p className="text-xs font-medium mb-1">{message.sender}</p>}
                  <p>{message.content}</p>
                  <div
                    className={`text-xs mt-1 flex items-center justify-end gap-1 ${message.isMe ? "text-blue-100" : "text-muted-foreground"}`}
                  >
                    {message.time}
                    {message.isMe && <CheckCheck className="h-3 w-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-3 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button
                size="icon"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
