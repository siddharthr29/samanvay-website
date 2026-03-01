import { cn } from "@/lib/utils"

interface WaveDividerProps {
  variant?: "wave" | "curve" | "slant"
  flip?: boolean
  className?: string
}

export function WaveDivider({ variant = "wave", flip = false, className }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-[0] -my-px",
        flip && "rotate-180",
        className
      )}
    >
      {variant === "wave" && (
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            className="fill-muted/30"
          />
        </svg>
      )}
      {variant === "curve" && (
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C0 60 360 0 720 0C1080 0 1440 60 1440 60H0Z"
            className="fill-muted/30"
          />
        </svg>
      )}
      {variant === "slant" && (
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,60 1440,0 1440,60"
            className="fill-muted/30"
          />
        </svg>
      )}
    </div>
  )
}
