import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { bind } from 'bind-decorator'
import { css, StyleSheet } from 'aphrodite'
import * as configs from '../../configs'

export interface IButtonProps {
  onClick?: (event: React.FormEvent<any>) => void,
}

export class Button extends React.Component<IButtonProps, any> {
    render(): JSX.Element {
        return (
            <button
                className={css(this.style.button)}
                onClick={this.onClick}
            >
                {this.props.children}
            </button>
        )
    }

    @bind
    onClick(event: React.FormEvent<any>) {
        this.props.onClick && this.props.onClick(event)
    }

    get style() {
        return StyleSheet.create({
            button: configs.styles.button
        })
    }

}
