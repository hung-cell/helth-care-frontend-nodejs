import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Header.scss'
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
class Header extends Component {

    render() {


        return (
            <>
                <div className="home-header-container">

                    <div className="home-header-content">
                        <div className="home-header-left-content">
                            <i className="fas fa-bars"></i>
                            <img className="home-header-logo" src={logo} alt="" />

                        </div>
                        <div className="home-header-center-content">
                            <div className="home-header-child-content">
                                <div><strong><FormattedMessage id="home-header.speciality" /></strong></div>
                                <div className="home-header-child-content-subtitle"><FormattedMessage id="home-header.speciality" /></div>
                            </div>
                            <div className="home-header-child-content">
                                <div><strong><FormattedMessage id="home-header.helth-facility" /></strong></div>
                                <div className="home-header-child-content-subtitle"><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className="home-header-child-content">
                                <div><strong><FormattedMessage id="home-header.doctor" /></strong></div>
                                <div className="home-header-child-content-subtitle"><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className="home-header-child-content">
                                <div><strong><FormattedMessage id="home-header.fee" /></strong></div>
                                <div className="home-header-child-content-subtitle"><FormattedMessage id="home-header.helth-check" /></div>
                            </div>
                        </div>
                        <div className="home-header-right-content">
                            <div className="home-header-support"><i className='fas fa-question-circle'></i><FormattedMessage id="home-header.support" /></div>
                            <div className="home-header-language-vi">VN</div>
                            <div className="home-header-language-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="home-header-title-1"><FormattedMessage id="banner.title1" /></div>
                        <div className="home-header-title-2"><FormattedMessage id="banner.title2" /></div>
                        <div className="home-header-search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="home-header-options">

                            <div className="home-header-option">
                                <div className="home-header-option-icon"><i className="far fa-hospital"></i></div>
                                <div className="home-header-option-text"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="home-header-option">
                                <div className="home-header-option-icon"><i className="fas fa-mobile-alt"></i></div>
                                <div className="home-header-option-text"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="home-header-option">
                                <div className="home-header-option-icon"><i className="fas fa-procedures"></i></div>
                                <div className="home-header-option-text"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="home-header-option">
                                <div className="home-header-option-icon"><i class="fas fa-flask"></i></div>
                                <div className="home-header-option-text"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="home-header-option">
                                <div className="home-header-option-icon"><i className="fas fa-user-md"></i></div>
                                <div className="home-header-option-text"><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className="home-header-option">
                                <div className="home-header-option-icon"><i className="fas fa-briefcase-medical"></i></div>
                                <div className="home-header-option-text"><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.user.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
