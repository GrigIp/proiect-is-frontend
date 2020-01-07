import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const CusotomLoader = () => {
  return (
    <div style = {styles.loaderStyle}>
      <Loader type="Triangle"
              color="#BB181D"
              height={100}
              width={100} />
    </div>
  );
};

const styles = {
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: '17%',
    marginLeft: '44%',
    marginDown: '17%',
    marginRight: '44%'
  }
};

export default CusotomLoader;

