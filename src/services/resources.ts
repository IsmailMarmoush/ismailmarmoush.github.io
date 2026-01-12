export const loadDocument = async (filePath: string): Promise<string> => {
    const response = await fetch(filePath)
    if (!response.ok) {
      console.error(`Failed to load article: ${response.status} ${response.statusText}`)
      throw new Error(`Failed to load article: ${response.statusText}`)
    }
  
    return await response.text()
  }