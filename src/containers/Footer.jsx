import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            Copyright © 2020 J Shopping. All rights reserved.
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="text-md-right footer-links d-none d-sm-block">
                                <Link to="/about">About</Link>
                                <Link to="/support">Support</Link>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
