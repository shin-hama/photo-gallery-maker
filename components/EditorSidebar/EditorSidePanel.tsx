import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Stack from '@mui/material/Stack'
import Icon from '@mui/material/Icon'
import ImagePanel from './ImagesPanel'

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`side-panel-tabpanel-${index}`}
      aria-labelledby={`side-panel-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `side-panel-tab-${index}`,
    'aria-controls': `side-panel-tabpanel-${index}`,
  }
}

const EditorSidePanel = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack direction="row" height="100%" width="100%" bgcolor="background.paper">
      <Box color="white">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab
            icon={<Icon baseClassName="fas" className="fa-images" />}
            label="Images"
            {...a11yProps(0)}
          />
          <Tab icon={<Icon color="primary">add_circle</Icon>} label="Layout" {...a11yProps(1)} />
          <Tab icon={<Icon color="primary">add_circle</Icon>} label="Share" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <TabPanel value={value} index={0}>
          <ImagePanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Layout
        </TabPanel>
        <TabPanel value={value} index={2}>
          Share
        </TabPanel>
      </Box>
    </Stack>
  )
}

export default EditorSidePanel
