type SectionDividerProps = {
  label?: string
}

export function SectionDivider({
  label,
}: SectionDividerProps) {
  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          {/* LINE */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>

          {/* LABEL */}
          {label && (
            <span className="relative bg-background px-4 text-sm font-medium text-muted-foreground">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}