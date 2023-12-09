import React, { useState } from "react";
import {
  FormGroup,
  Typography,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box,
} from "@mui/material";
import { primaryColor } from "../util/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CitiesAndDates from "../components/CitiesAndDates";

const Checklist = (props) => {
  const { from, to, date } = props;
  const [progress, setProgress] = useState(15);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  // State to keep track of sub-checkboxes within accordions
  const [subCheckboxes, setSubCheckboxes] = useState({
    panel1: {
      checkbox1: false,
    },
    panel2: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
    },
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  const handleCheckboxChange = (event, isChecked, panel, checkboxId) => {
    // If the checkbox is checked (selected), decrement progress by 3; otherwise, increment it by 3
    if (isChecked) {
      setProgress((prevProgress) => prevProgress - 3);
    } else {
      setProgress((prevProgress) => prevProgress + 3);
    }

    // Update the state of the sub-checkbox within the accordion
    setSubCheckboxes((prevState) => ({
      ...prevState,
      [panel]: {
        ...prevState[panel],
        [checkboxId]: isChecked,
      },
    }));

    // Check if all sub-checkboxes within the accordion are checked
    const allChecked = Object.values(subCheckboxes[panel]).every((value) => value);
    // If all sub-checkboxes are checked, check the accordion checkbox; otherwise, uncheck it
    document.querySelector(`#${panel}-accordion-checkbox`).checked = allChecked;
  };

  const handleAccordionCheckboxChange = (panel) => (event, isChecked) => {
    // Check or uncheck all sub-checkboxes within the accordion
    for (const checkboxId in subCheckboxes[panel]) {
      subCheckboxes[panel][checkboxId] = isChecked;
      document.getElementById(`${panel}-${checkboxId}`).checked = isChecked;
    }
    // Update the state of the sub-checkboxes
    setSubCheckboxes((prevState) => ({
      ...prevState,
      [panel]: {
        ...Object.keys(prevState[panel]).reduce((acc, key) => {
          acc[key] = isChecked;
          return acc;
        }, {}),
      },
    }));

    // Update the progress based on the state of sub-checkboxes
    if (isChecked) {
      setProgress((prevProgress) => prevProgress - 3 * Object.keys(subCheckboxes[panel]).length);
    } else {
      setProgress((prevProgress) => prevProgress + 3 * Object.keys(subCheckboxes[panel]).length);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "16px",
        }}
      >
        <CitiesAndDates from={from} to={to} date={date} />
        <Typography variant="body1" style={{ color: primaryColor }}>
          {progress > 0 ? `Estimated time: ${progress} days` : "You're good to go!"}
        </Typography>
        <Accordion
          expanded={expandedAccordion === "panel1"}
          onChange={handleAccordionChange("panel1")}
          style={{ width: "350px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    id="panel1-accordion-checkbox"
                    checked={subCheckboxes.panel1.checkbox1}
                    onChange={(e) =>
                      handleAccordionCheckboxChange("panel1")(e, e.target.checked)
                    }
                  />
                }
                label="Valid Passport"
              />
            </FormGroup>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="panel1-checkbox1"
                      checked={subCheckboxes.panel1.checkbox1}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e,
                          e.target.checked,
                          "panel1",
                          "checkbox1"
                        )
                      }
                    />
                  }
                  label="6 months validity remaining"
                  style={{ marginLeft: "20px" }}
                />
              </FormGroup>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "panel2"}
          onChange={handleAccordionChange("panel2")}
          style={{ width: "350px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header-2"
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    id="panel2-accordion-checkbox"
                    checked={Object.values(subCheckboxes.panel2).every((value) => value)}
                    onChange={(e) =>
                      handleAccordionCheckboxChange("panel2")(e, e.target.checked)
                    }
                  />
                }
                label="PRC Tourist Visa ($140 fee)"
              />
            </FormGroup>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="panel2-checkbox1"
                      checked={subCheckboxes.panel2.checkbox1}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e,
                          e.target.checked,
                          "panel2",
                          "checkbox1"
                        )
                      }
                    />
                  }
                  label="Evidence of Sufficient Funds"
                  style={{ marginLeft: "20px" }}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="panel2-checkbox2"
                      checked={subCheckboxes.panel2.checkbox2}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e,
                          e.target.checked,
                          "panel2",
                          "checkbox2"
                        )
                      }
                    />
                  }
                  label="Return or Onward Ticket"
                  style={{ marginLeft: "20px" }}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="panel2-checkbox3"
                      checked={subCheckboxes.panel2.checkbox3}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e,
                          e.target.checked,
                          "panel2",
                          "checkbox3"
                        )
                      }
                    />
                  }
                  label="Completed Visa Application"
                  style={{ marginLeft: "20px" }}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="panel2-checkbox4"
                      checked={subCheckboxes.panel2.checkbox4}
                      onChange={(e) =>
                        handleCheckboxChange(
                          e,
                          e.target.checked,
                          "panel2",
                          "checkbox4"
                        )
                      }
                    />
                  }
                  label="Detailed travel itinerary"
                  style={{ marginLeft: "20px" }}
                />
              </FormGroup>
            </div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Checklist;
