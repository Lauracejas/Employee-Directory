import React from "react";

const styles = {
    headerStyle: {
      background: "darkblue",
      color: "white",      
    },
    
  };

function Header () {
    return (
        <div className="jumbotron jumbotronfluid"  style={styles.headerStyle}>
            <h1 className="d-flex justify-content-center">Employee Directory</h1>
            <p className="d-flex justify-content-center">Click on name heading to filter or use the search box to narrow your results</p>
        </div>
    )
}

export default Header;