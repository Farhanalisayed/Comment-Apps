import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentCount: 0,
    commentDetails: [],
    isClicked: false,
  }

  toggledLike = id => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  addName = event => {
    this.setState({name: event.target.value})
  }
  addText = event => {
    this.setState({comment: event.target.value})
  }
  addComment = event => {
    event.preventDefault()
    const {name, comment, commentDetails} = this.state
    const newComment = {
      id: uuidv4(),
      theName: name,
      theComment: comment,
    }
    const updatedComments = [...commentDetails, newComment]
    this.setState(previouseState => ({
      name: '',
      comment: '',
      commentCount: previouseState.commentCount + 1,
      commentDetails: updatedComments,
    }))
  }

  render() {
    const {commentDetails, commentCount, isClicked} = this.state
    return (
      <div className="the-container">
        <div className="upper-cont">
          <div className="text-cont">
            <h1>Comments</h1>
            <form className="form" id="myForm"  onSubmit={this.addComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="bar"
                onChange={this.addName}
              />
              <textarea
                placeholder="Your Comment"
                rows="5"
                cols="15"
                onChange={this.addText}
              ></textarea>
              <button type="button" className="btn">
                Add Comment
              </button>
            </form>
          </div>

          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <hr />

        <div className="lower-cont">
          <div className="comment-details-cont">
            <p className="count">{commentCount}</p>
            <p className="tag">Comments</p>
          </div>
          {commentDetails.map(each => (
            <CommentItem
              details={each}
              key={each.id}
              isClicked={isClicked}
              toggledLike={this.toggledLike}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Comments
