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



const playlist = [
  { title: "Walking on Sunshine", artist: "Katrina & The Waves" },
  { title: "Happy", artist: "Pharrell Williams" },
  { title: "I Wanna Dance with Somebody", artist: "Whitney Houston" },
  { title: "Good Vibrations", artist: "The Beach Boys" },
  { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
  { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
  { title: "Shake It Off", artist: "Taylor Swift" },
  { title: "Don't Stop Believin'", artist: "Journey" },
  { title: "Dancing Queen", artist: "ABBA" },
  { title: "I Got You (I Feel Good)", artist: "James Brown" }
];

function App() {
  const [inputMood, setInputMood] = useState("");
  const [submittedMood, setSubmittedMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to send the mood to the backend and get a playlist
    // For now, we'll just simulate this by setting the submitted mood
    // and using the static playlist defined above.
    setSubmittedMood(inputMood);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <LibraryMusicIcon color="primary" /> Mood Playlist Generator
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

