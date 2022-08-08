import React, { Component } from "react";
export default class ContactMe extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact me for feedback or opportunities
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="wight columns footer-widgets">
                        <div className="widget">
                            <h4>LinkedIn: {resumeData.linkedinId} </h4>
                            <h4>Email: Aodj05@gmail.com</h4>
                            <h4>Phone: {resumeData.phone} </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}