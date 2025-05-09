import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Container, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

const theme = createTheme({
  typography: {
    fontFamily: ['Space Mono', 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', "monospace"]
  },
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#00e5ff',
    },
  },
});

function App() {
  const [inputMood, setInputMood] = useState("");
  const [submittedMood, setSubmittedMood] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood: inputMood }),
      });
      const data = await response.json();
      setSubmittedMood(data.mood);
      setPlaylist(data.playlist); // Update playlist dynamically
    } catch (error) {
      console.error("Error fetching playlist:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <LibraryMusicIcon color="primary" /> Mood DJ
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
          <TextField
            label="How are you feeling?"
            variant="outlined"
            fullWidth
            value={inputMood}
            onChange={(e) => setInputMood(e.target.value)}
            style={{ marginBottom: "1rem" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!inputMood.trim()}
          >
            Get Playlist
          </Button>
        </form>
        {submittedMood && (
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Your Playlist for when you're feeling <b>{submittedMood}</b>
              </Typography>
              <List>
                {playlist.map((song, index) => (
                  <ListItem key={index} divider>
                    <ListItemIcon>
                      <QueueMusicIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={song.title}
                      secondary={song.artist}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;

