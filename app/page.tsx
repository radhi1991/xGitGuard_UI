import EnvVariableForm from "./components/EnvVariableForm"
import ScanTypeSelector from "./components/ScanTypeSelector"
import CommandLineForm from "./components/CommandLineForm"
import ScanResults from "./components/ScanResults"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">GitHub Repo Scanner</h1>
      <EnvVariableForm />
      <ScanTypeSelector />
      <CommandLineForm />
      <ScanResults />
    </div>
  )
}

