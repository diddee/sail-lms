import './DashBoard.css'
// import Learn from '../Learn/Learn'
// import Nav from '../Nav/Nav';
import Nav from '../NewNav/Nav';
// import Progress from '../CourseProgress/Course';
import Home from '../Home/Home';

function DashBoard() {
  return (
    <div className="DashBoard">
      <Nav/>
      <Home/>
    </div>
  )
}

export default DashBoard;

