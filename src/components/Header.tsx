import { Plus } from 'phosphor-react'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={Logo} alt="" />

      <button
        type="button"
        className="flex items-center gap-3 border border-violet-500 font-semibold rounded-lg px-6 py-4 hover:border-violet-300 transition-colors"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  )
}
