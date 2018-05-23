import * as React from 'react'
import { css, StyleSheet } from 'aphrodite'

export interface HeaderProps {
}

export class Header extends React.Component<HeaderProps, any> {
  render(): JSX.Element {
    return (
      <header className={css(this.style.header)}>
	header content.
      </header>
    )
  }

  /*------ Style ------*/
  get style() {
    return StyleSheet.create({
      header: {
	backgroundColor: '#efefef',
	borderBottomColor: '#efefef',
	borderBottomStyle: 'solid',
	borderBottomWidth: '1px',
	color: '#4f4f5f',
	paddingTop: '18px',
	paddingBottom: '18px',
	textAlign: 'center',
      },
    })
  }

}
