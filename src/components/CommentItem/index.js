// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {
    details,
    isClicked,
    toggledLike,
    initialContainerBackgroundClassNames,
  } = props
  const {id, theName, theComment} = details

  const len = initialContainerBackgroundClassNames.length
  const letter = theName[0]
  const backColor =
    initialContainerBackgroundClassNames[Math.floor(Math.random() * len)]

  let classy
  let likeLogo

  const clickedLogo = () => {
    toggledLike(id)
    likeLogo = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    return likeLogo
  }
  const clickedLike = () => {
    toggledLike(id)
    
    classy = isClicked ? 'liked' : 'like'
    return classy
  }

  return (
    <div className="the-cont">
      <div className="person-details">
        <p className={`icon ${backColor}`}> {letter} </p>
        <p className="name">{theName}</p>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>

      <p className="the-comment">{theComment}</p>

      <div className="btn-container">
        <div>
          <button className="btn1" type="button" onClick={clickedLogo}>
            <img src={likeLogo} className="img" />
          </button>
          <button className={classy} type="button" onClick={clickedLike}>
            Like
          </button>
        </div>

        <button className="btn1" type="button" onClick={clickedLike}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="img"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </div>
    </div>
  )
}
export default CommentItem
