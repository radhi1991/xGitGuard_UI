"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ScanTypeSelector() {
  const [scanType, setScanType] = useState("enterprise")

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Select Scan Type</h2>
      <RadioGroup value={scanType} onValueChange={setScanType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise">Enterprise</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="other" id="other" />
          <Label htmlFor="other">Other</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

