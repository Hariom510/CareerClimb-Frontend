import React from "react";
import styled from "styled-components";
import { useState, useEffect, useLayoutEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import axios from "axios";
import { baseURL } from "../Api";

import PreviewForm from "./PreviewForm";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [qualification, setQualification] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [jobType, setJobType] = useState("");
  const [selectRole, setSelectRole] = useState("");
  const [experience, setExperience] = useState("");
  const [checkedbox, setCheckedbox] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [modal, setModal] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    let emailText = e.target.value;
    if (!emailRegex.test(emailText) && emailText !== "") {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePreview = (e) => {
    setModal(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(
        `${baseURL}/forms`,
        {
          firstName: fname,
          lastName: lname,
          email: email,
          contactNo: contact,
          qualification: qualification,
          college: college,
          branch: branch,
          totalExperience: experience,
          jobProfileId: jobType,
          interestedRole: selectRole,
          subscribedJobUpdate: checkedbox,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("posting data", response);
        event.target.reset();
        alert("submitted successfully");
        setFname("");
        setLname("");
        setEmail("");
        setContact("");
        setQualification("");
        setCollege("");
        setBranch("");
        setExperience("");
        setCheckedbox(false);
        setJobType("");
        setSelectRole("");
        toast.success(
          "Application submitted successfully. We will get back to you as soon as possible.",
          {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide,
          }
        );
      })
      .catch((err) => {
        console.log(err);
        alert("error occurs");
      });
  };

  return (
    <>
      <Forms id="form">
        <h2>Apply Form</h2>
        <FormChild>
          <form onSubmit={handleSubmit}>
            <InputField>
              <label>First name:</label> <br />
              <input
                required
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <br />
            </InputField>
            <InputField>
              <label>Last name:</label>
              <br />
              <input
                value={lname}
                type="text"
                onChange={(e) => setLname(e.target.value)}
              />
              <br />
            </InputField>
            <InputField>
              <label htmlFor="email">Email:</label>
              {emailError.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginLeft: "10px",
                  }}
                >
                  {emailError}
                </span>
              )}
              <br />
              <input
                required
                type="email"
                placeholder="abc@gmail.com"
                onChange={handleEmail}
                onPaste={handleEmail}
                value={email}
              />
              <br />
            </InputField>
            <InputField>
              <label>Contact Number:</label>
              <br />
              <PhoneInput
                defaultCountry="IN"
                required
                placeholder="Enter phone number"
                value={contact}
                onChange={setContact}
              />{" "}
              <br />
            </InputField>
            <InputField>
              <label>Qualification:</label>
              <br />
              <input
                required
                type="text"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
              <br />
            </InputField>
            <InputField>
              <label>College:</label>
              <br />
              <input
                required
                value={college}
                type="text"
                onChange={(e) => setCollege(e.target.value)}
              />
              <br />
            </InputField>
            <label className="branch">Specialisation/Branch:</label>
            <br />
            <input
              value="computer science"
              type="radio"
              name="branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <label className="branchname">&nbsp; Computer Science</label>
            <br />
            <input
              value="electrical"
              type="radio"
              name="branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <label className="branchname">&nbsp; Electrical</label> <br />
            <input
              value="mechanical"
              type="radio"
              name="branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <label className="branchname">&nbsp; Mechanical</label> <br />
            <input
              value="chemical"
              type="radio"
              name="branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <label className="branchname">&nbsp; Chemical</label> <br />
            <input
              value="other"
              type="radio"
              name="branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <label className="branchname">&nbsp; Other</label>
            <InputField>
              <label>Total Experience:</label>
              <br />
              <input
                required
                value={experience}
                type="text"
                onChange={(e) => setExperience(e.target.value)}
              />
              <br />
            </InputField>
            <InputField>
              <label>Job Type:</label>
              <br />
              <select
                required
                value={jobType}
                onChange={(e) => {
                  setJobType(e.target.value);
                  setSelectRole("");
                }}
              >
                <option value="" selected="true" disabled="disabled">
                  Choose Job Type
                </option>
                <option value="Jobs">Jobs</option>
                <option value="Internships">Internships</option>
              </select>
            </InputField>{" "}
            <br />
            <InputField>
              {(jobType === "Jobs" || jobType === "Internships") && (
                <>
                  <label>Role you are interested in:</label>
                  <br />
                  <select
                    required
                    value={selectRole}
                    onChange={(e) => {
                      setSelectRole(e.target.value);
                    }}
                  >
                    <option value="" selected="true" disabled="disabled">
                      Choose Role you are interested in
                    </option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Android Developer">Andriod Developer</option>
                  </select>
                </>
              )}
            </InputField>{" "}
            <br />
            <input
              defaultChecked={checkedbox}
              onChange={() => setCheckedbox(!checkedbox)}
              type="checkbox"
            />{" "}
            <h6>
              {" "}
              Click this checkbox to receive job notification from LiteStore.
            </h6>
            <br />
            <button
              type="button"
              className="previewButton"
              onClick={handlePreview}
            >
              Preview
            </button>
            <input className="submitButton" type="submit" />
          </form>
        </FormChild>
      </Forms>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader
          toggle={() => setModal(!modal)}
          style={{ color: "#0e6656" }}
        >
          Preview
        </ModalHeader>
        <ModalBody>
          <PreviewForm
            fname={fname}
            lname={lname}
            email={email}
            contact={contact}
            qualification={qualification}
            college={college}
            branch={branch}
            experience={experience}
            jobType={jobType}
            selectRole={selectRole}
          />
        </ModalBody>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Form;

const Forms = styled.div`
  background-color: white;
  text-align: center;
  margin: 30px 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 1100px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  h2 {
    font-size: 26px;
    font-weight: 700;
    color: #0e6656;
  }
`;
const FormChild = styled.div`
  margin-bottom: 200px;
  text-align: left;
  border-radius: 10px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-right: 30px;
  padding-left: 30px;
  width: 80%;
  border: 2px solid #777575;
  @media only screen and (max-width: 1100px) {
    width: 98%;
  }
  select {
    width: 100%;
    border-radius: 10px;
    height: 40px;
    margin-top: 8px;
    border: 2px solid #777575;
  }

  .fileInput {
    margin-top: 7px;
    margin-bottom: 10px;
    border-radius: 2px;
    @media only screen and (max-width: 800px) {
      width: 85%;
    }
  }
  .branch {
    font-size: 16px;
    font-weight: 600;
  }
  .branchname {
    font-size: 17px;
    font-weight: 450;
  }
  h6 {
    font-size: 15px;
    font-weight: 500;
    display: inline-grid;
    @media only screen and (max-width: 790px) {
      width: 90%;
    }
  }
  .previewButton,
  .submitButton {
    margin-top: 30px;
    margin-right: 20px;
    width: 140px;
    height: 45px;
    border-radius: 8px;
    background-color: #0e6656;
    color: white;
    font-size: 21px;
    font-weight: 500;
    border: 1px solid;
    :hover {
      background-color: #0e6656;
      color: white;
      cursor: pointer;
      box-shadow: 0px 0px 8px #13846f;
    }
  }
`;

const InputField = styled.div`
  width: 90%;
  margin: 24px 0px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  label {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 100%;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #777575;
    outline: none;
    padding: 8px;
    margin: 4px 0px;
  }
`;
