import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { removeFromFavoritsAction } from "../actions";
import { StarFill } from "react-bootstrap-icons";
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch)=>({
  removeFromFavoritsAction:(f)=>{dispatch(removeFromFavoritsAction(f))}
})

const Favorites = ({...props}) => {
console.log('propssss',props)
  return (  
    <Row>
      <Col sm={12}>
          <h1>LIST OF FAVORITES</h1>
          {props.favorite.company.map(f => (
        <ul style={{ listStyle: "none" }}>
           <StarFill  />
            <li  className="my-4">
              {f}
            </li>
        </ul>
          ))}
      </Col>
    </Row>
  )
}

export default connect(mapStateToProps)(Favorites);
