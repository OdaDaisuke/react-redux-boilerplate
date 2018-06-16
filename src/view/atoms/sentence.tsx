import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { css, StyleSheet } from 'aphrodite'
import * as configs from '../../configs'

export interface ISentenceProps {
}

export class Sentence extends React.Component<ISentenceProps, any> {
    render(): JSX.Element {
        return (
            <p className={css(this.style.p)}>
                {this.props.children}
            </p>
        )
    }

    get style() {
        return StyleSheet.create({
            p: configs.styles.p
        })
    }

}
