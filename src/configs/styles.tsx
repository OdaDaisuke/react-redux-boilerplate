export const styles = {
  bg_default: '#ffffff',

  characterStyle: {
    '-webkit-font-smoothing': 'antialiased'
  },

  p: {
    color: '#4baefc',
    fontSize: '1.85rem',
    letterSpacing: '2px',
  },

  button: {
    backgroundImage: 'linear-gradient(90deg, #2196F3, #51b1fd)',
    borderWidth: 0,
    borderRadius: '2px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.05rem',
    letterSpacing: '2px',
    marginTop: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
    outline: 'none',
    paddingTop: '12px',
    paddingRight: '40px',
    paddingBottom: '16px',
    paddingLeft: '40px',
    transition: 'all 0.2s',
    ':hover': {
        transform: 'scale(1.03)',
    },
    ':focus': {
      backgroundImage: 'linear-gradient(afeff, #3fafFf, #6fcfff)',
    },
  }
}

