"use client"

import { useEffect } from 'react'

export default function GrammarlySuppressionScript() {
  useEffect(() => {
    // Function to remove Grammarly attributes
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

    // Run it once
    removeGrammarlyAttributes()

    // Set up a MutationObserver to watch for Grammarly adding these attributes
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
    return () => observer.disconnect()
  }, [])

  return null
}