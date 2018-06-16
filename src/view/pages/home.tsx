import * as React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { bind } from 'bind-decorator'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { SampleService } from '../../domain'
import * as actions from '../../actions'
import { Sentence, Button } from '../atoms'

export interface IHomeProps {
  actions: {
    onAppInit: any
  }
  state: any
  sampleService: SampleService
}

class Home extends React.Component<IHomeProps, any> {
  render(): JSX.Element {
    return (
      <div className={css(this.style.content)}>
	<div className={css(this.style.block)}>
	  <Sentence>{this.props.state.appState}</Sentence>
	</div>
	<Button onClick={this.handleClick}>ボタンコンポーネント</Button>
      </div>
    )
  }

  /*------ Lifecycle ------*/
  componentDidMount() {
    this.props.actions.onAppInit(this.callback, this.props.sampleService)
  }

  /*------ Handler ------*/
  @bind
  handleClick() {
    alert("clicked!")
  }

  @bind
  callback(data: any) {
    console.log(data)
  }

  /*------ Style ------*/
  get style() {
    return StyleSheet.create({
      content: {
	alignContent: 'center',
	alignItems: 'center',
	display: 'flex',
	flexWrap: 'wrap',
	height: '85vh',
	justifyContent: 'center',
	paddingTop: '50px',
	paddingBottom: '50p',
	textAlign: 'center',
      },
      block: {
	width: '100%',
      },
    })
  }
}

const mapState = (state: any, ownProps: any) => ({
  state: state.mainReducer
})

const mapDispatch = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapState, mapDispatch)(Home)
