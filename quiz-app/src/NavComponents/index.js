import React from 'react';

import NavHeader from './NavHeader.js';
import NavSectionSummary from './NavSectionSummary.js';
import QuestionSelectorGrid from './QuestionSelectorGrid.js';
import { classNames } from '../registry.js';

function NavWrapper(){
    return(
        <div className={classNames.NAV_WRAPPER}>
            <NavHeader/>
            <div className={classNames.SECTION_INFO}>
                <h5 className={classNames.SECTION_NAME}>Mathematics</h5>
            </div>
            <NavSectionSummary/>
            <QuestionSelectorGrid/>
        </div>
    );
}

export default NavWrapper;