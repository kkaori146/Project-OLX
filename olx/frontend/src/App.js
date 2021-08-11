import React from 'react';
import {connect} from 'react-redux';

const Page = (props) => {
  return (
    <div>Opa, funcionando....</div>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  };
}
const mapDisatchToProps = (dispatch) =>{
  return {

  };
}

export default connect(mapStateToProps, mapDisatchToProps)(Page);