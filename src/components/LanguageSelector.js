import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        console.log("this.context:", this.context);
        return (
            <div>
                Select a Language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag tw" onClick={() => this.context.onLanguageChange('chinese')} />
            </div>
        );
    }
}

export default LanguageSelector;