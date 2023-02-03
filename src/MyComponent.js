import { Component } from "react";
import propTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };

  static propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제이름은{name}입니다.
        <br />
        children 값은 {children} 입니다.
        <br />
        제가 제일 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default MyComponent;
