import { contextBridge } from 'electron'

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('electron', {
    // TODO
  })
} catch (error) {
  console.error(error)
}
