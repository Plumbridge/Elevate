"use client"

import { useEffect } from 'react'

export default function EventSuppressor() {
  useEffect(() => {
    // 1. Suppress console warnings
    const suppressConsoleWarnings = () => {
      const originalWarn = console.warn
      const originalError = console.error
      
      console.warn = function(...args) {
        // Filter out specific warnings
        const warningText = args.join(' ')
        if (
          warningText.includes('non-passive event listener') || 
          warningText.includes('wheel event') ||
          warningText.includes('data-new-gr-c-s-check-loaded') ||
          warningText.includes('hydrated') ||
          warningText.includes('Extra attributes from the server') ||
          warningText.includes('defined a target options') ||
          warningText.includes('provided ref is not yet hydrated')
        ) {
          return
        }
        
        originalWarn.apply(console, args)
      }
      
      console.error = function(...args) {
        // Filter out hydration errors
        const errorText = args.join(' ')
        if (
          errorText.includes('hydrat') ||
          errorText.includes('Hydration')
        ) {
          return
        }
        
        originalError.apply(console, args)
      }
      
      return () => {
        console.warn = originalWarn
        console.error = originalError
      }
    }
    
    // 2. Make all wheel events passive by default
    const makeWheelEventsPassive = () => {
      if (typeof window === 'undefined') return
      
      const originalAddEventListener = EventTarget.prototype.addEventListener
      EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'wheel') {
          let newOptions = options || {}
          if (typeof newOptions === 'object') {
            newOptions = { ...newOptions, passive: true }
          } else {
            newOptions = { passive: true, capture: !!options }
          }
          return originalAddEventListener.call(this, type, listener, newOptions)
        }
        return originalAddEventListener.call(this, type, listener, options)
      }
      
      return () => {
        EventTarget.prototype.addEventListener = originalAddEventListener
      }
    }
    
    // 3. Remove Grammarly attributes
    const removeGrammarlyAttributes = () => {
      const elements = document.querySelectorAll('[data-new-gr-c-s-check-loaded], [data-gr-ext-installed]')
      elements.forEach(el => {
        if (el.hasAttribute('data-new-gr-c-s-check-loaded')) {
          el.removeAttribute('data-new-gr-c-s-check-loaded')
        }
        if (el.hasAttribute('data-gr-ext-installed')) {
          el.removeAttribute('data-gr-ext-installed')
        }
      })
    }

    // Initialize suppressions
    const unPatchConsole = suppressConsoleWarnings()
    const unPatchEventListener = makeWheelEventsPassive()
    
    // Run Grammarly cleanup once
    removeGrammarlyAttributes()

    // Set up a MutationObserver to watch for Grammarly adding attributes
    const observer = new MutationObserver((mutations) => {
      let shouldRemove = false
      
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'data-new-gr-c-s-check-loaded' || 
              mutation.attributeName === 'data-gr-ext-installed') {
            shouldRemove = true
          }
        }
      })
      
      if (shouldRemove) {
        removeGrammarlyAttributes()
      }
    })

    // Start observing the document
    observer.observe(document.body, { 
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
    })

    // Cleanup
    return () => {
      observer.disconnect()
      if (unPatchConsole) unPatchConsole()
      if (unPatchEventListener) unPatchEventListener()
    }
  }, [])

  return null
}