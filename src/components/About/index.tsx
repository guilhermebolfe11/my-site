import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@material-ui/core';

export function About() {
  return (
    <Card elevation={0}>
      <CardHeader title="About" />
      <CardContent>
        <Typography variant="body1">
          Brazilian, raised in the countryside of Paraná from a young age,
          he liked computers, I started with a basic typing course and evolved
          into hardware until I reached my graduation as a software engineer.
          Today I can say with certainty that I do what I like.
          I have some hobbies, I like sports, games and of course a netflix,
          who doesn't like a movie or series.
        </Typography>
      </CardContent>
    </Card>
  );
}
