/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */

import React, {Component} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import {Divider} from 'react-native-elements';

class TermsAndConditions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Privacy Policy</Text>
                <ScrollView
                    style={styles.tcContainer}
                >
                    <Text style={styles.titleText}>Effective Date: 05/23/2020</Text>
                    <Text style={styles.titleText}>Applicable To The Following Mobile Application:</Text>
                    <Text style={styles.titleText}>'Paci-fied™' Pacibabyr sizing mobile application (app)</Text>
                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>

                    <Text style={styles.header}>Article 1 - DEFINITIONS:</Text>

                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        APPLICABLE MOBILE APPLICATION: This Privacy Policy will refer to and be applicable to the Mobile
                        App listed above, which shall hereinafter be referred to as "Mobile App."
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        EFFECTIVE DATE: "Effective Date" means the date this Privacy Policy comes into force and effect.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        PARTIES: The parties to this privacy policy are the following data controller: Toothprints PC
                        ("Data Controller") and you, as the user of this Mobile App. Hereinafter, the parties will
                        individually be referred to as "Party" and collectively as "Parties."
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        DATA CONTROLLER: Data Controller is the publisher, owner, and operator of the Mobile App and is
                        the Party responsible for the collection of information described herein. Data Controller shall
                        be referred to either by Data Controller's name or "Data Controller," as listed above. If Data
                        Controller or Data Controller's property shall be referred to through first-person pronouns, it
                        shall be through the use of the following: us, we, our, ours, etc.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        YOU: Should you agree to this Privacy Policy and continue your use of the Mobile App, you will
                        be referred to herein as either you, the user, or if any second-person pronouns are required and
                        applicable, such pronouns as 'your", "yours", etc.
                        {' '}
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        SERVICES: "Services" means any services that we make available for sale on the
                        Mobile App.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        PERSONAL DATA: "Personal DATA" means personal data and information that we obtain from you in
                        connection with your use of the Mobile App that is capable of identifying you in any manner.
                        {' '}
                        {' '}
                    </Text>

                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 2 - GENERAL INFORMATION:</Text>

                    <Text style={styles.tcP}>This privacy policy (hereinafter "Privacy Policy") describes how we collect
                        and use the Personal Data that we receive about you, as well as your rights in relation to that
                        Personal Data, when you visit our Mobile App or use our Services. </Text>
                    <Text style={styles.tcP}>This Privacy Policy does not cover any information that we may receive
                        about you through sources other than the use of our Mobile App. The Mobile App may link out to
                        other websites or mobile applications, but this Privacy Policy does not and will not apply to
                        any of those linked websites or applications. </Text>
                    <Text style={styles.tcP}>We are committed to the protection of your privacy while you use our Mobile
                        App. </Text>
                    <Text style={styles.tcP}>By continuing to use our Mobile App, you acknowledge that you have had the
                        chance to review and consider this Privacy Policy, and you acknowledge that you agree to it.
                        This means that you also consent to the use of your information and the method of disclosure as
                        described in this Privacy Policy. If you do not understand the Privacy Policy or do not agree to
                        it, then you agree to immediately cease your use of our Mobile App. </Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 3 -CONTACT AND DATA PROTECTION OFFICER:</Text>
                    <Text style={styles.tcP}>
                        The Party responsible for the processing of your personal data is as follows: Toothprints
                        PC. The Data Controller may be contacted as follows:
                    </Text>

                    <Text style={styles.address}>Toothprints PC</Text>
                    <Text style={styles.address}>13 Norcross Road</Text>
                    <Text style={styles.address}>Norcross </Text>
                    <Text style={styles.address}>Hopkinton, MA 01748 USA</Text>

                    <Text style={styles.tcP}>The Data Controller and operator of the Mobile App are one and the
                        same.</Text>

                    <Text style={styles.tcP}>The Data Protection Officer is as follows: Attn; Data Protection Office
                        Toothprints PC. </Text>
                    <Text style={styles.tcP}>The Data Protection Officer may be contacted as follows:</Text>

                    <Text style={styles.address}>Data Protection Officer</Text>
                    <Text style={styles.address}>info@toothprints.info</Text>
                    <Text style={styles.address}>13 Norcross Road</Text>
                    <Text style={styles.address}>Hopkinton, MA 01748 USA</Text>

                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 4 - LOCATION:</Text>
                    <Text style={styles.tcP}>The Data Protection Officer may be contacted as follows:</Text>

                    <Text style={styles.address}>Toothprints PC</Text>
                    <Text style={styles.address}>13 Norcross Road</Text>
                    <Text style={styles.address}>Norcross </Text>
                    <Text style={styles.address}>Hopkinton, MA 01748 USA</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 5 - MODIFICATIONS AND REVISIONS:</Text>
                    <Text style={styles.tcP}>
                        We reserve the right to modify, revise, or otherwise amend this Privacy Policy at any
                        time and in any manner. If we do so, however, we will notify you and obtain your consent to the
                        change in processing. Unless we specifically obtain your consent, any changes to the Privacy
                        Policy will only impact the information collected on or after the date of the change. It is also
                        your responsibility to periodically check this page for any such modification, revision or
                        amendment.
                    </Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 6 - THE PERSONAL DATA WE RECEIVE FROM YOU:</Text>
                    <Text style={styles.tcP}>
                        Depending on how you use our Mobile App, you will be subject to different types of
                        Personal Data collected and different manners of collection:
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Unregistered users: If you are a passive user of the Mobile App and do not register for any
                        purchases or other service, you may still be subject to certain passive data collection
                        ("Passive Data Collection"). Such Passive Data Collection may include through cookies, as
                        described below, IP address information, location information, and certain browser data, such as
                        history and/or session information.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        All users: The Passive Data Collection that applies to Unregistered users shall also apply to
                        all other users and/or visitors of our Mobile App.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Related Entities: We may share your Personal Data, including Personal Data that identifies you
                        personally, with any of our parent companies, subsidiary companies, affiliates or other trusted
                        related entities.
                        However, we only share your Personal Data with a trusted related entity if that entity agrees to
                        our privacy standards as set out in this Privacy Policy and to treat your Personal Data in the
                        same manner that we do.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        User Experience: From time to time we may request information from you to assist us in improving
                        our Mobile App, and the Services we sell, such as demographic information or your particular
                        preferences.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Combined or Aggregated Information: We may combine or aggregate some of your Personal Data in
                        order to better serve you and to better enhance and update our Mobile App for your and other
                        consumers' use.
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Other Information: In addition to collecting the Personal Data as already described herein, we
                        may also collect the following Personal Data: Collected biometric information and demographic
                        information may be used to :
                        1. enhance and calibrate the mobile app
                        2. to publish scientific data analysis harvested from the app.
                        {' '}
                    </Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 7 - THE PERSONAL DATA WE RECEIVE AUTOMATICALLY:</Text>
                    <Text style={styles.tcP}>Cookies: We may collect information from you through automatic tracking
                        systems (such as information about your browsing preferences) as well as through information
                        that you volunteer to us (such as information that you provide during a registration process or
                        at other times while using the Mobile App, as described above).</Text>
                    <Text style={styles.tcP}>For example, we use cookies to make your browsing experience easier and
                        more intuitive: cookies are small strings of text used to store some information that may
                        concern the user, his or her preferences or the device they are using to access the internet
                        (such as a computer, tablet, or mobile phone). Cookies are mainly used to adapt the operation of
                        the site to your expectations, offering a more personalized browsing experience and memorizing
                        the choices you made previously.</Text>
                    <Text style={styles.tcP}>A cookie consists of a reduced set of data transferred to your browser from
                        a web server and it can only be read by the server that made the transfer. This is not
                        executable code and does not transmit viruses.</Text>
                    <Text style={styles.tcP}>Cookies do not record or store any Personal Data. If you want, you can
                        prevent the use of cookies, but then you may not be able to use our Mobile App as we intend. To
                        proceed without changing the options related to cookies, simply continue to use our Mobile
                        App.</Text>
                    <Text style={styles.tcP}>Technical cookies: Technical cookies, which can also sometimes be called
                        HTML cookies, are used for navigation and to facilitate your access to and use of the site. They
                        are necessary for the transmission of communications on the network or to supply services
                        requested by you. The use of technical cookies allows the safe and efficient use of the
                        site.</Text>
                    <Text style={styles.tcP}>You can manage or request the general deactivation or cancelation of
                        cookies through your browser. If you do this though, please be advised this action might slow
                        down or prevent access to some parts of the site.</Text>
                    <Text style={styles.tcP}>Cookies may also be retransmitted by an analytics or statistics provider to
                        collect aggregated information on the number of users and how they visit the Mobile App. These
                        are also considered technical cookies when they operate as described.</Text>
                    <Text style={styles.tcP}>Temporary session cookies are deleted automatically at the end of the
                        browsing session - these are mostly used to identify you and ensure that you don't have to log
                        in each time - whereas permanent cookies remain active longer than just one particular
                        session.</Text>
                    <Text style={styles.tcP}>Support in configuring your browser: You can manage cookies through the
                        settings of your browser on your device. However, deleting cookies from your browser may remove
                        the preferences you have set for this Mobile App. </Text>

                    <Text style={styles.tcP}>For further information and support, you can also visit the specific help
                        page of the web browser you are using:</Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Internet Explorer: http://windows.microsoft.com/en-us/windows-vista/block-or- allow-cookies
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Firefox: https://support.mozilla.org/en-us/kb/enable-and-disable-cookies- website-preferences
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Firefox: https://support.mozilla.org/en-us/kb/enable-and-disable-cookies- website-preferences
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Chrome: https://support.google.com/accounts/answer/61416?hl=en
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        Opera: http://www.opera.com/help/tutorials/security/cookies/
                        {' '}
                    </Text>


                    <Text style={styles.tcP}>Log Data: Like all websites and mobile applications, this Mobile App also
                        makes use of log files that store automatic information collected during user visits. The
                        different types of log data could be as follows:</Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        internet protocol (IP) address
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        type of browser and device parameters used to connect to the Mobile App
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        name of the Internet Service Provider (ISP)
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        date and time of visit
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        web page of origin of the user (referral) and exit
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        possibly the number of clicks
                        {' '}
                    </Text>

                    <Text style={styles.tcP}>The aforementioned information is processed in an automated form and
                        collected in an exclusively aggregated manner in order to verify the correct functioning of the
                        site, and for security reasons. This information will be processed according to the legitimate
                        interests of the Data Controller</Text>

                    <Text style={styles.tcP}>
                        For security purposes (spam filters, firewalls, virus detection), the automatically recorded
                        data may also possibly include Personal Data such as IP address, which could be used, in
                        accordance with applicable laws, in order to block attempts at damage to the Mobile App or
                        damage to other users, or in the case of harmful activities or crime. Such data
                        are never used for the identification or profiling of the user, but only for the protection of
                        the Mobile App and our users. Such information will be treated according to the legitimate
                        interests of the Data Controller.
                    </Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 8 - THIRD PARTIES:</Text>
                    <Text style={styles.tcP}>We may utilize third-party service providers ("Third-Party Service
                        Providers"), from time to time or all the time, to help us with our Mobile App, and to help
                        serve you.</Text>
                    <Text style={styles.tcP}>We may use Third-Party Service Providers to assist with information storage
                        (such as cloud storage). </Text>
                    <Text style={styles.tcP}>We may use Third-Party Service Providers to host the Mobile App. In this
                        instance, the Third-Party Service Provider will have access to your Personal Data.</Text>
                    <Text style={styles.tcP}>We may allow third parties to advertise on the Mobile App. These third
                        parties may use cookies in connection with their advertisements (see the "Cookies" clause in
                        this Privacy Policy).</Text>
                    <Text style={styles.tcP}>Some of our Third-Party Service Providers may be located outside of the
                        United States and may not be subject to U.S. privacy laws. The countries or regions in which our
                        Third-Party Service Providers may be located include: England, Italy, and Spain.</Text>
                    <Text style={styles.tcP}>We only share your Personal Data with a Third-Party Service Provider if
                        that provider agrees to our privacy standards as set out in this Privacy Policy.</Text>
                    <Text style={styles.tcP}>Notwithstanding the other provisions of this Privacy Policy, we may provide
                        your Personal Data to a third party or to third parties in order to protect the rights, property
                        or safety, of us, our customers or third parties, or as otherwise required by law.</Text>
                    <Text style={styles.tcP}>We may also share your Personal Data with the following third parties:
                        Engineering and Baby Product companies that design, patent and licence baby products.</Text>
                    <Text style={styles.tcP}>We will not knowingly share your Personal Data with any third parties other
                        than in accordance with this Privacy Policy.</Text>
                    <Text style={styles.tcP}>If your Personal Data might be provided to a third party in a manner that
                        is other than as explained in this Privacy Policy, you will be notified. You will also have the
                        opportunity to request that we not share that information.</Text>
                    <Text style={styles.tcP}>In general, you may request that we do not share your Personal Data with
                        third parties. Please contact us via email, if so. Please be advised that you may lose access to
                        certain services that we rely on third-party providers for.</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 9 - HOW PERSONAL DATA IS STORED:</Text>
                    <Text style={styles.tcP}>We use secure physical and digital systems to store your Personal Data when
                        appropriate. We ensure that your Personal Data is protected against unauthorized access,
                        disclosure, or destruction.</Text>
                    <Text style={styles.tcP}>Please note, however, that no system involving the transmission of
                        information via the internet, or the electronic storage of data, is completely secure. However,
                        we take the protection and storage of your Personal Data very seriously. We take all reasonable
                        steps to protect your Personal Data. </Text>
                    <Text style={styles.tcP}>The systems that we use to store your information include but are not
                        limited to: the mobile application functions along side and communicates with an application
                        interface (API)</Text>
                    <Text style={styles.tcP}>Personal Data is stored throughout your relationship with us. We delete
                        your Personal Data upon request for cancelation of your account or other general request for the
                        deletion of data.</Text>
                    <Text style={styles.tcP}>In the event of a breach of your Personal Data, you will be notified in a
                        reasonable time frame, but in no event later than two weeks, and we will follow all applicable
                        laws regarding such breach.</Text>

                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 10 - PURPOSES OF PROCESSING OF PERSONAL DATA:</Text>
                    <Text style={styles.tcP}>We primarily use your Personal Data to help us provide a better experience
                        for you on our Mobile App and to provide you the services and/or information you may have
                        requested, such as use of our Mobile App.</Text>
                    <Text style={styles.tcP}>Information that does not identify you personally, but that may assist in
                        providing us broad overviews of our customer base, will be used for market research or marketing
                        efforts. Such information may include, but is not limited to, interests based on your
                        cookies.</Text>
                    <Text style={styles.tcP}>Personal Data that may be considering identifying may be used for the
                        following: improving your personal user experience, and providing customer service to
                        you.</Text>

                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 11 - DISCLOSURE OF PERSONAL DATA:</Text>
                    <Text style={styles.tcP}>Although our policy is to maintain the privacy of your Personal Data as
                        described herein, we may disclose your Personal Data if we believe that it is reasonable to do
                        so in certain cases, in our sole and exclusive discretion. Such cases may include, but are not
                        limited to:</Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        To satisfy any local, state, or Federal laws or regulations
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        To respond to requests, such discovery, criminal, civil, or administrative process, subpoenas,
                        court orders, or writs from law enforcement or other governmental or legal bodies
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        To bring legal action against a user who has violated the law or violated the terms of use of
                        our Mobile App
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        As may be necessary for the operation of our Mobile App
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        To generally cooperate with any lawful investigation about our users
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        If we suspect any fraudulent activity on our Mobile App or if we have noticed any activity which
                        may violate our terms or other applicable rules
                        {' '}
                    </Text>

                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 12 - CHILD ACCESS:</Text>
                    <Text style={styles.tcP}>Although we may collect anthropometric and demographic information from
                        infants, toddlers and children , we do not recommend and encourage children to visit our Mobile
                        App.</Text>
                    <Text style={styles.tcP}>The information we collect from children is as follows: Facial photo taken
                        and supplied by the parent (authorized user), along with demographic information of age, weight,
                        height and ethnicity provided by the parent (authorized user).</Text>


                    <Text style={styles.tcP}>Information collected from parents (authorized user) in accordance with
                        this clause is collected to help us enhance all user experiences and to improve our Mobile
                        App.</Text>
                    <Text style={styles.tcP}>It is also collected for the specific purpose of the following: Provide the
                        information from which a recommendation is made as to the proper size Pacibabyr to fit the infant
                        or toddler.</Text>


                    <Text style={styles.tcP}>We do not require parent (authorized user) to disclose any further
                        information than is reasonably necessary to interact with our Mobile App.</Text>
                    <Text style={styles.tcP}>Parents ( authorized user and guardians of minor children) may review the
                        Personal Data of their child and have it deleted at their request. They may also agree to
                        collection and use of information, without consenting to disclosure to any other party. They may
                        also refuse to permit any further collection or use of such information by sending us an email
                        at info@toothprints.info.</Text>
                    <Text style={styles.tcP}>Otherwise, information collected from infants, toddlers and children in
                        accordance with this clause is collected, used and if applicable, disclosed, in accordance with
                        the general provisions of this Privacy Policy.</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 13 - OPTING OUT OF TRANSMITTALS FROM US:</Text>
                    <Text style={styles.tcP}>From time to time, we may send you informational or marketing
                        communications related to our Mobile App such as announcements or other information. If you wish
                        to opt-out of such communications, you may contact the following email: info@toothprints.info.
                        You may also click the opt-out link which will be provided at the bottom of any and all such
                        communications. </Text>
                    <Text style={styles.tcP}>Please be advised that even though you may opt-out of such communications,
                        you may still receive information from us that is specifically about your use of our Mobile
                        App..</Text>
                    <Text style={styles.tcP}>By providing any Personal Data to us, or by using our Mobile App in any
                        manner, you have created a commercial relationship with us. As such, you agree that any email
                        sent from us or third-party affiliates, even unsolicited email, shall specifically not be
                        considered SPAM, as that term is legally defined.</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 14 - MODIFYING, DELETING, AND ACCESSING YOUR INFORMATION:</Text>
                    <Text style={styles.tcP}>If you wish to modify or delete any information we may have about you, or
                        you wish to simply access any information we have about you, you may reach out to us at the
                        following email address: info@toothprints.info.</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 15 - ACCEPTANCE OF RISK:</Text>
                    <Text style={styles.tcP}>By continuing to our Mobile App in any manner, use the Product, you
                        manifest your continuing asset to this Privacy Policy. You further acknowledge, agree and accept
                        that no transmission of information or data via the internet is not always completely secure, no
                        matter what steps are taken. You acknowledge, agree and accept that we do not guarantee or
                        warrant the security of any information that you provide to us, and that you transmit such
                        information at your own risk.</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 16 - YOUR RIGHTS:</Text>
                    <Text style={styles.tcP}>You have many rights in relation to your Personal Data. Specifically, your
                        rights are as follows:</Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to be informed about the processing of your Personal Data
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to have access to your Personal Data
                        {' '}
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to update and/or correct your Personal Data
                        {' '}
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to portability of your Personal Data
                        {' '}
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to oppose or limit the processing of your Personal Data
                        {' '}
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to block any Personal Data processing in violation of any applicable law
                        {' '}
                    </Text>
                    <Text style={styles.tcL}>
                        {'\u2022'}
                        {' '}
                        The right to launch a complaint with the Federal Trade Commission (FTC) in the
                        United States or applicable data protection authority in another jurisdiction
                        {' '}
                    </Text>
                    <Text style={styles.tcP}>Such rights can all be exercised by contacting us at the relevant contact
                        information listed in this Privacy Policy.</Text>


                    <Divider style={{backgroundColor: '#F5F5F5', height: 15}}/>
                    <Text style={styles.header}>Article 17 - CONTACT INFORMATION:</Text>
                    <Text style={styles.tcP}>
                        If you have any questions about this Privacy Policy or the way we collect information
                        from you, or if you would like to launch a complaint about anything related to this Privacy
                        Policy, you may contact us at the following email address: info@toothprints.info.
                    </Text>


                </ScrollView>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('ProfileScreen');
                        // this.props.navigation.navigate('Welcome');
                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttonLabel}>Accept</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const {height} = Dimensions.get('window');

const styles = {

    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 22,
        marginTop: 15,
        alignSelf: 'center',
    },
    titleText: {
        marginBottom: 5,
        fontSize: 12,
        alignSelf: 'center',
    },
    address: {
        fontSize: 12,
        alignSelf: 'center',
    },
    header: {
        marginBottom: 10,
        fontSize: 12,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    tcP: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
    },
    tcL: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
    },
    tcContainer: {
        marginTop: 15,
        marginBottom: 15,
        height: height * 0.78,
        // height: 0.5,
    },

    button: {
        backgroundColor: '#42B6C7',
        borderRadius: 5,
        padding: 10,
    },

    buttonDisabled: {
        backgroundColor: '#999',
        borderRadius: 5,
        padding: 10,
    },

    buttonLabel: {
        fontSize: 14,
        color: '#FFF',
        alignSelf: 'center',
    },

};

export default TermsAndConditions;
