import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab';
import {
  PlayCircleOutline,
  School,
  Home as HomeIcon,
  HomeWork,
  Sports,
  HelpOutline,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

const LifeTimeLine: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <PlayCircleOutline color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title={t('Born.Title')} />
            <CardContent>{t('Born.Content')}</CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HomeIcon color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <School color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Sports color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HomeWork color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HomeWork color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HomeWork color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HomeWork color="secondary" />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: '#ECEFF1' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardHeader title="1998" />
            <CardContent>
              Because you need restA as aSA sa as AS As aSa AS asA SA
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HelpOutline color="secondary" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
    </Timeline>
  );
};

export default LifeTimeLine;
