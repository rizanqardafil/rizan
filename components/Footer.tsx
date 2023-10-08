import React, { Component } from 'react'

// Define a type for the component state
interface State {
  currentYear: number
}

class Footer extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      currentYear: new Date().getFullYear(),
    }
  }

  render() {
    return (
      <div className='text-center text-sm font-doodle p-3 pb-20 md:pb-3'>
        <span className='font-sans'>©</span>
        {this.state.currentYear} Rizan Qardafil. All Rights Reserved.
      </div>
    )
  }
}

export default Footer
