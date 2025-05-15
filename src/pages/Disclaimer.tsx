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

            <h3>Potential Risk or Discomforts:</h3>
            <Divider />
            <p>
              The only potential risk involved with this study is a breach of
              confidentiality. The research team is taking every precaution
              necessary, including coding of the data and excluding personal
              identifiers from the data set. This will help us ensure
              confidentiality is maintained throughout the study.
            </p>
            <Divider />
            <h3>Confidentiality, Use and Storage of Data:</h3>
            <Divider />
            <p>
              All data collected and contained in the study will be treated as
              confidential, and only the Principal Investigator and student lead
              will have access to the data. You consent to have your data used
              for the purpose of research in the form of a thesis, as well as
              academic outputs such as: presentations, conferences, and peer
              reviewed publications. All results of the study will be presented
              as aggregate data, and no individual-level data will EVER be
              presented. In order to ensure the confidentiality of data both
              during the conduct of the research and in the release of its
              findings, participants identity will be replaced with a unique
              alpha numeric code to anonymize all participants in the dataset,
              making it impossible to trace any data back to a specific
              individual. However, please note that confidentiality cannot be
              guaranteed while data are in transit over the Internet. All
              qualitative and quantitative data will be compiled and stored on
              secure servers, password protected computers and files that only
              the student lead - Mr. Garrett Blakey, and principal investigator
              - Dr. Nick Wattie, will have access to. No individual data will be
              presented during the dissemination of the results. Data will be
              stored for up to 5 years, after which point data will be destroyed
              (I.E. all electronic files and data will be permanently deleted).
              If you request a report, you will only have access to your
              individual data once the data analysis procedure is finished.
            </p>
            <p>
              Your privacy shall be respected. No information about your
              identity will be shared or published without your permission,
              unless required by law. Confidentiality will be provided to the
              fullest extent possible by law, professional practice, and ethical
              codes of conduct. Please note that confidentiality cannot be
              guaranteed while data is in transit over the Internet.
            </p>
            <p>
              This research study includes the collection of demographic data
              which will be aggregated (not individually presented) in an effort
              to protect your anonymity. Consistent with Statistics Canada
              Research Data Center guidelines for ensuring confidentiality in
              data, no cell sizes less than 5 will be reported or used in the
              description and analysis of the data. This practice further
              ensures that it is extremely difficult and improbable to trace any
              data back to a specific individual.
            </p>
            <p>
              All information collected during this study, including your
              personal information and email address, will be kept confidential
              and will not be shared with anyone outside the study unless
              required by law. You will not be named in any reports,
              publications, or presentations that may come from this study.
            </p>
            <Divider />
            <h3>Voluntary Participation:</h3>
            <Divider />
            <p>
              Your participation in this study is voluntary and you may partake
              in only those aspects of the study in which you feel comfortable.
              You may also decide not to be in this study, or to be in the study
              now, and then change your mind later. You may leave the study at
              any time. You will be given information that is relevant to your
              decision to continue or withdraw from participation. Such
              information will need to be subsequently provided.
            </p>
            <p>
              You may refuse to answer any question you do not want to answer,
              or not answer an interview question by saying, 'pass'.
            </p>
            <Divider />
            <h3>Right to Withdraw:</h3>
            <Divider />
            <p>
              You may stop participating in the study at any point during data
              collection, for any reason, if you so decide. In some research
              projects, the withdrawal of data may not be feasible, since the
              data must be anonymized and added to a data pool. Therefore, once
              data collection is complete, you may withdraw your data from this
              study for any reason until May 31 st , 2025. Your decision to stop
              participating in the study, or refusal to answer particular
              questions will not affect your relationship with the Principal
              Investigator, student lead, or Ontario Tech University. Note that
              if you withdraw from the study at any point your data will be
              immediately and permanently deleted.
            </p>
            <Divider />
            <h3>Conflict of Interest:</h3>
            <Divider />
            <p>
              Researchers have an interest in completing this study. Their
              interests should not influence your decision to participate in
              this study.
            </p>
            <Divider />
            <h3>Compensation, Reimbursement, Incentives:</h3>
            <Divider />
            <p>
              There is no compensation for this project for participants outside
              of contributing to research to advance the field.
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
            <h3>Participant Rights and Concerns:</h3>
            <Divider />
            <p>
              Please read this consent form carefully and feel free to ask the
              researcher any questions that you might have about the study. If
              you have any questions about your rights as a participant in this
              study, complaints, or adverse events, please contact the Research
              Ethics Office at (905) 721- 8668 ext. 3693 or at{" "}
              <a className="email" href="mailto:researchethics@ontariotechu.ca">
                researchethics@ontariotechu.ca
              </a>
              .
            </p>
            <p>
              If you have any questions concerning the research study or
              experience any discomfort related to the study, please contact the
              researcher, Garrett Blakey at{" "}
              <a
                className="email"
                href="mailto:garrett.blakey@ontariotechu.net"
              >
                garrett.blakey@ontariotechu.net
              </a>
              , or Dr. Nick Wattie at{" "}
              <a className="email" href="mailto:nick.wattie@ontariotechu.net">
                nick.wattie@ontariotechu.net
              </a>
            </p>
            <p>
              By signing this form you do not give up any of your legal rights
              against the investigators, sponsor or involved institutions for
              compensation, nor does this form relieve the investigators,
              sponsor or involved institutions of their legal and professional
              responsibilities.
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
