import { useState } from "react";
import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import experienceData from "../data/experienceData.js";
import FadeInSection from "./FadeInSection.jsx";

function getAccessibilityProps(index, isMobile) {
  const direction = isMobile ? "horizontal" : "vertical";

  return {
    id: `${direction}-experience-tab-${index}`,
    "aria-controls": `${direction}-experience-panel-${index}`,
  };
}

function ExperiencePanel({ children, selectedIndex, index, isMobile }) {
  const direction = isMobile ? "horizontal" : "vertical";

  return (
    <div
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`${direction}-experience-panel-${index}`}
      aria-labelledby={`${direction}-experience-tab-${index}`}
    >
      {selectedIndex === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>{children}</Box>
      )}
    </div>
  );
}

function ExperienceTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function handleTabChange(_event, newIndex) {
    setSelectedIndex(newIndex);
  }

  return (
    <Box
      className="experience-tabs"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: 300,
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons="auto"
        value={selectedIndex}
        onChange={handleTabChange}
        aria-label="Professional experience"
        sx={{
          flexShrink: 0,

          borderRight: isMobile ? 0 : "1px solid var(--color-surface-strong)",

          borderBottom: isMobile ? "1px solid var(--color-surface-strong)" : 0,

          "& .MuiTabs-indicator": {
            backgroundColor: "var(--color-accent)",
            transition: "none",
            WebkitTransition: "none",
          },
        }}
      >
        {experienceData.map((experience, index) => (
          <Tab
            key={experience.id}
            label={experience.company}
            {...getAccessibilityProps(index, isMobile)}
            sx={{
              minWidth: isMobile ? "120px" : "auto",
              minHeight: "48px",
              padding: "10px 20px",

              alignItems: isMobile ? "center" : "flex-start",

              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 500,
              lineHeight: 1.3,
              textAlign: isMobile ? "center" : "left",
              textTransform: "none",

              transition:
                "color var(--transition-fast), background-color var(--transition-fast)",

              "&.Mui-selected": {
                color: "var(--color-accent)",
              },

              "&:hover": {
                color: "var(--color-accent)",
                backgroundColor: "rgb(99 230 255 / 8%)",
              },

              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },

              "&:focus-visible": {
                outline: "none",
                boxShadow: "none",
                color: "var(--color-accent)",
                backgroundColor: "rgb(99 230 255 / 12%)",
              },

              "&.Mui-focusVisible": {
                outline: "none",
                boxShadow: "none",
                color: "var(--color-accent)",
                backgroundColor: "rgb(99 230 255 / 12%)",
              },
            }}
          />
        ))}
      </Tabs>

      <Box className="experience-panels" sx={{ flexGrow: 1 }}>
        {experienceData.map((experience, index) => (
          <ExperiencePanel
            key={experience.id}
            selectedIndex={selectedIndex}
            index={index}
            isMobile={isMobile}
          >
            <h3 className="experience-role">
              {experience.title}{" "}
              <span className="experience-company">@ {experience.company}</span>
            </h3>

            <p className="experience-duration">{experience.duration}</p>

            <ul className="experience-description">
              {experience.descriptions.map((description, index) => (
                <FadeInSection
                  as="li"
                  key={description}
                  delay={`${(index + 1) * 100}ms`}
                >
                  {description}
                </FadeInSection>
              ))}
            </ul>
          </ExperiencePanel>
        ))}
      </Box>
    </Box>
  );
}

export default ExperienceTabs;
