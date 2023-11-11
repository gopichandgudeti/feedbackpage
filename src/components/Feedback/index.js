// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isSelected: false,
  }

  onClickEmoji = () => this.setState({isSelected: true})
  

  getEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-container">
        <h1 className="feedback-container-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getThankyouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thanks-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thanks-container-heading">Thank You!</h1>
        <p className="thanks-container-description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state

    return (
      <div className="app-bg-container">
        {isSelected 
          ? this.getEmojiContainer() 
          : this.getThankyouContainer()}
      </div>
    )
  }
}

export default Feedback
