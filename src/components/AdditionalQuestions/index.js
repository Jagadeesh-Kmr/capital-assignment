import {Component} from 'react'

import {GrSort} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'

import CreateContext from '../../Context/CreateContext'

import './index.css'

const questionOptions = [
  {
    optionId: 'Paragraph',
    displayText: 'Paragraph',
  },
  {
    optionId: 'MultipleChoice',
    displayText: 'Multiple Choice',
  },
  {
    optionId: 'Dropdown',
    displayText: 'Dropdown',
  },

  {
    optionId: 'Yes or No',
    displayText: 'Yes or No',
  },
]

class AdditionalQuestions extends Component {
  state = {
    paragraphSelectInput: '',
    paragraphValue: '',
    paragraphInput: '',
    paragraphText: '',
    multipleChoiceInput: '',
    multipleChoiceText: '',
    dropDownBoxInput: '',
    dropDownBoxText: '',
    yesOrNoSelectInput: '',
    yesOrNoValue: '',
    yesOrNoInput: '',
    yesOrNoText: '',
  }

  onChangeYesOrNoInput = event => {
    this.setState({yesOrNoInput: event.target.value})
  }

  onChangeYesOrNoSelectInput = event => {
    this.setState({yesOrNoSelectInput: event.target.value})
  }

  submitYesOrNoText = event => {
    event.preventDefault()

    const {yesOrNoInput, yesOrNoSelectInput} = this.state

    this.setState({
      yesOrNoText: yesOrNoInput,
      yesOrNoInput: '',
      yesOrNoValue: yesOrNoSelectInput,
      yesOrNoSelectInput: '',
    })
  }

  renderYesOrNOBoxView = () => {
    const {
      yesOrNoInput,
      yesOrNoText,
      yesOrNoSelectInput,
      yesOrNoValue,
    } = this.state

    const onClickDeleteText = () =>
      this.setState({yesOrNoText: '', yesOrNoValue: ''})

    return (
      <form className="question-bg" onSubmit={this.submitYesOrNoText}>
        <div className="question-hd">
          <p>Questions</p>
        </div>
        <div className="type-box">
          <label htmlFor="select" className="label">
            Type
          </label>
          <select
            id="select"
            className="select"
            value={yesOrNoSelectInput}
            onChange={this.onChangeYesOrNoSelectInput}
          >
            {questionOptions.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
        <div className="type-box">
          <label htmlFor="input" className="label">
            Question
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="input"
            value={yesOrNoInput}
            onChange={this.onChangeYesOrNoInput}
            className="input"
          />
        </div>
        <div className="check-box-container">
          <input type="checkbox" id="checkBox" className="check-box" />
          <p className="check-box-desc">
            Disqualify candidate if the answer is no
          </p>
        </div>
        <div className="text-display">
          <h1 style={{color: '#1e1730'}}>{yesOrNoValue}</h1>
          <p style={{color: '#1e1730'}}>{yesOrNoText}</p>
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
            <p style={{color: '#1e1730'}}>Delete question</p>
          </button>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    )
  }

  onChangeDropDownBoxInput = event => {
    this.setState({dropDownBoxInput: event.target.value})
  }

  submitDropDownBoxText = event => {
    event.preventDefault()

    const {dropDownBoxInput} = this.state

    this.setState({
      dropDownBoxText: dropDownBoxInput,
      dropDownBoxInput: '',
    })
  }

  renderDropDownBoxView = () => {
    const {dropDownBoxInput, dropDownBoxText} = this.state

    const onClickDeleteText = () => this.setState({dropDownBoxText: ''})

    return (
      <form className="question-bg" onSubmit={this.submitDropDownBoxText}>
        <div className="question-hd">
          <p>Questions</p>
        </div>

        <div className="type-box">
          <label htmlFor="select" className="label">
            Type
          </label>
          <select id="select" className="select">
            <option className="option-name">Paragraph</option>
            <option className="option-name">Multiple Choice</option>
            <option className="option-name" value>
              Dropdown
            </option>
            <option className="option-name">Yes or no</option>
          </select>
        </div>
        <div className="type-box">
          <label htmlFor="input" className="label">
            Question
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="input"
            value={dropDownBoxInput}
            onChange={this.onChangeDropDownBoxInput}
            className="input"
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
        <div className="check-box-container">
          <input type="checkbox" id="checkBox" className="check-box" />
          <p className="check-box-desc">Enable Other option</p>
        </div>
        <div className="type-box">
          <label htmlFor="max-choice-input" className="label">
            Max choice allowed
          </label>
          <input
            type="text"
            placeholder="Enter number of choice allowed here"
            id="max-choice-input"
            className="input"
          />
        </div>

        <div className="text-display">
          <p style={{color: '#1e1730'}}>{dropDownBoxText}</p>
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
      </form>
    )
  }

  onChangeMultipleChoiceInput = event => {
    this.setState({multipleChoiceInput: event.target.value})
  }

  submitMultipleChoiceText = event => {
    event.preventDefault()

    const {multipleChoiceInput} = this.state

    this.setState({
      multipleChoiceText: multipleChoiceInput,
      multipleChoiceInput: '',
    })
  }

  renderMultipleChoiceBoxView = () => {
    const {multipleChoiceInput, multipleChoiceText} = this.state

    const onClickDeleteText = () => this.setState({multipleChoiceText: ''})

    return (
      <form className="question-bg" onSubmit={this.submitMultipleChoiceText}>
        <div className="question-hd">
          <p>Questions</p>
        </div>

        <div className="type-box">
          <label htmlFor="select" className="label">
            Type
          </label>
          <select id="select" className="select">
            <option className="option-name">Paragraph</option>
            <option className="option-name" value>
              Multiple Choice
            </option>
            <option className="option-name">Dropdown</option>
            <option className="option-name">Yes or no</option>
          </select>
        </div>
        <div className="type-box">
          <label htmlFor="input" className="label">
            Question
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="input"
            value={multipleChoiceInput}
            onChange={this.onChangeMultipleChoiceInput}
            className="input"
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
        <div className="check-box-container">
          <input type="checkbox" id="checkBox" className="check-box" />
          <p className="check-box-desc">Enable Other option</p>
        </div>
        <div className="type-box">
          <label htmlFor="max-choice-input" className="label">
            Max choice allowed
          </label>
          <input
            type="text"
            placeholder="Enter number of choice allowed here"
            id="max-choice-input"
            className="input"
          />
        </div>

        <div className="text-display">
          <p style={{color: '#1e1730'}}>{multipleChoiceText}</p>
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
      </form>
    )
  }

  onChangeParagraphInput = event => {
    this.setState({paragraphInput: event.target.value})
  }

  onChangeParagraphSelectInput = event => {
    this.setState({paragraphSelectInput: event.target.value})
  }

  submitParagraphText = event => {
    event.preventDefault()

    const {paragraphInput, paragraphSelectInput} = this.state

    this.setState({
      paragraphText: paragraphInput,
      paragraphValue: paragraphSelectInput,
      paragraphInput: '',
    })
  }

  renderParagraphBoxView = () => {
    const {
      paragraphInput,
      paragraphText,
      paragraphSelectInput,
      paragraphValue,
    } = this.state

    const onClickDeleteText = () =>
      this.setState({paragraphText: '', paragraphValue: ''})

    return (
      <form className="question-bg" onSubmit={this.submitParagraphText}>
        <div className="question-hd">
          <p>Questions</p>
        </div>
        <div className="type-box">
          <label htmlFor="select" className="label">
            Type
          </label>
          <select
            id="select"
            className="select"
            value={paragraphSelectInput}
            onChange={this.onChangeParagraphSelectInput}
          >
            {questionOptions.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
        <div className="type-box">
          <label htmlFor="input" className="label">
            Question
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="input"
            value={paragraphInput}
            onChange={this.onChangeParagraphInput}
            className="input"
          />
        </div>
        <div className="text-display">
          <h1 style={{color: '#1e1730'}}>{paragraphValue}</h1>
          <p style={{color: '#1e1730'}}>{paragraphText}</p>
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
      </form>
    )
  }

  renderDetails = () => (
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
          <div className="bg-container">
            <h1 className="heading">
              View of how additional questions will look
            </h1>
            {showImg ? (
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
            ) : (
              <button
                type="button"
                className="add-img-btn"
                onClick={onClickAddImg}
              >
                Upload Image
              </button>
            )}
          </div>
        )
      }}
    </CreateContext.Consumer>
  )

  render() {
    return (
      <>
        <div className="bg-container">
          <div>{this.renderDetails()}</div>
          <div className="question-box">{this.renderParagraphBoxView()}</div>
          <div className="question-box">
            {this.renderMultipleChoiceBoxView()}
          </div>
          <div className="question-box">{this.renderDropDownBoxView()}</div>
          <div className="question-box">{this.renderYesOrNOBoxView()}</div>
        </div>
      </>
    )
  }
}

export default AdditionalQuestions
