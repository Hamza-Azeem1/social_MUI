import { Settings } from "@mui/icons-material"
import { Button } from "@mui/material"

function App() {
  return (
    <>
      <div>
        Hello World
      </div>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Button
      </Button>
    </>
  )
}

export default App
