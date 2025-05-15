import { Skeleton } from "@/components/ui/skeleton"

export default function TestimonialsLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mx-auto mb-2" />
            <Skeleton className="h-6 w-5/6 mx-auto" />
          </div>

          {/* Featured Testimonial Skeleton */}
          <div className="rounded-xl glass p-1 border border-primary/10 shadow-lg">
            <div className="px-4 py-8 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Skeleton className="h-10 w-10 rounded-full mr-2" />
                    <Skeleton className="h-8 w-48" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />

                  <div className="flex flex-col gap-2 mb-6">
                    <Skeleton className="h-5 w-64" />
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-5 w-32" />
                  </div>

                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="h-5 w-5 rounded-full" />
                    ))}
                  </div>

                  <Skeleton className="h-6 w-32 rounded-full" />
                </div>
                <div className="flex justify-center">
                  <Skeleton className="w-64 h-64 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Skeleton className="h-10 w-64 mb-8" />

            {/* Filters Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-32 ml-auto" />
            </div>

            {/* Tabs Skeleton */}
            <div className="flex gap-2 overflow-x-auto mb-8">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-32 rounded-md shrink-0" />
              ))}
            </div>

            {/* Testimonials Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Skeleton className="h-6 w-32" />
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Skeleton key={j} className="h-4 w-4 rounded-full" />
                        ))}
                      </div>
                    </div>
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-6 w-24 rounded-full" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
