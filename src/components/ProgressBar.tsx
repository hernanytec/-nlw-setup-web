interface ProgressBarProps {
  progress?: number
}
export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl w-full bg-zinc-700 mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-violet-600"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}
