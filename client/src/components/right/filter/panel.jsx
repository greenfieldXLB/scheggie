import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 155,
  },
};

class Panel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selected: this.props.default
    // }
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event, index, value) {
  //   console.log('the event value clicked is ', typeof value)
  //   console.log('the clicked value is ', value)
  //   if (value.includes('Any')) {
  //     this.setState({
  //       selected: this.props.default
  //     }, function() {
  //       if (this.props.category === 'cuisine') {
  //         this.props.updateCategoryTerm(this.props.category, this.state.selected);
  //       } else {
  //         this.props.updateCategoryTerm(this.props.category, '10000');
  //       }
  //
  //     })
  //   } else {
  //       this.setState({
  //         selected:value
  //       }, function() {
  //         this.props.updateCategoryTerm(this.props.category, this.state.selected);
  //       })
  //   }
  // }

  handleClick(event, index, value) {
    console.log('the event value clicked is ', typeof value)
    console.log('the clicked value is ', value)
    // if (value.includes('Any')) {
    //   this.props.actions.updateSelectedFilterVal('');
    //   if (this.props.category === 'cuisine') {
    //     this.props.updateCategoryTerm(this.props.category, '10000');
    //   } else {
    //     this.props.updateCategoryTerm(this.props.category, '');
    //   }
    // } else {
    //   this.props.actions.updateSelectedFilterVal(value);
    //   this.props.updateCategoryTerm(this.props.category, value);
    // }
    debugger
    if (this.props.category === 'cuisine') {

      if (value.includes('Any')) {
        this.props.actions.updateCuisineType('');
      } else {
        this.props.actions.updateCuisineType(value);
      }
    } else if (this.props.category === 'calories') {
      if (value.includes('Any')) {
        this.props.actions.updateNumCalories('10000');
      } else {
        this.props.actions.updateNumCalories(value);
      }
    } else if (this.props.category === 'totalTimeInSeconds') {
      if (value.includes('Any')) {
        this.props.actions.updatePrepTime('10000');
      } else {
        this.props.actions.updatePrepTime(value);
      }
    }
  }

  render() {
    if (this.props.category === 'totalTimeInSeconds') {
      return (
        <div style = {{'display': 'inline-block', 'float': 'left', 'padding-right' :'25px', 'margin-top' :'-10px'}}>
          <SelectField
            floatingLabelText = {this.props.selectCategory}
            value = {this.props.search.selected}
            onChange = {this.handleClick}
            style={styles.customWidth}
          >
            <MenuItem
              value = "Any"
              primaryText = "Any"
            />
            {this.props.choices.map((choice, index) =>
              <MenuItem
                value = {choice}
                key = {index}
                primaryText = {choice/60}
              />
            )}
          </SelectField>
        </div>
      )
    } else {
      return (
        <div style = {{'display': 'inline-block', 'float': 'left', 'padding-right' :'25px', 'margin-top' :'-10px'}}>
          <SelectField
            floatingLabelText = {this.props.selectCategory}
            value = {this.props.search.selected}
            onChange = {this.handleClick}
            style={styles.customWidth}
          >
            <MenuItem
              value = "Any"
              primaryText = "Any"
            />
            {this.props.choices.map((choice, index) =>
              <MenuItem
                value = {choice}
                key = {index}
                primaryText = {choice}
              />
            )}
          </SelectField>
        </div>
      )
    }
  }
}

export default Panel;
