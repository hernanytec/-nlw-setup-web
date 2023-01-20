import * as Popover from '@radix-ui/react-popover'
import classNames from 'classnames'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps {
  disabled?: boolean
}

export function HabitDay({ disabled }: HabitDayProps) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={classNames(
          'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg',
          {
            'opacity-40 cursor-not-allowed': disabled,
          },
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] bg-zinc-900 p-6 rounded-2xl flex flex-col">
          <span className="font-semibold text-zinc-400">sexta-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            20/01
          </span>

          <ProgressBar />

          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
