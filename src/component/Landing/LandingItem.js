import React from 'react';
require('./styles.scss');

class LandingItem extends React.Component {
    render() {
        return(
            <div className = "landing_item_background">
                <div className = "landing_item_logo"></div>
                <div className = "landing_item_progress">
                    <div className = "landing_item_circle"></div> 
                    <div className = "landing_item_circle"></div>                                    
                    <div className = "landing_item_circle"></div>                                    
                    <div className = "landing_item_circle"></div>                                                                       
                </div>
            </div>
        )
    }
}

export default LandingItem;