import { Button, Checkbox, Divider, Paper, TextField } from "@mui/material";
import "./Disclaimer.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../context/ResultContext";

export default function Disclaimer() {
  const { results, updateResults } = useContext(ResultContext);

  const [ageChecked, setAgeChecked] = React.useState(false);
  const [consentChecked, setConsentChecked] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeChecked(event.target.checked);
    if (!event.target.checked) {
      setConsentChecked(false);
      setEmailValue("");
      setEmailError(false);
    }
  };

  const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (ageChecked) {
      setConsentChecked(event.target.checked);
      if (!event.target.checked) {
        setEmailValue("");
        setEmailError(false);
      }
    } else {
      setConsentChecked(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    if (emailError) {
      setEmailError(false);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleContinue = () => {
    if (consentChecked && !validateEmail(emailValue)) {
      setEmailError(true);
      return;
    }

    const data: {
      ageChecked: boolean;
      consentChecked: boolean;
      emailValue: string;
    } = {
      ageChecked,
      consentChecked,
      emailValue: consentChecked ? emailValue : "", // Ensure email is an empty string if consent is not checked
    };

    updateResults({
      user: data,
      demographics: results.demographics,
      playerResults: results.playerResults,
    });

    console.log(results);
    redirect("/questionnaire");
  };

  return (
    <>
      <div className="disclaimerContainer">
        <Paper className="disclaimer">
          <div>
            <Divider />
            <h2>Introduction</h2>
            <Divider />
            <p>
              You are invited to participate in a research study entitled “Who
              to pick? Analyzing Selection Decisions”. You are being asked to
              take part in a research study. Please read the information about
              the study presented in this form. The form includes details on the
              study’s procedures, risks and benefits that you should know before
              you decide if you would like to take part. You should take as much
              time as you need to make your decision. You should ask the
              Principal Investigator (PI) or study team to explain anything that
              you do not understand and make sure that all your questions have
              been answered before signing this consent form. Before you make
              your decision, feel free to talk about this study with anyone you
              wish including your friends and family. Participation in this
              study is voluntary.
            </p>
            <p>
              This study has been reviewed by the University of Ontario
              Institute of Technology (Ontario Tech University) Research Ethics
              Board [16462] on [2024-05-01].
            </p>
            <Divider />

            <h3>Purpose and Procedure:</h3>
            <Divider />
            <p>
              <strong>Purpose:</strong>
              <br />
              Talent identification is a challenging task and necessary across
              many levels of basketball. The central challenge of talent
              identification is to accurately identify and select athletes that
              will be successful in the future. In doing so, decision makers
              have to balance many types of information. The purpose of this
              project is to explore how basketball decision makers and
              interested parties analyze and evaluate players. This study aims
              to provide more evidence to talent decision makers within the
              sport of basketball on talent identification. You have been
              invited to participate in this study because you are currently a
              decision maker OR you are involved in the decision-making process
              of roster selection in basketball OR you are an interested
              observer of professional basketball.
            </p>
            <p>
              <strong>Procedures:</strong>
              <br />
              If you choose to participate in this study, the process will be as
              follows:
              <ol>
                <li>
                  You will complete the informed consent form via the link sent
                  out by the research team.
                </li>
                <li>
                  Following the completion of informed consent, you will be
                  taken automatically to a brief demographics questionnaire to
                  gain further insight into your experience and history in
                  basketball.
                </li>
                <li>
                  You will then be navigated to a task where you will select one
                  of two prospective NBA players on the screen based on both i)
                  information on the screen and ii) information you may have
                  previously known or understand about the athlete.
                </li>
                <li>
                  Once you have made all of these selections you will see a rank
                  list of your selections, indicating which players you favored
                  more than others.
                </li>
                <li>
                  If you gave permission to be contacted via email to complete
                  the task a second time, you will receive an email from the
                  research team 2 weeks after having completed the task the
                  first time for completion again.
                </li>
              </ol>
            </p>
            <Divider />

            <h3>Potential Benefits:</h3>
            <Divider />
            <p>
              As a participant in this study, you will be given the option of
              receiving the results of the online task so that you can see the
              favored players by decision makers. You will also be able to see
              the comparisons (if you have chosen to receive the results)
              between coaches from various levels within the country. No
              specific names or information about the other coaches will be
              shared, only your individual results and group results.
            </p>
            <p>
              Results from this study will also add to the growing body of
              literature focused on talent identification. This will help
              researchers and decision makers improve their efficacy in talent
              identification and improve the direction of future research
              projects aimed at analyzing talent decisions within the sport of
              basketball at all levels.
            </p>
            <Divider />

            {/* Potential Risk or Discomforts, Confidentiality, Use and Storage of Data sections go here */}

            {/* Voluntary Participation, Right to Withdraw, Conflict of Interest, Compensation, Reimbursement, Incentives sections go here */}

            <Divider />
            <h3>Debriefing and Dissemination of Results:</h3>
            <Divider />
            <p>
              Once all of the data has been collected and analyzed, the results
              of the study will be available to be sent to those participants
              who have elected to receive them. All data will be anonymized.
              Coaches will be able to view the accuracy of the group as a whole,
              as well as how specific subgroups performed on the task compared
              to others.
            </p>
            <Divider />

            {/* Participant Rights and Concerns sections go here */}

            <Divider />
            <h3>Consent to Participate Part 1:</h3>
            <Divider />
            <p>
              I have read the consent form and understand the study being
              described. I have had an opportunity to ask questions and my
              questions have been answered. I am free to ask questions about the
              study in the future. I freely consent to participate in the
              research study, understanding that I may discontinue participation
              at any time without penalty. A copy of this Consent Form has been
              made available to me. I am age 18 or above.
            </p>

            <p>
              <Checkbox
                aria-label="ofAge"
                onChange={handleAgeChange}
                checked={ageChecked}
              />{" "}
              I agree
            </p>

            <h3>Consent to Participate Part 2:</h3>
            <p>
              I consent to be contacted for a follow-up variation of the task.
            </p>
            <p>
              <Checkbox
                aria-label="consent"
                onChange={handleConsentChange}
                checked={consentChecked}
                disabled={!ageChecked}
              />{" "}
              I agree
            </p>
            {consentChecked && (
              <TextField
                label="Email Address"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                type="email"
                error={emailError}
                helperText={
                  !validateEmail(emailValue) &&
                  emailValue !== "" &&
                  "Please enter a valid email address"
                }
                required
              />
            )}
          </div>
          <Button
            disabled={
              !ageChecked || (consentChecked && !validateEmail(emailValue))
            }
            variant="contained"
            onClick={handleContinue}
            className="disclaimerBtn"
          >
            Continue
          </Button>
        </Paper>
      </div>
    </>
  );
}
