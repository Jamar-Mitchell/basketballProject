import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "./Questionnaire.css";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../context/ResultContext";

export default function Questionnaire() {
  const navigate = useNavigate();
  const { results, updateResults } = useContext(ResultContext);

  const [genderValue, setGenderValue] = React.useState("");
  const [ageValue, setAgeValue] = React.useState("");
  const [positionValue, setPositionValue] = React.useState("");
  const [positionOtherValue, setPositionOtherValue] = React.useState("");
  const [decisionValue, setDecisionValue] = React.useState("");
  const [experienceValue, setExperienceValue] = React.useState("");
  const [levelValue, setLevelValue] = React.useState("");
  const [playedLevelValue, setPlayedLevelValue] = React.useState("");
  const [professionalValue, setProfessionalValue] = React.useState("");

  const [allChecked, setAllChecked] = React.useState(false);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderValue(event.target.value);
  };

  const handleAgeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPositionValue(event.target.value);
  };

  const handlePositionOtherChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPositionOtherValue(event.target.value);
  };

  const handleDecisionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDecisionValue(event.target.value);
  };

  const handleExperienceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperienceValue(event.target.value);
  };

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevelValue(event.target.value);
  };

  const handlePlayedLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlayedLevelValue(event.target.value);
  };

  const handleProfessionalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfessionalValue(event.target.value);
  };

  useEffect(() => {
    setAllChecked(
      !!genderValue &&
        !!ageValue &&
        !!positionValue &&
        (positionValue !== "Other" || !!positionOtherValue) &&
        !!decisionValue &&
        (decisionValue === "No" || !!experienceValue) &&
        !!levelValue &&
        !!playedLevelValue &&
        !!professionalValue
    );
  }, [
    genderValue,
    ageValue,
    positionValue,
    positionOtherValue,
    decisionValue,
    experienceValue,
    levelValue,
    playedLevelValue,
    professionalValue,
  ]);

  const handleSubmit = () => {
    const formData = {
      user: results.user,
      demographics: {
        gender: genderValue,
        age: ageValue,
        current_position: positionValue,
        current_position_other: positionOtherValue,
        decision_making: decisionValue,
        experience_years: experienceValue,
        current_level: levelValue,
        highest_level_played: playedLevelValue,
        professional_organization: professionalValue,
      },
      playerResults: results.playerResults,
    };

    updateResults(formData);
    console.log(JSON.stringify(results, null, 2));

    navigate("/main");

    // Add navigation or other form submission logic here
  };

  return (
    <>
      <div className="disclaimerContainer">
        <Paper className="disclaimer">
          <div>
            <FormGroup>
              <FormControl>
                <FormLabel id="gender-radio-group">Gender Identity:</FormLabel>
                <TextField
                  value={genderValue}
                  onChange={handleGenderChange}
                  placeholder="Enter your gender identity"
                />
              </FormControl>
              <FormControl>
                <FormLabel id="age-input">Age:</FormLabel>
                <TextField
                  value={ageValue}
                  onChange={handleAgeInputChange}
                  placeholder="Enter your age"
                />
              </FormControl>
              <FormControl>
                <FormLabel id="position-radio-group">
                  What option best describes your current position?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="position-radio-group"
                  name="position-radio-group"
                  value={positionValue}
                  onChange={handlePositionChange}
                >
                  <FormControlLabel
                    value="General Manager/Executive"
                    control={<Radio />}
                    label="General Manager/Executive"
                  />
                  <FormControlLabel
                    value="Head Coach"
                    control={<Radio />}
                    label="Head Coach"
                  />
                  <FormControlLabel
                    value="Assistant Coach"
                    control={<Radio />}
                    label="Assistant Coach"
                  />
                  <FormControlLabel
                    value="Video Analyst/Data Analyst"
                    control={<Radio />}
                    label="Video Analyst/Data Analyst"
                  />
                  <FormControlLabel
                    value="Basketball Fan"
                    control={<Radio />}
                    label="Basketball Fan"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {positionValue === "Other" && (
                  <TextField
                    value={positionOtherValue}
                    onChange={handlePositionOtherChange}
                    placeholder="Please type option below if not included above"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel id="decision-radio-group">
                  Do you make decisions regarding athlete selection (who is
                  selected to a team or who is not?)
                </FormLabel>
                <RadioGroup
                  aria-labelledby="decision-radio-group"
                  name="decision-radio-group"
                  value={decisionValue}
                  onChange={handleDecisionChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              {decisionValue === "Yes" && (
                <FormControl>
                  <FormLabel id="experience-radio-group">
                    If yes, how many years have you held a position where you
                    make such decisions?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="experience-radio-group"
                    name="experience-radio-group"
                    value={experienceValue}
                    onChange={handleExperienceChange}
                  >
                    <FormControlLabel
                      value="0-5"
                      control={<Radio />}
                      label="0-5"
                    />
                    <FormControlLabel
                      value="6-10"
                      control={<Radio />}
                      label="6-10"
                    />
                    <FormControlLabel
                      value="11-15"
                      control={<Radio />}
                      label="11-15"
                    />
                    <FormControlLabel
                      value="16-20"
                      control={<Radio />}
                      label="16-20"
                    />
                    <FormControlLabel
                      value="21+"
                      control={<Radio />}
                      label="21+"
                    />
                  </RadioGroup>
                </FormControl>
              )}
              <FormControl>
                <FormLabel id="level-radio-group">
                  In your current position, what level of basketball are you
                  most strongly associated with?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="level-radio-group"
                  name="level-radio-group"
                  value={levelValue}
                  onChange={handleLevelChange}
                >
                  <FormControlLabel
                    value="Not involved. I am a basketball fan"
                    control={<Radio />}
                    label="Not involved. I am a basketball fan"
                  />
                  <FormControlLabel
                    value="Youth level (OBA, OBL, AAU)"
                    control={<Radio />}
                    label="Youth level (OBA, OBL, AAU)"
                  />
                  <FormControlLabel
                    value="High School (non preparatory)"
                    control={<Radio />}
                    label="High School (non preparatory)"
                  />
                  <FormControlLabel
                    value="Preparatory High School"
                    control={<Radio />}
                    label="Preparatory High School"
                  />
                  <FormControlLabel
                    value="University or Collegiate level (Canada)"
                    control={<Radio />}
                    label="University or Collegiate level (Canada)"
                  />
                  <FormControlLabel
                    value="NCAA"
                    control={<Radio />}
                    label="NCAA"
                  />
                  <FormControlLabel
                    value="Professional level (NBA, G-League, CEBL, International)"
                    control={<Radio />}
                    label="Professional level (NBA, G-League, CEBL, International)"
                  />
                  <FormControlLabel
                    value="National Team"
                    control={<Radio />}
                    label="National Team"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="played-level-radio-group">
                  What is the highest level you ever played?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="played-level-radio-group"
                  name="played-level-radio-group"
                  value={playedLevelValue}
                  onChange={handlePlayedLevelChange}
                >
                  <FormControlLabel
                    value="I never played basketball"
                    control={<Radio />}
                    label="I never played basketball"
                  />
                  <FormControlLabel
                    value="Youth level (OBA/OBL/AAU)"
                    control={<Radio />}
                    label="Youth level (OBA/OBL/AAU)"
                  />
                  <FormControlLabel
                    value="High School"
                    control={<Radio />}
                    label="High School"
                  />
                  <FormControlLabel
                    value="University or College (Canada)"
                    control={<Radio />}
                    label="University or College (Canada)"
                  />
                  <FormControlLabel
                    value="NCAA"
                    control={<Radio />}
                    label="NCAA"
                  />
                  <FormControlLabel
                    value="Professionally"
                    control={<Radio />}
                    label="Professionally"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="professional-radio-group">
                  Do you currently work for a professional basketball
                  organization?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="professional-radio-group"
                  name="professional-radio-group"
                  value={professionalValue}
                  onChange={handleProfessionalChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

              <div>
                <Button
                  variant="contained"
                  disabled={!allChecked}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                {allChecked ? (
                  <p>All required fields are filled.</p>
                ) : (
                  <p>Please fill all required fields.</p>
                )}
              </div>
            </FormGroup>
          </div>
        </Paper>
      </div>
    </>
  );
}
