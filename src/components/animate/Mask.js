import React from "react"
import anime from "animejs"
import { TransitionPortal } from "gatsby-plugin-transition-link"

export default class Mask extends React.Component {
  constructor(props) {
    super(props)

    this.mask = React.createRef()
  }
  componentDidMount() {
    anime({
      targets: this.mask.current,
      duration: 100,
      easing: "steps(1000)",
      scale: [{ value: 0 }, { value: 3000, duration: 500 }],
      direction: "alternate",
    })
  }

  render() {
    return (
      <TransitionPortal>
        <div
          ref={this.mask}
          style={{
            width: "1px",
            height: "1px",
            background: this.props.bgColor,
            borderRadius: "50%",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </TransitionPortal>
    )
  }
}
