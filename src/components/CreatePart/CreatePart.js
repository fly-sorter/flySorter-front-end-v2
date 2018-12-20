import React from 'react';
import logo from '../../assets/logo.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './createPartAction.js';
import NavUI from '../NavUI/NavUI.js';
import './createPart.scss';
import greenCheckMark from '../../assets/successLogin.png';
import grayCheckMark from '../../assets/failedLogin.png';

class CreatePart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      part_id: '',
      idMessage: '',
      part_desc: '',
      descMessage: '',
      part_sub: 'N',
      part_src: '',
      srcMessage: '',
      part_mfgnum: '',
      part_price: '',
      priceMessage: '',
      part_category: '',
      categoryMessage: '',
      part_location: '',
      part_count: '',
      countMessage: '',
      part_longlead: 'N'
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.props.main.parts;
    const check1 = document.getElementById('check1');
    const check2 = document.getElementById('check2');
    const check3 = document.getElementById('check3');
    const check4 = document.getElementById('check4');
    const check5 = document.getElementById('check5');
    const check6 = document.getElementById('check6');
    const check7 = document.getElementById('check7');

    console.log(check1);

    check1.style.display = 'inline';
    check2.style.display = 'inline';
    check3.style.display = 'inline';
    check4.style.display = 'inline';
    check5.style.display = 'inline';
    check6.style.display = 'inline';
    check7.style.display = 'inline';

    check1.src = greenCheckMark;
    check2.src = greenCheckMark;
    check3.src = greenCheckMark;
    check4.src = greenCheckMark;
    check5.src = greenCheckMark;
    check6.src = greenCheckMark;
    check7.src = greenCheckMark;

    let uniqueId = new Set();
    data.forEach(element => {
      uniqueId.add(element.part_id);
    });

    this.setState({
      idMessage: '',
      descMessage: '',
      srcMessage: '',
      priceMessage: '',
      categoryMessage: '',
      countMessage: '',
      redirectToReferrer: false
    });

    if (this.state.part_id.length <= 0) {
      this.setState({ idMessage: 'Empty field please enter information' });
      check1.src = grayCheckMark;
    }
    if (uniqueId.has(parseInt(this.state.part_id))) {
      this.setState({ idMessage: 'ID already taken, please set a new ID' });
      check1.src = grayCheckMark;
    }
    if (this.state.part_desc.length <= 0) {
      this.setState({ descMessage: 'Empty field please enter information' });
      check2.src = grayCheckMark;
    }
    if (this.state.part_src.length <= 0) {
      this.setState({ srcMessage: 'Empty field please enter information' });
      check3.src = grayCheckMark;
    }
    if (this.state.part_price <= 0) {
      this.setState({ priceMessage: 'Empty field please enter information' });
      check5.src = grayCheckMark;
    }
    if (this.state.part_category <= 0) {
      this.setState({ categoryMessage: 'Please select a category' });
    }
    if (this.state.part_count <= 0) {
      this.setState({ countMessage: 'Empty field please enter information' });
      check6.src = grayCheckMark;
    }
    if (
      this.state.part_id.length > 0 &&
      !uniqueId.has(parseInt(this.state.part_id)) &&
      this.state.part_desc.length > 0 &&
      this.state.part_sub.length > 0 &&
      this.state.part_src.length > 0 &&
      this.state.part_price.length > 0 &&
      this.state.part_category.length > 0 &&
      this.state.part_count.length > 0 &&
      this.state.part_longlead.length > 0
    ) {
      let postData = {
        part_id: parseInt(this.state.part_id),
        part_desc: this.state.part_desc,
        part_sub: this.state.part_sub,
        part_src: this.state.part_src,
        part_mfgnum: this.state.part_mfgnum,
        part_price: parseInt(this.state.part_price),
        part_category: this.state.part_category,
        part_location: this.state.part_location,
        part_count: parseInt(this.state.part_count),
        part_longlead: this.state.part_longlead,
        part_notes: this.state.part_notes
      };
      this.props.partSubmit(undefined, postData);
      this.setState({ redirectToReferrer: true });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(this.state);
    this.setState({
      [name]: value
    });
  };

  render() {
    const data = this.props.main.parts;
    const categoryCreator = (inputArray, property) => {
      let set = new Set();
      inputArray.forEach(element => {
        if (element[property]) {
          set.add(element[property]);
        }
      });
      return [...set];
    };

    if (this.state.redirectToReferrer) return <Redirect to="/dashboard" />;

    return (
      <div>
        <div className="toolbar">
          <img src={logo} />
          <NavUI />
        </div>

        <div className="centered">
          <div>
            <form>
              <li>
                <label type="part_id">Parts ID</label>
                <input
                  type="text"
                  name="part_id"
                  onChange={this.handleChange}
                />

                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check1"
                />
              </li>
              <p>{this.state.idMessage}</p>
              <li>
                <label type="part_desc">Description</label>
                <input
                  type="text"
                  name="part_desc"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check2"
                />
              </li>
              <p>{this.state.descMessage}</p>
              <li>
                <label type="part_sub">Sub-Assembly</label>
                <select
                  name="part_sub"
                  type="select"
                  onChange={this.handleChange}
                >
                  <option value="N">Not a sub-assembly part</option>
                  <option value="Y">Has sub-assembly</option>
                </select>
              </li>
              <p>{this.state.subMessage}</p>
              <li>
                <label type="part_src">Source of Part</label>
                <input
                  type="text"
                  name="part_src"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check3"
                />
              </li>
              <p>{this.state.srcMessage}</p>
              <li>
                <label type="part_mfgnum">Mfg/Dist Part Number</label>
                <input
                  type="text"
                  name="part_mfgnum"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check4"
                />
              </li>
              <li>
                <label type="part_price">Price of Part</label>
                <input
                  type="text"
                  name="part_price"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check5"
                />
              </li>
              <p>{this.state.priceMessage}</p>
              <li>
                <label type="part_category">Part Category</label>
                <select
                  name="part_category"
                  type="select"
                  onChange={this.handleChange}
                >
                  <option value="">Select Catergory</option>

                  {categoryCreator(data, 'part_category').map(
                    (element, idx) => (
                      <option value={element} key={idx}>
                        {element}
                      </option>
                    )
                  )}
                </select>
              </li>
              <p>{this.state.categoryMessage}</p>
              <li>
                <label type="part_location">Part Location</label>
                <select
                  name="part_location"
                  type="select"
                  onChange={this.handleChange}
                >
                  <option value="">Select Location</option>

                  {categoryCreator(data, 'part_location').map(
                    (element, idx) => (
                      <option value={element} key={idx}>
                        {element}
                      </option>
                    )
                  )}
                </select>
              </li>
              <li>
                <label type="part_count">Count of Part</label>
                <input
                  type="text"
                  name="part_count"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check6"
                />
              </li>
              <p>{this.state.countMessage}</p>
              <li>
                <label type="part_longlead">Long Lead</label>
                <select
                  name="part_longlead"
                  type="select"
                  onChange={this.handleChange}
                >
                  <option value="N">Not a Long Lead</option>
                  <option value="Y">Is a Long Lead</option>
                </select>
              </li>
              <p>{this.state.longLeadMessage}</p>
              <li>
                <label type="part_notes">Notes</label>
                <input
                  type="text"
                  name="part_notes"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check7"
                />
              </li>

              <button type="submit" onClick={this.handleSubmit}>
                Create Part
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
} //end class LOGIN

const mapDispatchToProps = (dispatch, getState) => ({
  partSubmit: (url, object) => dispatch(actions.partSubmit(url, object))
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePart);
