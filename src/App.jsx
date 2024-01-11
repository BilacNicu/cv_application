import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/App.css';
import exampleData from './ExampleData';
import telephonePic from './assets/pictures/telephone.png'
import mapPic from './assets/pictures/maps.png'
import mailPic from './assets/pictures/mail.png'
import telephoneInvertedPic from './assets/pictures/telephone-inverted.png'
import mapInvertedPic from './assets/pictures/map-inverted.png'
import mailInvertedPic from './assets/pictures/mail-inverted.png'
import { HexColorPicker } from 'react-colorful';


function App() {

// +++++++++++++++++ Function for determining font color +++++++++++++++ //

const [isDarkOrLight, setIsDarkOrLight] = useState(true);

const handleIsDarkOrLight = (hexColor) => {
  const cleanedHexColor = hexColor.replace('#', '');
  const r = parseInt(cleanedHexColor.slice(0, 2), 16);
  const g = parseInt(cleanedHexColor.slice(2, 4), 16);
  const b = parseInt(cleanedHexColor.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance > 0.5) {
    setIsDarkOrLight(true);
  } else {
    setIsDarkOrLight(false);
  }
};

// ++++++++++++++++++ useState for Font Picker ++++++++++++++++++++++//

const [fontStyle, setFontStyle] = useState('');

console.log(fontStyle);

const handleChangeFontStyle1 = () =>{
  setFontStyle('');
}
const handleChangeFontStyle2 = () =>{
  setFontStyle('Times New Roman');
}
const handleChangeFontStyle3 = () =>{
  setFontStyle('Courier New')
}

// +++++++++++++++++ useState for Color Picker ++++++++++++++++++++ //

const [color, setColor] = useState('#000'); // Initial color value

  // Function to handle color change
  const handleChangeComplete = (newColor) => {
    setColor(newColor); // Update color state with the newly selected color
  };
  useEffect(() => {
    // Call handleIsDarkOrLight whenever hexColor changes
    handleIsDarkOrLight(color);
  }, [color]);

// +++++++++++++++++ useState for Expanding the Page ++++++++++++++++++++++++++ //

  const [expandExperience, setExpandExperience] = useState(false);
  const [expandEducation, setExpandEducation] = useState(false);

  function handleExpandEducationClick(){
    setExpandEducation(!expandEducation);
  }

  function handleExpandExperienceClick(){
    setExpandExperience(!expandExperience);
  }

// +++++++++++++++++++ useStates for the Personal Details ++++++++++++++++++++++++++ //

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [inputAdress, setInputAdress] = useState('');

  const handleInputNameChange = (e) => {
    setInputName(e.target.value);
  }
  const handleInputEmailChange = (e) => {
    setInputEmail(e.target.value);
  }
  const handleInputPhoneNumberChange = (e) => {
    setInputPhoneNumber(e.target.value);
  }
  const handleInputAdressChange = (e) => {
    setInputAdress(e.target.value);
  }

// +++++++++++++++++++ useStates for the Experience Details ++++++++++++++++++++++++++ //

  const [inputCompanyName, setInputCompanyName] = useState('');
  const [inputPositionTitle, setInputPositionTitle] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputLocationJob, setInputLocationJob] = useState('');

  const handleCompanyNameChange = (e) => {
    setInputCompanyName(e.target.value);
  }
  const handleInputPositionTitleChange = (e) => {
    setInputPositionTitle(e.target.value);
  }
  const handleInputStartDateChange = (e) => {
    setInputStartDate(e.target.value);
  }
  const handleInputEndDateChange = (e) => {
    setInputEndDate(e.target.value);
  }
  const handleInputDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  }
  const handleInputLocationJobChange = (e) => {
    setInputLocationJob(e.target.value);
  }

// ++++++++++++++++++++++++ Education Details Div ++++++++++++++++++++++++ //

// +++++++++++++++++++ useStates for the Experience Details ++++++++++++++++++++++++++ //

const [inputSchoolName, setInputSchoolName] = useState('');
const [inputDegree, setInputDegree] = useState('');
const [inputStartDateSchool, setInputStartDateSchool] = useState('');
const [inputEndDateSchool, setInputEndDateSchool] = useState('');
const [inputLocationEd, setInputLocationEd] = useState('');

const handleInputSchoolNameChange = (e) => {
  setInputSchoolName(e.target.value);
}
const handleInputDegreeChange = (e) => {
  setInputDegree(e.target.value);
}
const handleInputStartDateSchool = (e) => {
  setInputStartDateSchool(e.target.value);
}
const handleInputEndDateSchoolChange = (e) => {
  setInputEndDateSchool(e.target.value);
}
const handleInputLocationEdChange = (e) => {
  setInputLocationEd(e.target.value);
}

// ++++++++++++++++++++++++ ClearButton ++++++++++++++++++++++++++//

      const handleClearButtonClick = () => {
        // Clear all input fields by updating state variables
        setInputName('');
        setInputEmail('');
        setInputPhoneNumber('');
        setInputAdress('');
    
        setInputCompanyName('');
        setInputPositionTitle('');
        setInputStartDate('');
        setInputEndDate('');
        setInputDescription('');
        setInputLocationJob('');
    
        setInputSchoolName('');
        setInputDegree('');
        setInputStartDateSchool('');
        setInputEndDateSchool('');
        setInputLocationEd('');
      };

// +++++++++++++++++++++++++ Load Example Button ++++++++++++++++++++++++//

  const handleLoadExampleBtnClick = () => {
    setInputName(exampleData.personalInfo.fullName);
    setInputEmail(exampleData.personalInfo.email);
    setInputPhoneNumber(exampleData.personalInfo.phoneNumber);
    setInputAdress(exampleData.personalInfo.address);

    const exampleExperiences = exampleData.sections.experiences;
    if (exampleExperiences.length > 0) {
      const firstExperience = exampleExperiences[0];
      setInputCompanyName(firstExperience.companyName);
      setInputPositionTitle(firstExperience.positionTitle);
      setInputStartDate(firstExperience.startDate);
      setInputEndDate(firstExperience.endDate);
      setInputDescription(firstExperience.description);
      setInputLocationJob(firstExperience.location);
    }

    // Load example education data
    const exampleEducations = exampleData.sections.educations;
    if (exampleEducations.length > 0) {
      const firstEducation = exampleEducations[0];
      setInputSchoolName(firstEducation.schoolName);
      setInputDegree(firstEducation.degree);
      setInputStartDateSchool(firstEducation.startDate);
      setInputEndDateSchool(firstEducation.endDate);
      setInputLocationEd(firstEducation.location);
    }
  }

// +++++++++++++++++++ customizeBtn ++++++++++++++++++++++ //

const [customizeVisible, setCustomizeVisible] = useState(false);
const [contentVisible, setContentVisible] = useState(true);

const handleCustomizeBtnClick = () => {
  setCustomizeVisible(true);
  setContentVisible(false);
};

// +++++++++++++++++++ ContentBtn +++++++++++++++++++++++ //

  const handleContentBtnClick = () => {
    setCustomizeVisible(false);
    setContentVisible(true);
  };

// +++++++++++++++++++ Color Picker +++++++++++++++++++++ //

const [colorPickerOn, setColorPickerOn] = useState(false);

  const handleHexColorPickerOn = () => {
    setColorPickerOn(!colorPickerOn);
  }

  return (
    <>
    <div className={`CVAppDiv ${expandExperience ? 'expandedExp' : ''} ${expandEducation ? 'expandedEdc' : ''} ${expandExperience && expandEducation ? 'expandedEdcAndExp' : ''} ` }>
          <div className="leftSide"></div>
          <div className="content">
            <div className="contentLeft">
               <button className="contentBtn" onClick={handleContentBtnClick}>
                Content
               </button>
               <button className="customizeBtn" onClick={handleCustomizeBtnClick}>
                Customize
               </button>
            </div>

            <div className="contentCenter">
              <div className="contentControls">
                <button className="clearBtn" onClick={handleClearButtonClick}>
                  Clear Resume
                </button>
                <button className="loadExampleBtn" onClick={handleLoadExampleBtnClick}>
                  Load Example
                </button>
              </div>

              <div className={`fontPickerDiv ${customizeVisible ? 'visible' : 'hidden'}`}>
              <h className="fontHeader">Fonts</h> 
              <div className="fonts">
                  <div className="font1" onClick={handleChangeFontStyle1}>
                    <p className="fontExample">Aa</p>
                    <p className="fontName">Sans Serif</p>
                  </div>
                  <div className="font1 tnr" onClick={handleChangeFontStyle2}>
                    <p className="fontExample">Aa</p>
                    <p className="fontName">T. Roman</p>
                  </div>

                  <div className="font1 rbt" onClick={handleChangeFontStyle3}>
                    <p className="fontExample">Aa</p>
                    <p className="fontName">Courier</p>
                  </div>
                </div>

              </div>

              <div className={`colorPickerDiv ${customizeVisible ? 'visible' : 'hidden'} ${colorPickerOn ? 'on' : ''}`}>
                <div className="color">
                  <h className="colorHeader">Color</h> 
                  <div className="accentAndCircle">
                    <p className="accentColor">Accent Color</p>
                    <button className="circle" style={{ backgroundColor: color}} onClick={handleHexColorPickerOn}></button>
                  </div>
                 
                </div>
                <div className={`hexColorPicker ${colorPickerOn ? '' : 'hidden'}`}>
                  <HexColorPicker className='colorPicker' color={color} onChange={handleChangeComplete} />
                </div>
                
              </div>

              <div className={`personalDetailsDiv ${contentVisible ? 'visible' : 'hidden'}`}>
                <h2 className='personalDetailsHeader'>Personal Details</h2>
                <div className="inputGroup">
                <label htmlFor="" className="fullNameLabel">Full name</label>
                <input type="text" value={inputName} onChange={handleInputNameChange} className="fullNameInput" placeholder='First and Last name' />
                </div>

                <div className="inputGroup">
                <label htmlFor="" className="emailLabel">Email</label>
                <input type="email" value={inputEmail} onChange={handleInputEmailChange} className="emailInput" placeholder='Enter email' />
                </div>

                <div className="inputGroup">
                <label htmlFor="" className="phoneNumberLabel">Phone Number</label>
                <input type="phone" value={inputPhoneNumber} onChange={handleInputPhoneNumberChange} className="phoneNumberInput" placeholder='Enter phone number' />
                </div>

                <div className="inputGroup">
                <label htmlFor="" className="adressLabel">Adress</label>
                <input type="text" className="adressInput" value={inputAdress} onChange={handleInputAdressChange} placeholder='City, Country' />
                </div>
            
              </div>

              
                <button onClick={handleExpandExperienceClick} className={`expandExperienceBtn ${contentVisible ? '' : 'hidden'}`}>
                  <h className="experienceHeader">Experience</h>
                </button>
                  {expandExperience &&(
                    <div className={`experienceDiv ${expandExperience ? 'expanded' : ''} ${contentVisible ? 'expanded' : 'hidden'}`}>
                    <div className="inputgroupExp inputgroupExpFirst">
                      <label htmlFor="" className="companyNameLabel">Company Name</label>
                      <input type="text" value={inputCompanyName} onChange={handleCompanyNameChange} className="companyInput" placeholder='Enter Company Name' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="positionTitleLabel">PositionTitle</label>
                      <input type="text" value={inputPositionTitle} onChange={handleInputPositionTitleChange} className="positionTitleInput" placeholder='Enter Position Title' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="startDateLabel">Start Date</label>
                      <input type="text" value={inputStartDate} onChange={handleInputStartDateChange} className="startDateInput" placeholder='Enter Start Date' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="endDateLabel">End Date</label>
                      <input type="text" value={inputEndDate} onChange={handleInputEndDateChange} className="endDateInput" placeholder='Enter End Date' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="jobLocationLabel">Location</label>
                      <input type="text" value={inputLocationJob} onChange={handleInputLocationJobChange} className="locationJobInput" placeholder='Enter Location' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="descriptionLabel">Description</label>
                      <textarea type="text" value={inputDescription} onChange={handleInputDescriptionChange} className="descriptionInput" placeholder='Enter Description' />
                    </div>

                    </div>
                  )}
               <button onClick={handleExpandEducationClick} className={`expandEducationBtn ${contentVisible ? '' : 'hidden'}`}>
                  <h2 className='educationHeader'>Education</h2>
                </button>
                {expandEducation &&(
                    <div className={`educationDiv ${expandExperience ? 'expanded' : ''} ${contentVisible ? 'expanded' : 'hidden'}`}>
                    <div className="inputgroupExp inputgroupExpFirst">
                      <label htmlFor="" className="schoolLabel">School Name</label>
                      <input type="text" value={inputSchoolName} onChange={handleInputSchoolNameChange} className="schoolInput" placeholder='Enter School Name' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="degreeLabel">Degree</label>
                      <input type="text" value={inputDegree} onChange={handleInputDegreeChange} className="degreeInput" placeholder='Enter Degree' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="endDateLabel">Start Date</label>
                      <input type="text" value={inputStartDateSchool} onChange={handleInputStartDateSchool} className="endDateInput" placeholder='Enter Start Date' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="endDateLabel">End Date</label>
                      <input type="text" value={inputEndDateSchool} onChange={handleInputEndDateSchoolChange} className="endDateInput" placeholder='Enter End Date' />
                    </div>

                    <div className="inputgroupExp">
                      <label htmlFor="" className="locationEdLabel">Location</label>
                      <input type="text" value={inputLocationEd} onChange={handleInputLocationEdChange} className="locationEdInput" placeholder='Enter Location' />
                    </div>
                       
                    </div>
                  )}
              
              

            </div>
            <div className="contentRight" style={{fontFamily: fontStyle}}>

              <div className={`nameAndDetailsDiv ${isDarkOrLight ? 'darkColor' : 'lightColor'}`} style={{ backgroundColor: color}} >
                <div className="justNameDiv"><h className="fullNameHeader">{inputName}</h></div>
                <div className="emailNumberAdressDiv">
                  <p className="email">
                    <img src={isDarkOrLight ? mailPic : mailInvertedPic} className='pics' alt="" />
                    {inputEmail}</p>
                  <p className='phoneNumber'>
                  <img src={isDarkOrLight ? telephonePic : telephoneInvertedPic} className='pics' alt="" />
                    {inputPhoneNumber}</p>
                  <p className="adress">
                  <img src={isDarkOrLight ? mapPic : mapInvertedPic} className='pics' alt="" />
                    {inputAdress}</p>
                </div>
              </div>

              {(inputSchoolName || inputDegree || inputStartDateSchool || inputEndDateSchool || inputLocationEd) && (
                <div className="experienceDetailsDiv">
                  <div className={`titleDiv ${isDarkOrLight ? 'darkColor' : 'lightColor'}`} style={{ backgroundColor: color}}>
                    <h className="experienceTitle">
                      Education
                    </h>
                  </div>
                  <div className="experienceDetails">
                      <div className="experienceLeft">
                        <p className="startDateJob">{inputStartDateSchool} - {inputEndDateSchool}</p>
                        <p className="locationJob">{inputLocationEd}</p>
                      </div>

                      <div className="experienceRight">
                        <p className="companyNameP">{inputSchoolName}</p>
                        <p className="positionTitle">{inputDegree}</p>
                      </div>
                    
                  </div>
                </div>
              )}

              {(inputCompanyName || inputPositionTitle || inputStartDate || inputEndDate || inputDescription) && (
                <div className="experienceDetailsDiv">
                  <div className={`titleDiv ${isDarkOrLight ? 'darkColor' : 'lightColor'}`} style={{ backgroundColor: color}}>
                    <h className="experienceTitle">
                      Professional Experience
                    </h>
                  </div>
                  <div className="experienceDetails">
                      <div className="experienceLeft">
                        <p className="startDateJob">{inputStartDate} - {inputEndDate}</p>
                        <p className="locationJob">{inputLocationJob}</p>
                      </div>

                      <div className="experienceRight">
                        <p className="companyNameP">{inputCompanyName}</p>
                        <p className="positionTitle">{inputPositionTitle}</p>
                        <p className="jobDescription">{inputDescription}</p>
                      </div>
                    
                  </div>
                </div>
              )}

            </div>
          </div>
          <div className="rightSide"></div>
    </div>
    </>
  )
  
}

export default App
