/*"use client"

import { useState } from "react"
import { File, Folder, ChevronDown, ChevronRight, Settings, Search, GitBranch, Bell, X } from "lucide-react"

export default function VSCodeEditor() {
  const [activeTab, setActiveTab] = useState("index.js")
  const [expandedFolder, setExpandedFolder] = useState("src")

  const files = [
    { name: "index.js", content: 'console.log("Hello, World!");' },
    { name: "styles.css", content: "body { font-family: sans-serif; }" },
  ]

  return (
    <div className="flex flex-col h-screen text-gray-300 bg-gray-900">
      
      <div className="flex items-center px-4 py-2 bg-gray-800 text-sm">
        <div className="flex space-x-4">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        <div className="w-64 bg-gray-800 flex flex-col">
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold">EXPLORER</span>
              <ChevronDown size={16} />
            </div>
            <div className="ml-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setExpandedFolder(expandedFolder === "src" ? "" : "src")}
              >
                {expandedFolder === "src" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder size={16} className="ml-1" />
                <span className="ml-2">src</span>
              </div>
              {expandedFolder === "src" && (
                <div className="ml-4">
                  {files.map((file) => (
                    <div
                      key={file.name}
                      className={`flex items-center cursor-pointer ${activeTab === file.name ? "bg-gray-700" : ""}`}
                      onClick={() => setActiveTab(file.name)}
                    >
                      <File size={16} className="mr-2" />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

       
        <div className="flex-1 bg-gray-900 p-4">
          <div className="bg-gray-800 p-4 rounded">
            <pre>{files.find((file) => file.name === activeTab)?.content}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}*/