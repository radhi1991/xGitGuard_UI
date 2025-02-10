"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function CommandLineForm() {
  const [args, setArgs] = useState({
    secondaryKeywords: "",
    extensions: "",
    mlPrediction: false,
    unmaskSecret: false,
    orgName: "",
    repoName: "",
    logLevel: "20",
    consoleLogging: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Command line arguments:", args)
    // Here you would typically send these arguments to your backend to run the scan
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Command Line Arguments</h2>

      <div>
        <Label htmlFor="secondary-keywords">Secondary Keywords</Label>
        <Input
          id="secondary-keywords"
          value={args.secondaryKeywords}
          onChange={(e) => setArgs({ ...args, secondaryKeywords: e.target.value })}
          placeholder="Comma-separated list of keywords"
        />
      </div>

      <div>
        <Label htmlFor="extensions">Extensions</Label>
        <Input
          id="extensions"
          value={args.extensions}
          onChange={(e) => setArgs({ ...args, extensions: e.target.value })}
          placeholder="Comma-separated list of extensions"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="ml-prediction"
          checked={args.mlPrediction}
          onCheckedChange={(checked) => setArgs({ ...args, mlPrediction: checked as boolean })}
        />
        <Label htmlFor="ml-prediction">Use ML Prediction</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="unmask-secret"
          checked={args.unmaskSecret}
          onCheckedChange={(checked) => setArgs({ ...args, unmaskSecret: checked as boolean })}
        />
        <Label htmlFor="unmask-secret">Unmask Secret</Label>
      </div>

      <div>
        <Label htmlFor="org-name">Organization Name</Label>
        <Input
          id="org-name"
          value={args.orgName}
          onChange={(e) => setArgs({ ...args, orgName: e.target.value })}
          placeholder="Enter organization name"
        />
      </div>

      <div>
        <Label htmlFor="repo-name">Repository Name</Label>
        <Input
          id="repo-name"
          value={args.repoName}
          onChange={(e) => setArgs({ ...args, repoName: e.target.value })}
          placeholder="Enter repository name"
        />
      </div>

      <div>
        <Label htmlFor="log-level">Log Level</Label>
        <Input
          id="log-level"
          type="number"
          value={args.logLevel}
          onChange={(e) => setArgs({ ...args, logLevel: e.target.value })}
          min="10"
          max="50"
          step="10"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="console-logging"
          checked={args.consoleLogging}
          onCheckedChange={(checked) => setArgs({ ...args, consoleLogging: checked as boolean })}
        />
        <Label htmlFor="console-logging">Enable Console Logging</Label>
      </div>

      <Button type="submit">Run Scan</Button>
    </form>
  )
}

