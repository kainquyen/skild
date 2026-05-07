import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div id="home">
      <h1>Skild - The Registry of Agentic Intelligence</h1>
    </div>
  )
}
