import React from 'react';
import logo from '../../assets/logo.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './createSubAction.js';
import NavUI from '../NavUI/NavUI.js';
import greenCheckMark from '../../assets/successLogin.png';
import grayCheckMark from '../../assets/failedLogin.png';
import './createSub.scss';

class CreateSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_id: '',
      redirectToReferrer: false,
      sub_desc: '',
      sub_qty: '',
      sub_minutes: '',
      part_array: [],
      sub_array: [],
      sub_version: '',
      displayPartName: '',
      sub_total_price: '',
      sub_labormins: '',
      displaySubName: ''
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
      uniqueId.add(element.sub_id);
    });

    this.setState({
      idMessage: '',
      descMessage: '',
      qtyMessage: '',
      minMessage: '',
      laborMessage: ''
    });

    if (this.state.sub_id.length <= 0) {
      this.setState({ idMessage: 'Empty field please enter information' });
      check1.src = grayCheckMark;
    }
    if (uniqueId.has(parseInt(this.state.sub_id))) {
      this.setState({ idMessage: 'ID already taken, please set a new ID' });
      check1.src = grayCheckMark;
    }

    if (this.state.sub_desc.length <= 0) {
      this.setState({ descMessage: 'Empty field please enter information' });
      check2.src = grayCheckMark;
    }

    if (this.state.sub_qty.length <= 0) {
      this.setState({ qtyMessage: 'Empty field please enter information' });
      check3.src = grayCheckMark;
    }

    if (this.state.sub_minutes.length <= 0) {
      this.setState({ minMessage: 'Empty field please enter information' });
      check4.src = grayCheckMark;
    }

    if (this.state.sub_version.length <= 0) {
      this.setState({ versionMessage: 'Empty field please enter information' });
      check5.src = grayCheckMark;
    }

    if (this.state.sub_total_price.length <= 0) {
      this.setState({ totalMessage: 'Empty field please enter information' });
      check6.src = grayCheckMark;
    }

    if (this.state.sub_labormins.length <= 0) {
      this.setState({ laborMessage: 'Empty field please enter information' });
      check7.src = grayCheckMark;
    }

    if (
      this.state.sub_id.length > 0 &&
      !uniqueId.has(parseInt(this.state.sub_id)) &&
      this.state.sub_qty.length > 0 &&
      this.state.sub_minutes.length > 0 &&
      this.state.sub_version.length > 0 &&
      this.state.sub_total_price.length > 0 &&
      this.state.sub_labormins.length > 0
    ) {
      let postData = {
        sub_id: parseInt(this.state.sub_id),
        sub_desc: this.state.sub_desc,
        sub_version: this.state.sub_version,
        sub_total_price: this.state.sub_total_price,
        sub_qty: this.state.sub_qty,
        sub_labormins: parseInt(this.state.sub_labormins),
        parts: this.state.part_array,
        other_sub: this.state.sub_array
      };
      this.props.subSubmit(undefined, postData);
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

  deletePart = event => {
    let deleteItem = event.target.textContent;
    if (window.confirm('Delete Item?')) {
      let remainingArray = this.state.part_array.filter(
        element => element !== deleteItem
      );
      this.setState({ part_array: remainingArray });
    }
  };

  deleteSub = event => {
    let deleteItem = event.target.textContent;
    if (window.confirm('Delete Item?')) {
      let remainingArray = this.state.sub_array.filter(
        element => element !== deleteItem
      );
      this.setState({ sub_array: remainingArray });
    }
  };

  addToAssembly = elementID => {
    console.log(this.state);
    const partOptions = document.getElementById(elementID);
    const { name, value } = partOptions;
    let set = new Set();
    console.log(this.props.main.parts);

    this.state[name].forEach(element => {
      set.add(element);
    });

    if (value && !set.has(value)) {
      this.setState({
        [name]: [...this.state[name], value]
      });
    }
  };

  displayName = event => {
    let display = parseInt(event.target.textContent);
    console.log(display);
    let displayText = this.props.main.parts.filter(
      element => element.part_id === display
    );
    this.setState({ displayPartName: displayText[0].part_desc });
  };

  displaySubName = event => {
    let display = parseInt(event.target.textContent);

    console.log(this.props.main.subAssembly);

    let displayText = this.props.main.subAssembly.filter(
      element => element.sub_id === display
    );
    console.log(displayText);
    this.setState({ displaySubName: displayText[0].sub_desc });
  };

  render() {
    const data = this.props.main.parts;
    const subData = this.props.main.subAssembly;

    const idListCreator = () => {
      let set = new Set();
      data.forEach(element => {
        if (element.part_id) {
          set.add({ part_id: element.part_id, part_desc: element.part_desc });
        }
      });
      return [...set];
    };

    const subListCreator = () => {
      let set = new Set();
      console.log(subData, 'i am sub data');
      subData.forEach(element => {
        if (element.sub_id) {
          set.add({ sub_id: element.sub_id, sub_desc: element.sub_desc });
        }
      });
      return [...set];
    };

    if (this.state.redirectToReferrer) return <Redirect to="/part-table" />;

    return (
      <div>
        <div className="toolbar">
          <img src={logo} />
          <NavUI />
        </div>

        <div className="centered">
          <li>
            <label type="part_array">Part ID</label>
            <select name="part_array" type="select" id="part_options">
              <option value="">Select Part ID</option>

              {idListCreator().map((element, idx) => (
                <option value={element.part_id} key={idx}>
                  {element.part_id} {element.part_desc}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                this.addToAssembly('part_options');
              }}
            >
              {' '}
              Add{' '}
            </button>
          </li>

          <li>
            <label type="sub_array">Other Sub</label>
            <select name="sub_array" type="select" id="sub_option">
              <option value="">Select Other Sub</option>

              {subListCreator().map((element, idx) => (
                <option value={element.sub_id} key={idx}>
                  {element.sub_id} {element.sub_desc}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                this.addToAssembly('sub_option');
              }}
            >
              {' '}
              Add{' '}
            </button>
          </li>
        </div>

        <div className="centered">
          <div className="part-field">
            <p>Parts to include in this assembly:</p>
            <p>
              Instruction: Hover over the id to view the name of the part. Click
              an id to delete the item from the list.
            </p>
            <h2>{this.state.displayPartName}</h2>
            {this.state.part_array.map((element, idx) => (
              <div name={element}>
                <li
                  key={idx}
                  onMouseEnter={this.displayName}
                  onClick={this.deletePart}
                >
                  {element}
                </li>
              </div>
            ))}
          </div>

          <div className="part-field">
            <p>Sub assembly to include in this assembly:</p>
            <p>
              Instruction: Hover over the id to view the name of the sub
              assembly. Click an id to delete the item from the list.
            </p>
            <h2>{this.state.displaySubName}</h2>
            {this.state.sub_array.map((element, idx) => (
              <div name={element}>
                <li
                  key={idx}
                  onMouseEnter={this.displaySubName}
                  onClick={this.deleteSub}
                >
                  {element}
                </li>
              </div>
            ))}
          </div>
          <div>
            <form>
              <li>
                <label type="sub_id">Sub Assembly ID</label>
                <input type="text" name="sub_id" onChange={this.handleChange} />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check1"
                />
              </li>
              <p>{this.state.idMessage}</p>
              <li>
                <label type="sub_desc">Sub Assembly Description</label>
                <input
                  type="text"
                  name="sub_desc"
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
                <label type="sub_qty">Sub Assembly Quantity</label>
                <input
                  type="text"
                  name="sub_qty"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check3"
                />
              </li>
              <p>{this.state.qtyMessage}</p>
              <li>
                <label type="sub_minutes">Sub Assembly Minutes</label>
                <input
                  type="text"
                  name="sub_minutes"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check4"
                />
              </li>
              <p>{this.state.minMessage}</p>
              <li>
                <label type="sub_version">Sub Assembly Version</label>
                <input
                  type="text"
                  name="sub_version"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check5"
                />
              </li>
              <p>{this.state.versionMessage}</p>
              <li>
                <label type="sub_total_price">Sub Assembly Total-Price</label>
                <input
                  type="text"
                  name="sub_total_price"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check6"
                />
              </li>
              <p>{this.state.totalMessage}</p>
              <li>
                <label type="sub_labormins">
                  Sub Assembly Labor in Minutes
                </label>
                <input
                  type="text"
                  name="sub_labormins"
                  onChange={this.handleChange}
                />
                <img
                  alt="check to verify the state of successful form submit"
                  src={greenCheckMark}
                  id="check7"
                />
              </li>
              <p>{this.state.laborMessage}</p>
              <button type="submit" onClick={this.handleSubmit}>
                Build
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
} //end class LOGIN

const mapDispatchToProps = (dispatch, getState) => ({
  subSubmit: (url, object) => dispatch(actions.subSubmit(url, object))
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSub);
