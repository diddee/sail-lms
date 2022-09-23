import './DashBoard.css'
import Learn from '../Learn/Learn'
import Nav from '../Nav/Nav';
import Progress from '../CourseProgress/Course';

function DashBoard() {
  return (
    <div className="DashBoard">
      <Nav/>
      <Learn/>
      <Progress/>
    </div>
  )
}

export default DashBoard;

