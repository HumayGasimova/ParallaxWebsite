/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

import PeopleFeedback from '../../SmallParts/PeopleFeedback/peopleFeedback';

/**
* Styles
*/

import './feedback.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    teamMembers
} from '../../../constants/teamMembers';

/**
* Feedback component definition and export
*/

export const Feedback = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.initTeamMembers(teamMembers);
        return () => props.initTeamMembers([]);
    }, [])

    /**
    * Markup
    */
   
    return(
        <div className="feedback">
            <div className="feedback-border1">
                <div className="feedback-border2">
                    <h1>What Clients Say About Us</h1>
                        <PeopleFeedback/>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            members: Selectors.getMembersState(state)
        };
    },
    (dispatch) => {
        return {
            initTeamMembers: bindActionCreators(Actions.initTeamMembers, dispatch)
        };
    }
)(Feedback);
 