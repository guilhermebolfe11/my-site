import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import useTranslation from '../../hooks/useTranslation';

export function About() {
  const { t } = useTranslation();
  return (
    <Card elevation={0}>
      <CardHeader title={t("About.Title")} />
      <CardContent>
        <Typography variant="body1">
          {t("About.Text")}
        </Typography>
      </CardContent>
    </Card>
  );
}
