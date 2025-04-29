"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Session, User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signOut: () => Promise<void>
  getProfile: () => Promise<any>
}

// Create the auth context
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signOut: async () => {},
  getProfile: async () => null,
})

// Export the auth provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // Get the current session
    const getSession = async () => {
      setIsLoading(true)
      
      try {
        const { data } = await supabase.auth.getSession()
        setSession(data.session)
        setUser(data.session?.user || null)
      } catch (error) {
        console.error("Error getting session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user || null)
        setIsLoading(false)
      }
    )

    // Cleanup on unmount
    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  // Sign out function
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  // Get user profile data
  const getProfile = async () => {
    if (!user) return null

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single()

    if (error) {
      console.error("Error fetching profile:", error)
      return null
    }

    return data
  }

  // Provide auth context
  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        signOut,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Export the auth hook
export const useAuth = () => useContext(AuthContext)