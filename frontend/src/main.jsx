"use client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DecideRoute } from './DecideRoute.jsx'
import { RoleProvider } from './RoleProvider.jsx'
import {ErrorBoundary} from "react-error-boundary"
import { fallbackRender } from './errors/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <RoleProvider>
        <DecideRoute/>
      </RoleProvider>
    </ErrorBoundary>
  </StrictMode>,
)
