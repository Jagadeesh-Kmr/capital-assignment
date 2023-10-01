import {Component} from 'react'

import {Link} from 'react-router-dom'

import {HiOutlineMenu, HiPlusSm} from 'react-icons/hi'
import {AiOutlineHome, AiOutlinePlus} from 'react-icons/ai'
import {BiNotepad, BiUpload} from 'react-icons/bi'
import {GrSort, GrFormEdit} from 'react-icons/gr'

import Switch from '../Switch'
import CreateContext from '../../Context/CreateContext'

import './index.css'

class Home extends Component {
  state = {
    aboutMeInput: '',
    aboutMeText: '',
    additionalQuestionsInput: '',
    additionalQuestionsText: '',
  }

  renderHeader = () => (
    <div className="icon-container">
      <HiOutlineMenu className="react-icons" />
      <div className="icon-container">
        <AiOutlineHome className="react-icons" />
      </div>
      <Link to="additional-questions">
        <div className="icon-container">
          <BiNotepad className="react-icons" />
        </div>
      </Link>
    </div>
  )

  renderProgramDetails = () => (
    <div className="application-pages">
      <div className="application-hd">
        <p className="application-names">Program Details</p>
      </div>
      <div className="application-hd">
        <p className="application-names">Application Form</p>
      </div>
      <div className="application-hd">
        <p className="application-names">Work Flow</p>
      </div>
      <div className="application-hd">
        <p className="application-names">Preview</p>
      </div>
    </div>
  )

  renderApplicationImageContainer = () => (
    <CreateContext.Consumer>
      {value => {
        const {showImg, toggleImg} = value

        const onClickRemoveImg = () => {
          toggleImg()
        }

        const onClickAddImg = () => {
          toggleImg()
        }

        return (
          <div>
            {showImg ? (
              <div
                className="upload-cover-bg"
                onSubmit={this.submitYesOrNoText}
              >
                <div className="upload-cover-hd">
                  <p>Questions</p>
                </div>
                <div className="type-box">
                  <div className="upload-box-container">
                    <BiUpload onClick={onClickAddImg} className="upload-icon" />
                    <p className="upload-cover-desc">Upload cover image</p>
                    <p className="upload-cover-details">
                      16:9 ratio is recommended. Max image size 1mb
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-img">
                <img
                  src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1695981945/image_224_olrst2.png"
                  alt="img"
                  className="profiles-img"
                />
                <button
                  type="button"
                  className="delete-button"
                  onClick={onClickRemoveImg}
                >
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1695969103/Group_453_wiuzjn.svg"
                    alt="delete"
                  />
                  <p>Delete & re-upload</p>
                </button>
              </div>
            )}
          </div>
        )
      }}
    </CreateContext.Consumer>
  )

  renderPersonalInformation = () => (
    <form className="personal-information-bg">
      <div className="personal-information-hd-bg">
        <p>Personal Information</p>
      </div>

      <div className="name-inputs">
        <label htmlFor="firstName" className="label-names">
          First Name
        </label>
        <input type="text" id="firstName" className="input-names" />
      </div>
      <div className="name-inputs">
        <label htmlFor="lastName" className="label-names">
          Last Name
        </label>
        <input type="text" id="lastName" className="input-names" />
      </div>
      <div className="name-inputs">
        <label htmlFor="email" className="label-names">
          Emai
        </label>
        <input type="text" id="email" className="input-names" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Phone <span className="phone-span">(without dial code)</span>
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Internal</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Nationality
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Internal</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Current Residence
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Internal</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            ID Number
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Internal</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Date of Birth
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Internal</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Gender
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Internal</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="add-a-question-container">
        <HiPlusSm className="plus-icon" />
        <p className="add-a-question-desc">Add a question</p>
      </div>
    </form>
  )

  renderProfileView = () => (
    <form className="profile-information-bg">
      <div className="personal-information-hd-bg">
        <p>Profile</p>
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Education
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Mandatory</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Experience
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Mandatory</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="name-inputs">
        <div className="contact-container">
          <label htmlFor="phone" className="label-names">
            Resume
          </label>
          <div className="internal-hide-container">
            <div>
              <span className="internal-container">
                <input type="checkbox" id="internal" />
                <label htmlFor="internal">Mandatory</label>
              </span>
            </div>

            <div className="hide-container">
              <Switch />
              <p className="hide-desc">Hide</p>
            </div>
          </div>
        </div>

        <input type="text" id="phone" className="home-input" />
      </div>

      <div className="add-a-question-container">
        <HiPlusSm className="plus-icon" />
        <p className="add-a-question-desc">Add a question</p>
      </div>
    </form>
  )

  onChangeAdditionalQuestionsInput = event => {
    this.setState({additionalQuestionsInput: event.target.value})
  }

  onChangeAddText = event => {
    this.setState({aboutMeInput: event.target.value})
  }

  submitAdditionalQuestionsText = event => {
    event.preventDefault()

    const {additionalQuestionsInput, aboutMeInput} = this.state

    this.setState({
      additionalQuestionsText: additionalQuestionsInput,
      additionalQuestionsInput: '',
      aboutMeText: aboutMeInput,
      aboutMeInput: '',
    })
  }

  renderAdditionalQuestionsView = () => {
    const {
      additionalQuestionsInput,
      additionalQuestionsText,
      aboutMeInput,
      aboutMeText,
    } = this.state

    const onClickDeleteText = () =>
      this.setState({additionalQuestionsText: '', aboutMeText: ''})

    return (
      <form
        className="question-bg"
        onSubmit={this.submitAdditionalQuestionsText}
      >
        <div className="question-hd">
          <p>Additional questions</p>
        </div>

        <div className="additional-name-bg">
          <p className="additional-questions-mini-paragraph">Paragraph</p>
          <div className="paragraph-edit">
            <label htmlFor="aboutMe" className="additional-questions-paragraph">
              Please tell me about yourself in less than 500 words
            </label>
            <GrFormEdit className="edit-icon" />
          </div>
          <input
            type="text"
            id="aboutMe"
            className="additional-input-names"
            value={aboutMeInput}
            onChange={this.onChangeAddText}
          />
        </div>

        <div className="additional-name-bg">
          <p className="additional-questions-mini-paragraph">Dropdown</p>
          <div className="paragraph-edit">
            <label
              htmlFor="firstName"
              className="additional-questions-paragraph"
            >
              Please select the year of graduation from the list below
            </label>

            <GrFormEdit className="edit-icon" />
          </div>

          <input
            type="text"
            id="firstName"
            className="additional-input-names"
          />
        </div>

        <div className="type-box">
          <label htmlFor="input" className="label">
            Question
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="input"
            value={additionalQuestionsInput}
            onChange={this.onChangeAdditionalQuestionsInput}
            className="additional-question-input"
          />
        </div>
        <div className="type-box">
          <label htmlFor="choice-input" className="choice-label">
            Choice
          </label>
          <div className="choice-input-container">
            <GrSort />
            <input
              type="text"
              placeholder="Type here"
              id="choice-input"
              className="choice-input"
            />
            <AiOutlinePlus />
          </div>
        </div>

        <div className="save-container">
          <button
            className="delete-question-btn"
            type="button"
            onClick={onClickDeleteText}
          >
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1695969103/Group_453_wiuzjn.svg"
              alt="delete"
            />
            <p>Delete question</p>
          </button>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
        <div className="text-display">
          <p style={{color: '#1e1730'}}>{aboutMeText}</p>
          <p style={{color: '#1e1730'}}>{additionalQuestionsText}</p>
        </div>

        <hr style={{width: '537px'}} />

        <div className="additional-name-bg">
          <p className="additional-questions-mini-paragraph">
            Yes/No questions
          </p>
          <div className="paragraph-edit">
            <p className="additional-questions-paragraph">
              Have you ever been rejected by the UK embassy?
            </p>
            <GrFormEdit className="edit-icon" />
          </div>
        </div>

        <div className="add-ad-question-container">
          <HiPlusSm className="plus-icon" />
          <p className="add-a-question-desc">Add a question</p>
        </div>
      </form>
    )
  }

  render() {
    return (
      <div className="home-bg-container">
        <div className="header">{this.renderHeader()}</div>
        <div className="application-bg">
          <div className="program-details">{this.renderProgramDetails()}</div>
          <div>{this.renderApplicationImageContainer()}</div>
          <div>{this.renderPersonalInformation()}</div>
          <div>{this.renderProfileView()}</div>
          <div>{this.renderAdditionalQuestionsView()}</div>
        </div>
      </div>
    )
  }
}

export default Home
