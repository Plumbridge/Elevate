"use client"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { cn } from "@/lib/utils"

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <ReactMarkdown
      className={cn("prose prose-invert max-w-none", className)}
      components={{
        h1: ({ node, ...props }) => <h1 className="mb-2 mt-6 text-xl font-bold" {...props} />,
        h2: ({ node, ...props }) => <h2 className="mb-2 mt-5 text-lg font-bold" {...props} />,
        h3: ({ node, ...props }) => <h3 className="mb-2 mt-4 text-base font-bold" {...props} />,
        h4: ({ node, ...props }) => <h4 className="mb-1 mt-3 text-sm font-bold" {...props} />,
        p: ({ node, ...props }) => <p className="mb-3 leading-relaxed" {...props} />,
        a: ({ node, ...props }) => (
          <a
            className="text-blue-400 hover:text-blue-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => <ul className="mb-3 list-disc pl-6" {...props} />,
        ol: ({ node, ...props }) => <ol className="mb-3 list-decimal pl-6" {...props} />,
        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-2 border-primary/50 pl-4 italic text-gray-400" {...props} />
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              style={vscDarkPlus}
              PreTag="div"
              className="rounded-md border border-primary/10 !bg-black/50 !p-3 text-sm"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="rounded-sm bg-primary/10 px-1 py-0.5 text-sm font-medium text-primary" {...props}>
              {children}
            </code>
          )
        },
        table({ node, ...props }) {
          return (
            <div className="my-4 w-full overflow-auto">
              <table className="w-full border-collapse text-sm" {...props} />
            </div>
          )
        },
        thead({ node, ...props }) {
          return <thead className="border-b border-primary/10" {...props} />
        },
        tbody({ node, ...props }) {
          return <tbody className="divide-y divide-primary/5" {...props} />
        },
        tr({ node, ...props }) {
          return <tr className="m-0 p-0 even:bg-muted/50" {...props} />
        },
        th({ node, ...props }) {
          return <th className="border border-primary/10 px-4 py-2 text-left font-bold" {...props} />
        },
        td({ node, ...props }) {
          return <td className="border border-primary/10 px-4 py-2 text-left" {...props} />
        },
        hr: ({ node, ...props }) => <hr className="my-4 border-primary/10" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
