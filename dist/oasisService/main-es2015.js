(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-light fixexHeight\">\r\n    <img class=\"navbar-brand\" src=\"../assets/images/logoOasis.png\" alt=\"Los Angeles\" width=\"250px\" height=\"ml-auto\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-link\">HOME <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle active\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    CORPORATE\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a routerLink=\"/aboutUS\" routerLinkActive=\"active\" class=\"dropdown-item\">ABOUT US</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle active\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    INDUSTRIES\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a routerLink=\"/automotive\" routerLinkActive=\"active\" class=\"dropdown-item\">AUTOMATIVE</a>\r\n                    <a routerLink=\"/aerospace\" routerLinkActive=\"active\" class=\"dropdown-item\">AEROSPACE</a>\r\n                    <a routerLink=\"/heavyEngineering\" routerLinkActive=\"active\" class=\"dropdown-item\">HEAVY ENGINEERING</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle active\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    SOLUTIONS\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a routerLink=\"/productEng\" routerLinkActive=\"active\" class=\"dropdown-item\">PRODUCT ENGINEERING</a>\r\n                    <a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\" class=\"dropdown-item\">MANUFACTURING\r\n                        ENGINEERING</a>\r\n                    <a routerLink=\"/generalEng\" routerLinkActive=\"active\" class=\"dropdown-item\">GENERAL ENGINEERING</a>\r\n                    <a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\" class=\"dropdown-item\">STAFFING\r\n                        SOLUTIONS - US</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item active\">\r\n                <a routerLink=\"/careers\" routerLinkActive=\"active\" class=\"nav-link\">CAREERS</a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle active\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    CONTACT US\r\n                </a>\r\n                <div style=\"left: -60%;\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a routerLink=\"/address\" routerLinkActive=\"active\" class=\"dropdown-item\">ADDRESS</a>\r\n                    <a routerLink=\"/serviceRequest\" routerLinkActive=\"active\" class=\"dropdown-item\">REQUEST FOR\r\n                        SERVICES</a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n<go-top-button title=\"Go To Top\" [animate]=\"true\" [speed]=\"5\" [acceleration]=\"1\" [scrollDistance]=\"200\" [classNames]=\"'gototop btn btn-primary'\">\r\n    <i class='fa fa-chevron-up'></i>\r\n</go-top-button>\r\n\r\n<!-- Footer -->\r\n<footer class=\"page-footer font-small text-white mt-4\">\r\n    <!-- Footer Links -->\r\n    <div class=\"pt-4 footerBgColor\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <h6>ABOUT US</h6>\r\n                    <div class=\"thin_line\"></div>\r\n                    <p class=\"customFloat\">\r\n                        Oasis is a technology driven organization that focuses on core engineering design, development\r\n                        and manufacturing engineering services.\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <h6>ADDRESS</h6>\r\n                    <div class=\"thin_line\"></div>\r\n                    <ul class=\"customFloat\">\r\n                        <li><b>Head Office:</b></li>\r\n                        <li>\r\n                            Shop No. 1, Sneha Paradise, NDA Road,\r\n                            Warje Malwadi, Pune-411052.\r\n                            Maharashtra, India\r\n                        </li>\r\n                        <li>\r\n                            Contact No: - +91-9130081899\r\n                        </li>\r\n                        <li>\r\n                            sales@oasisserve.com\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <h6>LINKS</h6>\r\n                    <div class=\"thin_line\"></div>\r\n                    <div class=\"tagcloud\">\r\n                        <a routerLink=\"/\" routerLinkActive=\"active\" class=\"tag-link-30\" title=\"Home\" style=\"font-size: 8pt;\">Home</a>\r\n                        <a routerLink=\"/aboutUS\" routerLinkActive=\"active\" class=\"tag-link-33\" title=\"Corporate\" style=\"font-size: 8pt;\">Corporate</a>\r\n                        <a routerLink=\"/automotive\" routerLinkActive=\"active\" class=\"tag-link-34\" title=\"Industries\"\r\n                            style=\"font-size: 8pt;\">Industries</a>\r\n                        <a routerLink=\"/productEng\" routerLinkActive=\"active\" class=\"tag-link-29\" title=\"Solutions\"\r\n                            style=\"font-size: 8pt;\">Solutions</a>\r\n                        <a routerLink=\"/careers\" routerLinkActive=\"active\" class=\"tag-link-35\" title=\"Careers\" style=\"font-size: 8pt;\">Careers</a>\r\n                        <a routerLink=\"/address\" routerLinkActive=\"active\" class=\"tag-link-28\" title=\"Contact Us\" style=\"font-size: 8pt;\">Contact\r\n                            Us</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Footer Links -->\r\n        <!-- Copyright -->\r\n        <div class=\"footer-copyright text-center copyRight py-3\">© 2020 Copyright:\r\n            <a href=\"http://www.oasisserve.com\" target=\"_blank\">Oasis Engineering Services.</a>\r\n        </div>\r\n        <!-- Copyright -->\r\n    </div>\r\n</footer>\r\n<!-- Footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-us/about-us.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-us/about-us.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/about.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-6\">\n                <p style=\"color: black;\">&nbsp;&nbsp;&nbsp; Oasis Engineering Services is a Decade old Company with\n                    specialization in Manufacturing Engineering Design. As development partner and system supplier\n                    OASIS accompanies you from Mechanical Design, Robotic Simulation, Product Design and Project\n                    Management. <br>\n                    &nbsp;&nbsp;&nbsp; We support you with expertise in the following divisions: Automotive, Aerospace,\n                    Heavy Engineering and Specialized Machinery. We serve as a systems supplier for the design\n                    solutions of BIW Welding Lines,Assembly Lines, Jigs and Tools. In the Automotive industry, we are\n                    an expert partner for the entire value chain from Production Engineering, System Development and\n                    Product Design<br>\n                    &nbsp;&nbsp;&nbsp; We have highly qualified staff and experienced professionals to complete\n                    assigned project in given timeline with pre-decided quality and standard.Our team consists of well\n                    experienced professionals from multi-disciplinary engineering and our team Members are constantly\n                    and consistently trained with latest tools and methodologies.</p>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"../../../assets/images/about1.jpg\" alt=\"Card image cap\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-6\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"../../../assets/images/about2.jpg\" alt=\"Card image cap\">\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <h6>Our key performance</h6>\n                <ul>\n                    <li>BIW Fixture (Welding Fixture, Inspection Fixture &amp; Grippers etc.) <br>\n                        a) Production Tooling Fixtures<br>\n                        b) Proto Tooling Fixtures\n                    </li>\n                    <li>Robotics Simulation</li>\n                    <li>Off-Line Programming </li>\n                    <li>Automobile product design/Component Design.</li>\n                </ul>\n            </div>\n\n        </div>\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-6\">\n                <h6>Our skills </h6>\n                <ul>\n                    <li>Design Engineering and Robotic Simulation</li>\n                    <li>Vast experience in Automobile industry.</li>\n                        <li>Expertise in below software platforms.<br>\n                            a) CATIA V5 <br>\n                            b) UNIGRAPHICS –NX<br>\n                            c) RobCAD<br>\n                            d) PROCESS SIMULATE<br>\n                            e) DELMIA<br>\n                            f) FIDES<br>\n                            g) Creo<br>\n                            h) AUTOCAD (For Layouts)\n                        </li>\n                </ul>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"../../../assets/images/about3.jpg\" alt=\"Card image cap\">\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/address/address.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/address/address.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/contact-us.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"col-sm-12\">\n                    <h3>OASIS Engineering Services</h3>\n                </div>\n                <div class=\"row mb-4\">\n                    <div class=\"col-sm-4\">\n                        <p style=\"color: black;\"><b>Head Office: </b></p>\n                        <p style=\"color: black;\">Shop No. 1, Sneha Paradise, NDA Road,\n                        </p>\n                        <p style=\"color: black;\">Warje Malwadi, Pune-411052. </p>\n                        <p style=\"color: black;\">Maharashtra, India</p>\n                    </div>\n                    <div class=\"col-sm-8 videoWrapper\">\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.9889742279374!2d73.8000022268836!3d18.481669316809217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5e1e0c7751%3A0xafc5197382882844!2sSneha%20Paradise%20E%20-Wing!5e0!3m2!1sen!2sin!4v1579673582165!5m2!1sen!2sin\"\n                            frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <p style=\"color: black;\"><b>Operations: </b></p>\n                        <p style=\"color: black;\">First Floor, Z-Wing, </p>\n                        <p style=\"color: black;\">BAIF Development Research Foundation, </p>\n                        <p style=\"color: black;\">Beside Mai Mangeshkar Hospital, </p>\n                        <p style=\"color: black;\">Mumbai Banglore Highway, Warje, </p>\n                        <p style=\"color: black;\">Pune - 411058.</p>\n                        <p style=\"color: black;\">Maharashtra, India</p>\n                    </div>\n                    <div class=\"col-sm-8 videoWrapper\">\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.931523184711!2d73.8005615!3d18.486760699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd3e6a3e157%3A0xd5c98a7e8a33626a!2sBAIF%20Development%20Research%20Foundation!5e0!3m2!1sen!2sin!4v1579673890332!5m2!1sen!2sin\"\n                            frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                    <p style=\"color: black;\">Contact No: - +91-9130081899</p>\n                    <p style=\"color: black;\">Company Email: sales@oasisserve.com</p>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/address\" routerLinkActive=\"active\">Address</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/serviceRequest\" routerLinkActive=\"active\">Request\n                                for Services</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/aerospace/aerospace.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/aerospace/aerospace.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/aerospace.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper list-height\">\n                    <p>Oasis offers Engineering services like design and detailing, drafting, Analysis, Simulation\n                        to various Aerospace verticals like Aero structures, Engines, Interiors, Systems including\n                        instrumentation, Harness and tubing design, Scaffold design, Assembly Jigs and Fixtures,\n                        Transport Fixtures, Storage Racks, Tools for Composite Fabrication, Pallet Fixtures, Lift\n                        assist etc.</p>\n\n                    <p>Oasis offerings for Aerospace domain:</p>\n                    <ul>\n                        <li>Fixture &amp; Tooling design for Assembly, Transport, Racks for storage, Tools for\n                            composites fabrication and Lay-up mold designs, Pallet Fixtures, Lift Assist etc.</li>\n                        <li>Analysis : Stress analysis and Fatigue analysis of Aero-structures and Lay-up Tools.</li>\n                        <li>Technical Documentation:<br>\n                            Oasis also has experience in creation of Technical Documentation/ Publications such as,\n                            <ul>\n                                <li>Engine Manual</li>\n                                <li>Service Manual</li>\n                                <li>Structural Repair Manual</li>\n                                <li>Aircraft Schematic Manual</li>\n                                <li>Flight Manual</li>\n                                <li>Service Bulletins</li>\n                                <li>User Manual</li>\n                                <li>Operational Manual</li>\n                                <li>Owners Manual</li>\n                                <li>Equipment Manual</li>\n                            </ul>\n\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/automotive\" routerLinkActive=\"active\">Automotive</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/aerospace\" routerLinkActive=\"active\">Aerospace</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/heavyEngineering\" routerLinkActive=\"active\">Heavy\n                                Engineering</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/automotive/automotive.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/automotive/automotive.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/automotive.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper\">\n                    <p>Automotive industry is continuously challenged with pressure on investments &amp; reduced time\n                        to market for introduction of new models / variants. On the one hand in the manufacturing space\n                        this leads to a greenfield project or upgrade existing production facilities for introduction\n                        of a new variant on an existing production line. On the other in the Product Engineering space\n                        it leads to new product lines or vehicle facelift projects. In both the scenarios Digital\n                        Manufacturing plays a pivotal role.</p>\n                    <p>The evolving role of the product designers to combine art, science and technology has been\n                        facilitated by digital tools that now allow designers to visualize, communicate and produce\n                        tangible ideas in a way never thought of before. Oasis is able to do exactly this through\n                        the acquisition of Automotive Elements which has very rich experience and the resources to\n                        execute projects in the Automotive domains of Interiors &amp; Exteriors. Oasis supports\n                        customers right from the Concept Design phase through to Product Launch. Validation of designs\n                        for requirements of manufacturing feasibility, regulatory compliances, durability, crash etc.\n                        is done concurrently using CAE tools in the various design phases. The final validated product\n                        complete in all aspects is delivered to the customer within the set timelines. Latest\n                        communication and program management tools are employed during this entire process. The long\n                        standing experience of Automotive Elements will be extended and supplemented by focused\n                        competency development in specific additional automotive domains to enable Oasis to service\n                        its customers across different systems and sub-systems.</p>\n                    <p>Oasis, through its acquisition of Ranal’s engineering services vertical, has now decades of\n                        experience and resources with the right skill sets to address this process in the manufacturing\n                        domain . The company therefore uses diverse and advanced technologies to meet the objective of\n                        reduced time to Start Of Production (SOP). Oasis gets associated with a project right from\n                        Simultaneous Engineering phase to Processing, Equipment design, Factory planning and Build-\n                        support, based on customer need. Digital Manufacturing and simulation tools help to construct a\n                        complete Virtual Factory before a single brick is laid at site, thus enabling the customer to\n                        plan,\n                        validate and optimize their production processes, well ahead of the start of production. Over\n                        the\n                        period of last 20 years the team has catered to the requirements of global customers to\n                        significantly reduce the time as well as cost of setting up production lines.</p>\n                    <p>The array of services in the automotive are as follows:</p>\n                    <h3>Product Engineering</h3>\n\n                    <ul>\n                        <li>Body in White (BIW)</li>\n                        <li>Plastic Interior Trims</li>\n                        <li>Plastic Exterior Trims</li>\n                        <li>Automotive Seating</li>\n                        <li>Chassis Systems</li>\n                    </ul>\n                    <h3>Manufacturing Engineering</h3>\n                    <ul>\n                        <li>BIW Tool Design</li>\n                        <li>Measurement Strategy &amp; Dimensional Management</li>\n                        <li>Processing &amp; Simultaneous Engineering</li>\n                        <li>Simulation &amp; Plant Layout</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/automotive\" routerLinkActive=\"active\">Automotive</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/aerospace\" routerLinkActive=\"active\">Aerospace</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/heavyEngineering\" routerLinkActive=\"active\">Heavy\n                                Engineering</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/careers/careers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/careers/careers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/careers.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <p style=\"text-align: justify; color: black; margin-top: -10px;\">&nbsp;&nbsp;&nbsp; Our strength lies\n                    in our people who are deeply passionate\n                    about delivering successful results and building strong customer\n                    relationships. We believe that our employees are our most valuable\n                    asset. We focus on hiring the most talented, motivated, team-oriented\n                    and dedicated employees who share our values and will work towards\n                    achieving the goals of our organization. Believes in delivering on\n                    its promise and going above and beyond in providing value, both to\n                    our customers and to our employees. </p><br>\n                <p style=\"text-align: justify; color: black;\">&nbsp;&nbsp;&nbsp; Whether you’re an experienced\n                    professional or just embarking on\n                    your career, consider a career with. throughout your career, you will\n                    be challenged by the work and by the people on your team as well as by\n                    the customers. at, we work together to create an environment that motivates\n                    every individual to contribute through creativity and ideas. Furthermore,\n                    gives each employee the opportunity to flourish as an entrepreneur in a\n                    palpable “Can Do” ecosystem that Fosters Winning and Team Spirit in every step.\n                    OES invites you to be a part of our successful team with a winning tradition.</p><br>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"../../../assets/images/careerbottom.jpg\" alt=\"Card image cap\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/genral-eng/genral-eng.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/genral-eng/genral-eng.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/general-engg.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper\">\n                    <h3>Overview</h3>\n                    <p>In today’s competitive world where the cost of the product, time to market and product quality\n                        can make or break businesses, industry leaders are striving to optimize their product costs,\n                        shorten the development time and build product quality into the core processes of PDP. Oasis\n                        helps OEMs and Tier 1s to meet these targets through a variety of focused approaches that cut\n                        across systems, domains and industries. Few of the Oasis offerings aligned to above\n                        mentioned customer aspirations are:</p>\n                    <h3>Knowledge Based Engineering (KBE):</h3>\n                    <p>Customizations/Templates/Macros to speed up the design process, manage iterations and reduce\n                        manual errors induced in the design process. Oasis has a competent team of KBE engineers to\n                        work with various tools such as NX &amp; Catia.</p>\n                    <h3>Simulation:</h3>\n                    <p>Physical proto development and testing is last generation. More and more OEMs are heavily\n                        investing into Digital engineering and Simulation is a key to this process. Oasis can\n                        support OEMs in<br>\n                        a. Product verification – CAE/FEA for strength, durability, safety, CFD, multi-body dynamics,\n                        multi-disciplinary analysis<br>\n\n                        b. Assembly verification – Digital Mock Up (DMU) and assembly/service simulation, kinematic\n                        analysis<br>\n\n                        c. Manufacturing simulation – Manufacturing simulation, Robotic simulation, Plant simulation\n                        Ergonomic simulation, mold-flow analysis</p>\n                    <h3>Value Analysis Value Engineering:</h3>\n                    <p>Oasis can support through a structured approach, various VAVE initiatives of the customer to\n                        optimize weight, cost or part standardization. Oasis has a competent team of engineers with\n                        thorough product, excellent engineering skills and sound manufacturing background to evaluate\n                        VAVE options to deliver value to the customer.</p>\n                    <h3>Virtual Audit:</h3>\n                    <p>Oasis lets you eliminate building expensive prototypes by conducting Virtual Builds, Virtual\n                        Reviews and Landing Studies on the products. Besides validating designs &amp; MBOMS, Oasis\n                        can also generate Work instructions &amp; Visual assembly aids.</p>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/productEng\" routerLinkActive=\"active\">Product\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\">Manufacturing\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/generalEng\" routerLinkActive=\"active\">General\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\">Staffing\n                                Solutions - US</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/heavy-engineering/heavy-engineering.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/heavy-engineering/heavy-engineering.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/heavy-engg.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper list-height\">\n                    <p>Offerings from Oasis for Heavy Engineering Industries mainly pertain to Virtual\n                        Manufacturing, consisting of Virtual reviews, Audits and Virtual builds. Oasis also offers\n                        design of Assembly fixtures, Machining fixtures, Fabrication / welding fixtures, material\n                        handling devices, Transportation devices and dollies. Oasis has the expertise to conduct\n                        Throughput analysis and also Factory Flow analysis of production facility.</p>\n\n                    <p>Virtual Manufacturing Offerings include,</p>\n                    <ul>\n                        <li>Virtual process planning for assembly\n                            <ul>\n                                <li>Virtual audit of new products</li>\n                                <li>Hand tool validation</li>\n                                <li>Assembly ergonomic validation</li>\n                            </ul>\n                        </li>\n                    </ul>\n                    <ul>\n                        <li>Virtual build event / virtual manufacturing :\n                            <ul>\n                                <li>MBOM generation</li>\n                                <li>Detailed validation</li>\n                                <li>Stage-wise detailed validation</li>\n                                <li>Landing study of aggregates</li>\n                                <li>Product build up sequence (Virtual build)</li>\n                                <li>Assembly work instruction sheets &amp; visual aids</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/automotive\" routerLinkActive=\"active\">Automotive</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/aerospace\" routerLinkActive=\"active\">Aerospace</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/heavyEngineering\" routerLinkActive=\"active\">Heavy\n                                Engineering</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home-page/home-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home-page/home-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"headerSlider\" class=\"carousel slide headerTop\" data-ride=\"carousel\">\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#headerSlider\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#headerSlider\" data-slide-to=\"1\"></li>\n    <li data-target=\"#headerSlider\" data-slide-to=\"2\"></li>\n    <li data-target=\"#headerSlider\" data-slide-to=\"3\"></li>\n  </ul>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"../../../assets/images/banner1.jpg\" alt=\"Los Angeles\" width=\"100%\" height=\"ml-auto\">\n      <div class=\"carousel-caption\">\n        <h3>Los Angeles</h3>\n        <p>We had such a great time in LA!</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../../assets/images/banner2.jpg\" alt=\"Chicago\" width=\"100%\" height=\"ml-auto\">\n      <div class=\"carousel-caption\">\n        <h3>Chicago</h3>\n        <p>Thank you, Chicago!</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../../assets/images/banner3.jpg\" alt=\"New York\" width=\"100%\" height=\"ml-auto\">\n      <div class=\"carousel-caption\">\n        <h3>New York</h3>\n        <p>We love the Big Apple!</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../../assets/images/banner4.jpg\" alt=\"New York\" width=\"100%\" height=\"ml-auto\">\n      <div class=\"carousel-caption\">\n        <h3>New York</h3>\n        <p>We love the Big Apple!</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#headerSlider\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#headerSlider\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n\n<div class=\"container\">\n\n  <div class=\"title_align mt-2\">\n    <h3 style=\"font-family:bignoodletitling; color:#0072b9\">WELCOME TO OASIS</h3>\n    <div class=\"line_under\">\n      <div class=\"line_left\"></div>\n      <div class=\"line_center\"></div>\n      <div class=\"line_right\"></div>\n    </div>\n    <p class=\"titleBorder text-center mt-2\">PASSION - PACE - PERFECTION</p>\n  </div>\n\n  <div class=\"row pb-4\">\n    <div class=\"col-sm-6\">\n      <h5><a routerLink=\"/productEng\" routerLinkActive=\"active\">PRODUCT ENGINEERING</a></h5>\n      <p>This engineering discipline encompasses services pertaining to design and development of various automotive\n        products, systems and components. Oasis today has competencies spanning across services that involve product\n        design.</p>\n      <p><a routerLink=\"/productEng\" routerLinkActive=\"active\">Read more...</a></p>\n    </div>\n    <div class=\"col-sm-6\">\n      <h5><a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\">MANUFACTURING ENGINEERING</a></h5>\n      <p>Oasis offers End-to-end manufacturing engineering solutions to customers worldwide. We have executed more\n        than 3 million hours of engineering services projects in the last 3 decades with our exprianced team. </p>\n      <p><a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\">Read more...</a></p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h5><a  routerLink=\"/generalEng\" routerLinkActive=\"active\">GENERAL ENGINEERING</a></h5>\n      <p>In today’s competitive world where the cost of the product, time to market and product quality can make or\n        break businesses, industry leaders are striving to optimize their product costs, shorten the development times\n        .</p>\n      <p><a routerLink=\"/generalEng\" routerLinkActive=\"active\">Read more...</a></p>\n    </div>\n    <div class=\"col-sm-6\">\n      <h5><a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\">STAFFING SOLUTIONS - US </a></h5>\n      <p>Oasis Technologies firmly believes in people and their amazing potential. The company’s success can be\n        directly attributed to its employees and their commitment to quality work. Whether you're looking for a job or\n        seeking to hire, you've come to the right place.</p>\n      <p><a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\">Read more...</a></p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h4>INDUSTIRES CATERED TO</h4>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../../assets/images/automotive.png\" alt=\"Card image cap\">\n        <div class=\"middle\">\n          <div class=\"text\"><a routerLink=\"/automotive\" routerLinkActive=\"active\">READ MORE</a></div>\n        </div>\n      </div>\n      <div class=\"text-center mt-2\">\n        <h5 class=\"card-title\">AUTOMOTIVE</h5>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../../assets/images/aerospace.png\" alt=\"Card image cap\">\n        <div class=\"middle\">\n          <div class=\"text\"><a  routerLink=\"/aerospace\" routerLinkActive=\"active\">READ MORE</a></div>\n        </div>\n      </div>\n      <div class=\"text-center mt-2\">\n        <h5 class=\"card-title\">AEROSPACE</h5>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"../../../assets/images/heavy-engineering.png\" alt=\"Card image cap\">\n        <div class=\"middle\">\n          <div class=\"text\"><a routerLink=\"/heavyEngineering\" routerLinkActive=\"active\">READ MORE</a></div>\n        </div>\n      </div>\n      <div class=\"text-center mt-2\">\n        <h5 class=\"card-title\">HEAVY ENGINEERING</h5>\n      </div>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/manufacturing-eng/manufacturing-eng.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/manufacturing-eng/manufacturing-eng.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/manufacturing-engg.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper\">\n                    <h3>Overview </h3>\n                    <p>Oasis with its acquisition of Ranal’s manufacturing engineering services has imbibed over 2\n                        decades &amp; 2 million hours of expertise in the manufacturing space. Oasis therefore is\n                        now equipped to offer End-to-End manufacturing engineering solutions to customers globally. The\n                        team uses diverse technologies and tools to cater to the requirements of a wide spectrum of\n                        domains like Automotive, Aerospace and Heavy Engineering. </p>\n                    <!--<p>With an experienced team having more than 2 million hours of manufacturing engineering expertise that was developed over last 2 decades, Oasis offers End-to-End manufacturing engineering solutions to customers globally. The team uses diverse technologies and tools to cater to the requirements of a wide spectrum of domains like Automotive, Aerospace and Heavy Engineering.</p>-->\n                    <p>The company is backed by decades of experience in technology areas such as Robotics, Off-line\n                        Programming, Digital Manufacturing, Process Planning and Project Management. This, clubbed with\n                        a proven business model which is fine-tuned while working with a varied range of clients has\n                        enabled Oasis to cater to its customers across America, Europe, Asia and Africa.</p>\n                    <p>The array of Manufacturing Engineering Services offerings includes Measurement strategy &amp;\n                        Dimensional management, Simultaneous Engineering including Process design, Tool &amp; Equipment\n                        design, Plant layout &amp; facility planning, Process &amp; tool validation using various\n                        simulation tools, thus enabling the customers to plan, validate and optimize their production\n                        processes well ahead of start of production. Oasis’s manufacturing engineering expertise is\n                        drawn from its acquisition of Ranal which has been a specialized player in this space with\n                        decades of experience and mix of right skill sets.</p>\n                    <br>\n                    <!--<p><img src=\"images/graph.jpg\"></p>-->\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/productEng\" routerLinkActive=\"active\">Product\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\">Manufacturing\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/generalEng\" routerLinkActive=\"active\">General\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\">Staffing\n                                Solutions - US</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/product-eng/product-eng.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/product-eng/product-eng.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/product-engg.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper\">\n                    <h3>Overview</h3>\n                    <p>This engineering discipline encompasses services pertaining to Concept Generation, Feasibility\n                        Studies, Design and Development for various automotive systems, sub-systems and components.\n                        Oasis today has competencies encompassing the entire development process with the right mix\n                        of skills in design, manufacturability, cost, serviceability, reliability, performance and user\n                        friendliness. The experienced team of Oasis with their in-depth domain knowledge can convert\n                        challenging assignments to tangible ideas.</p>\n                    <p>Oasis through the acquisition of A.E Automotive Elements GmbH, now possesses rich product\n                        engineering experience in upstream processes of product development to execute end-to- end\n                        projects for Automotive OEMs and Tier 1s – especially in the areas of interior &amp; exterior\n                        domains. The combination of German skills and Indian scale will offer enhanced value to clients\n                        globally.</p>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/productEng\" routerLinkActive=\"active\">Product\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\">Manufacturing\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/generalEng\" routerLinkActive=\"active\">General\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\">Staffing\n                                Solutions - US</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/service-request/service-request.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/service-request/service-request.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/contact-us.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div>\n                    <h3>Enquiry Form</h3>\n                    <br>\n                    <div class=\"wpb_wrapper\">\n                        <div class=\"contact_form wpb_content_element\">\n                            <div class=\"row-fluid\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <form method=\"post\" class=\"contactform\" name=\"contact_form\" action=\"/contact-form.php\">\n                                            <input class=\"span12 mb-2 form-control\" type=\"text\" name=\"name\" id=\"exampleInputName\"\n                                                required=\"\" placeholder=\"Name*\">\n                                            <input class=\"span12 mb-2 form-control\" type=\"text\" name=\"email\" id=\"exampleInputEmail\"\n                                                required=\"\" placeholder=\"Email ID*\">\n                                            <input class=\"span12 mb-2 form-control last\" type=\"text\" name=\"contact\" id=\"exampleInputContact\"\n                                                required=\"\" placeholder=\"Contact*\">\n                                            <textarea class=\"mb-2 form-control\" name=\"message\" rows=\"8\" cols=\"30\" id=\"textarea\"\n                                                required=\"\" placeholder=\"Enquiry Details*\"></textarea>\n                                            <p class=\"perspective\">\n                                                <input type=\"submit\" value=\"submit\" name=\"submit\" class=\"btn-default normal default\">\n                                            </p>\n                                        </form>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/address\" routerLinkActive=\"active\">Address</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/serviceRequest\" routerLinkActive=\"active\">Request\n                                for Services</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/staffing-solutions/staffing-solutions.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/staffing-solutions/staffing-solutions.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerTop\">\n    <div>\n        <img src=\"../../../assets/images/staffing-solutions.jpg\" width=\"100%\" height=\"200px\">\n    </div>\n    <div class=\"container\">\n        <div class=\"row mt-4\">\n            <div class=\"col-sm-8\">\n                <div class=\"wpb_wrapper\">\n                    <h3>Overview</h3>\n                    <p>Oasis Technologies firmly believes in people and their amazing potential. The company’s\n                        success can be directly attributed to its employees and their commitment to quality work.\n                        Whether you're looking for a job or seeking to hire, you've come to the right place. </p>\n                    <p>Oasis’s Staffing Solution team has the right expertise in helping companies with the\n                        “Perfect-Match” resource pool within a shortest time frame. This combined with a flexible\n                        business model makes the engagement further more effective for its clients as well as\n                        employees.</p>\n                    <p>The client-focused staffing solutions services span across multiple industries and vertical\n                        markets, such as Automotive, Engineering, Manufacturing and Information Technology.</p>\n\n                    <h3>Why Oasis?</h3>\n                    <p>The staffing solutions business model is structured around development of engineered solutions\n                        to specific customers’ needs. The internal team at Oasis has the right blend of competencies\n                        and predefined processes to locate and qualify candidates to internally set standards before\n                        submitting them to the client. This method has allowed Oasis to consistently present the\n                        right candidate to the right opportunity with greater regularity. </p>\n                    <p>The company’s commitment to quality and excellent reputation has served well for both clients\n                        and its employees. Oasis today, apart from being a core technical engineering services\n                        provider is also recognized as a premier provider of staffing solutions to companies ranging\n                        from Fortune 500 to rapidly growing organizations. Key points to note are </p>\n                    <ul>\n                        <li>\n                            <p>Oasis’s commitment to its clients success</p>\n                        </li>\n                        <li>\n                            <p>Background checks, drug testing, confidentiality, etc. carried out as a standard process</p>\n                        </li>\n                        <li>\n                            <p>Fully committed team with deep industry knowledge and experience that results in a quick\n                                turn around</p>\n                        </li>\n                        <li>\n                            <p>Competitive compensation</p>\n                        </li>\n                        <li>\n                            <p>Full benefit packages</p>\n                        </li>\n                        <li>\n                            <p>Full service staffing portfolio; contract, contract-to-hire, permanent placement</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"span3\">\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\"><a routerLink=\"/productEng\" routerLinkActive=\"active\">Product\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/manufacturingEng\" routerLinkActive=\"active\">Manufacturing\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/generalEng\" routerLinkActive=\"active\">General\n                                Engineering</a></li>\n                        <li class=\"list-group-item\"><a routerLink=\"/staffingSolutions\" routerLinkActive=\"active\">Staffing\n                                Solutions - US</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");




const routes = [
    {
        path: '',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
        data: {
            title: 'Welcome :: Oasis Technologies'
        }
    },
    {
        path: 'aboutUS',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"],
        data: {
            title: 'Oasis | About Us'
        }
    },
    {
        path: 'automotive',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["AutomotiveComponent"],
        data: {
            title: 'Oasis | Automotive'
        }
    },
    {
        path: 'aerospace',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["AerospaceComponent"],
        data: {
            title: 'Oasis | Aerospace'
        }
    },
    {
        path: 'heavyEngineering',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["HeavyEngineeringComponent"],
        data: {
            title: 'Oasis | Heavy Engineering'
        }
    },
    {
        path: 'careers',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["CareersComponent"],
        data: {
            title: 'Oasis | Careers'
        }
    },
    {
        path: 'address',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["AddressComponent"],
        data: {
            title: 'Oasis | Address'
        }
    },
    {
        path: 'serviceRequest',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["ServiceRequestComponent"],
        data: {
            title: 'Oasis | Request For Services'
        }
    },
    {
        path: 'productEng',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["ProductEngComponent"],
        data: {
            title: 'Oasis | Product Engineering'
        }
    },
    {
        path: 'manufacturingEng',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["ManufacturingEngComponent"],
        data: {
            title: 'Oasis | Manufacturing Engineering'
        }
    },
    {
        path: 'generalEng',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["GenralEngComponent"],
        data: {
            title: 'Oasis | General Engineering'
        }
    },
    {
        path: 'staffingSolutions',
        component: _component__WEBPACK_IMPORTED_MODULE_3__["StaffingSolutionsComponent"],
        data: {
            title: 'Oasis | Staffing Solutions - US'
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixexHeight {\n  background: #fff !important;\n  border-bottom: #EFEFEF solid 1px !important;\n}\n\n.navbar-expand-lg .navbar-nav {\n  font-weight: 700;\n  font-size: smaller;\n}\n\n.dropdown-item {\n  font-size: smaller;\n  font-weight: 500;\n}\n\n.footerBgColor {\n  background: #2e2e2e;\n}\n\n.thin_line {\n  height: 1px;\n  float: left;\n  position: relative;\n  width: 100%;\n  margin-top: -31px;\n  background: #999;\n}\n\nh6 {\n  margin-bottom: 20px;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 15px;\n  padding-right: 20px;\n  position: relative;\n  float: left;\n  z-index: 99999;\n  background: #2e2e2e;\n}\n\n.customFloat {\n  float: left;\n}\n\n.copyRight {\n  background: #272727;\n  color: #999;\n}\n\nfooter .tagcloud a, footer .tabbable .nav-tabs li, footer .tabbable .nav-tabs li {\n  background: #272727;\n}\n\nfooter a {\n  color: inherit;\n  text-decoration: none;\n}\n\nfooter .tagcloud a:hover, .footer_social_bar, .blog-article dt .date.box, #portfolio-filter ul li.active, #faq-filter ul li:hover, #faq-filter ul li.active, #portfolio-filter ul li:hover, .portfolio-item .link:hover {\n  background: #009dcd;\n}\n\nfooter .tagcloud a {\n  color: inherit;\n  padding: 8px 10px;\n  font-size: 11px !important;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  float: left;\n  color: #ccc;\n}\n\n.tagcloud {\n  width: 100%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXG9hc2lzX3NlcnZpY2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksbUJBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGV4SGVpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI0VGRUZFRiBzb2xpZCAxcHghaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLy8gZm9vdGVyXHJcbi5mb290ZXJCZ0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZTJlMmU7XHJcbn1cclxuLnRoaW5fbGluZSB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzFweDtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbn1cclxuaDYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgYmFja2dyb3VuZDogIzJlMmUyZTtcclxufVxyXG4uY3VzdG9tRmxvYXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNvcHlSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmZvb3RlciAudGFnY2xvdWQgYSwgZm9vdGVyIC50YWJiYWJsZSAubmF2LXRhYnMgbGksIGZvb3RlciAudGFiYmFibGUgLm5hdi10YWJzIGxpIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbn1cclxuZm9vdGVyIGEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuZm9vdGVyIC50YWdjbG91ZCBhOmhvdmVyLCAuZm9vdGVyX3NvY2lhbF9iYXIsIC5ibG9nLWFydGljbGUgZHQgLmRhdGUuYm94LCAjcG9ydGZvbGlvLWZpbHRlciB1bCBsaS5hY3RpdmUsICNmYXEtZmlsdGVyIHVsIGxpOmhvdmVyLCAjZmFxLWZpbHRlciB1bCBsaS5hY3RpdmUsICNwb3J0Zm9saW8tZmlsdGVyIHVsIGxpOmhvdmVyLCAucG9ydGZvbGlvLWl0ZW0gLmxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwOWRjZDtcclxufVxyXG5mb290ZXIgLnRhZ2Nsb3VkIGEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG59XHJcbi50YWdjbG91ZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59IiwiLmZpeGV4SGVpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAjRUZFRkVGIHNvbGlkIDFweCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb290ZXJCZ0NvbG9yIHtcbiAgYmFja2dyb3VuZDogIzJlMmUyZTtcbn1cblxuLnRoaW5fbGluZSB7XG4gIGhlaWdodDogMXB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTMxcHg7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG59XG5cbmg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmU7XG59XG5cbi5jdXN0b21GbG9hdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29weVJpZ2h0IHtcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcbiAgY29sb3I6ICM5OTk7XG59XG5cbmZvb3RlciAudGFnY2xvdWQgYSwgZm9vdGVyIC50YWJiYWJsZSAubmF2LXRhYnMgbGksIGZvb3RlciAudGFiYmFibGUgLm5hdi10YWJzIGxpIHtcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcbn1cblxuZm9vdGVyIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5mb290ZXIgLnRhZ2Nsb3VkIGE6aG92ZXIsIC5mb290ZXJfc29jaWFsX2JhciwgLmJsb2ctYXJ0aWNsZSBkdCAuZGF0ZS5ib3gsICNwb3J0Zm9saW8tZmlsdGVyIHVsIGxpLmFjdGl2ZSwgI2ZhcS1maWx0ZXIgdWwgbGk6aG92ZXIsICNmYXEtZmlsdGVyIHVsIGxpLmFjdGl2ZSwgI3BvcnRmb2xpby1maWx0ZXIgdWwgbGk6aG92ZXIsIC5wb3J0Zm9saW8taXRlbSAubGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDlkY2Q7XG59XG5cbmZvb3RlciAudGFnY2xvdWQgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2NjYztcbn1cblxuLnRhZ2Nsb3VkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AppComponent = class AppComponent {
    constructor(router, title, activatedRoute) {
        this.router = router;
        this.title = title;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.router.events
            .filter((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])
            .map(() => this.activatedRoute)
            .map((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .subscribe((event) => {
            window.scrollTo(0, 0);
            this.title.setTitle(event.title);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_go_top_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-go-top-button */ "./node_modules/ng2-go-top-button/dist/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ng2_go_top_button__WEBPACK_IMPORTED_MODULE_3__["GoTopButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["AutomotiveComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["AerospaceComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["HeavyEngineeringComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["CareersComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["AddressComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["ServiceRequestComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["ProductEngComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["ManufacturingEngComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["GenralEngComponent"],
            _component__WEBPACK_IMPORTED_MODULE_8__["StaffingSolutionsComponent"]
        ],
        providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/about-us/about-us.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/about-us/about-us.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/about-us/about-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/about-us/about-us.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.scss */ "./src/app/component/about-us/about-us.component.scss")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/component/address/address.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/address/address.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".videoWrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  /* 16:9 */\n  padding-top: 25px;\n  height: 0;\n}\n\n.videoWrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkZHJlc3MvRTpcXG9hc2lzX3NlcnZpY2Uvc3JjXFxhcHBcXGNvbXBvbmVudFxcYWRkcmVzc1xcYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFBd0IsU0FBQTtFQUN4QixpQkFBQTtFQUNBLFNBQUE7QUNFRDs7QURBQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlb1dyYXBwZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiAxNjo5ICovXHJcblx0cGFkZGluZy10b3A6IDI1cHg7XHJcblx0aGVpZ2h0OiAwO1xyXG59XHJcbi52aWRlb1dyYXBwZXIgaWZyYW1lIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59IiwiLnZpZGVvV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgLyogMTY6OSAqL1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4udmlkZW9XcmFwcGVyIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/address/address.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/address/address.component.ts ***!
  \********************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddressComponent = class AddressComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/address/address.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address.component.scss */ "./src/app/component/address/address.component.scss")).default]
    })
], AddressComponent);



/***/ }),

/***/ "./src/app/component/aerospace/aerospace.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/aerospace/aerospace.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZXJvc3BhY2UvYWVyb3NwYWNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/aerospace/aerospace.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/aerospace/aerospace.component.ts ***!
  \************************************************************/
/*! exports provided: AerospaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerospaceComponent", function() { return AerospaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AerospaceComponent = class AerospaceComponent {
    constructor() { }
    ngOnInit() {
    }
};
AerospaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aerospace',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aerospace.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/aerospace/aerospace.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aerospace.component.scss */ "./src/app/component/aerospace/aerospace.component.scss")).default]
    })
], AerospaceComponent);



/***/ }),

/***/ "./src/app/component/automotive/automotive.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/automotive/automotive.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hdXRvbW90aXZlL2F1dG9tb3RpdmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/automotive/automotive.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/automotive/automotive.component.ts ***!
  \**************************************************************/
/*! exports provided: AutomotiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomotiveComponent", function() { return AutomotiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutomotiveComponent = class AutomotiveComponent {
    constructor() { }
    ngOnInit() {
    }
};
AutomotiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-automotive',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./automotive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/automotive/automotive.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./automotive.component.scss */ "./src/app/component/automotive/automotive.component.scss")).default]
    })
], AutomotiveComponent);



/***/ }),

/***/ "./src/app/component/careers/careers.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/careers/careers.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYXJlZXJzL2NhcmVlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/careers/careers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/careers/careers.component.ts ***!
  \********************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CareersComponent = class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
};
CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-careers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/careers/careers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./careers.component.scss */ "./src/app/component/careers/careers.component.scss")).default]
    })
], CareersComponent);



/***/ }),

/***/ "./src/app/component/genral-eng/genral-eng.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/genral-eng/genral-eng.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9nZW5yYWwtZW5nL2dlbnJhbC1lbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/genral-eng/genral-eng.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/genral-eng/genral-eng.component.ts ***!
  \**************************************************************/
/*! exports provided: GenralEngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenralEngComponent", function() { return GenralEngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GenralEngComponent = class GenralEngComponent {
    constructor() { }
    ngOnInit() {
    }
};
GenralEngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-genral-eng',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./genral-eng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/genral-eng/genral-eng.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./genral-eng.component.scss */ "./src/app/component/genral-eng/genral-eng.component.scss")).default]
    })
], GenralEngComponent);



/***/ }),

/***/ "./src/app/component/heavy-engineering/heavy-engineering.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/heavy-engineering/heavy-engineering.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-nav {\n  float: left;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 0px;\n  border-radius: 7px;\n  -moz-border-radius: 7px;\n  -webkit-border-radius: 7px;\n  -o-border-radius: 7px;\n}\n\n.side-nav li.current_page_item {\n  font-weight: 300;\n  background-position: 195px center;\n  background-repeat: no-repeat;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n\n.side-nav .page_item {\n  position: relative;\n}\n\n.side-nav > ul > li {\n  padding-left: 20px;\n}\n\n.side-nav li {\n  border-bottom: 1px solid #ededed;\n}\n\n.side-nav li {\n  padding-top: 15px;\n  font-weight: 600;\n  padding-bottom: 15px;\n  font-size: 14px;\n  background: #fff;\n}\n\n.side-nav li {\n  box-sizing: border-box;\n}\n\n.side-nav .page_item {\n  position: relative;\n}\n\n.side-nav > ul > li {\n  padding-left: 20px;\n}\n\n.side-nav li {\n  border-bottom: 1px solid #ededed;\n}\n\n.side-nav li {\n  padding-top: 15px;\n  font-weight: 600;\n  padding-bottom: 15px;\n  font-size: 14px;\n  background: #fff;\n}\n\n.side-nav li {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYXZ5LWVuZ2luZWVyaW5nL0U6XFxvYXNpc19zZXJ2aWNlL3NyY1xcYXBwXFxjb21wb25lbnRcXGhlYXZ5LWVuZ2luZWVyaW5nXFxoZWF2eS1lbmdpbmVlcmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2hlYXZ5LWVuZ2luZWVyaW5nL2hlYXZ5LWVuZ2luZWVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGdDQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUdJLHNCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGdDQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUdJLHNCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaGVhdnktZW5naW5lZXJpbmcvaGVhdnktZW5naW5lZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1uYXYge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uc2lkZS1uYXYgbGkuY3VycmVudF9wYWdlX2l0ZW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE5NXB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgLnBhZ2VfaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiA+IHVsID4gbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiBsaSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiBsaSB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgLnBhZ2VfaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiA+IHVsID4gbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiBsaSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5zaWRlLW5hdiBsaSB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59IiwiLnNpZGUtbmF2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNpZGUtbmF2IGxpLmN1cnJlbnRfcGFnZV9pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTk1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG59XG5cbi5zaWRlLW5hdiAucGFnZV9pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZS1uYXYgPiB1bCA+IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc2lkZS1uYXYgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbn1cblxuLnNpZGUtbmF2IGxpIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zaWRlLW5hdiBsaSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2lkZS1uYXYgLnBhZ2VfaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGUtbmF2ID4gdWwgPiBsaSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNpZGUtbmF2IGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi5zaWRlLW5hdiBsaSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc2lkZS1uYXYgbGkge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/heavy-engineering/heavy-engineering.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/heavy-engineering/heavy-engineering.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeavyEngineeringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeavyEngineeringComponent", function() { return HeavyEngineeringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeavyEngineeringComponent = class HeavyEngineeringComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeavyEngineeringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heavy-engineering',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heavy-engineering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/heavy-engineering/heavy-engineering.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heavy-engineering.component.scss */ "./src/app/component/heavy-engineering/heavy-engineering.component.scss")).default]
    })
], HeavyEngineeringComponent);



/***/ }),

/***/ "./src/app/component/home-page/home-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/home-page/home-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".line_under {\n  padding-top: 2px;\n  padding-bottom: 8px;\n}\n\n.line_under .line_left, .line_under .line_right, .line_under_full .line_full:after {\n  background: #ededed;\n}\n\n.line_under .line_left {\n  height: 1px;\n  width: 52px;\n  position: relative;\n  float: left;\n  left: 50%;\n  margin-left: -53px;\n  margin-top: 3px;\n}\n\n.line_under .line_center {\n  background: #009dcd;\n}\n\n.line_under .line_center {\n  height: 8px;\n  width: 8px;\n  -web-kit-border-radius: 50%;\n  border-radius: 50%;\n  left: 50%;\n  position: absolute;\n}\n\n.line_under .line_left, .line_under .line_right, .line_under_full .line_full:after {\n  background: #ededed;\n}\n\n.line_under .line_right {\n  height: 1px;\n  width: 52px;\n  position: relative;\n  float: right;\n  right: 50%;\n  margin-right: -60px;\n  margin-top: 3px;\n}\n\n.title_align {\n  text-align: center;\n  border: none;\n  font-weight: normal;\n  letter-spacing: 0px;\n}\n\n.carousel-control-prev {\n  opacity: 0;\n  left: 0;\n  margin: auto;\n  height: 50px;\n  border: 2px solid white;\n  width: 50px;\n  border-radius: 30px;\n  margin-left: 15px;\n}\n\n.carousel-control-next {\n  opacity: 0;\n  left: 0;\n  margin: auto;\n  height: 50px;\n  border: 2px solid white;\n  width: 50px;\n  border-radius: 30px;\n  margin-right: 15px;\n}\n\n.carousel:hover .carousel-control-next {\n  opacity: 1 !important;\n}\n\n.carousel:hover .carousel-control-prev {\n  opacity: 1 !important;\n}\n\n.carousel-control-next:hover {\n  background: #009dcd;\n  border: 2px solid #009dcd;\n}\n\n.carousel-control-prev:hover {\n  background: #009dcd;\n  border: 2px solid #009dcd;\n}\n\n.titleBorder {\n  border-bottom: 1px solid #ece7e7;\n  padding-bottom: 10px;\n}\n\np a {\n  text-align: right;\n  color: #f79633;\n}\n\na {\n  color: #666;\n}\n\n.card {\n  background: black;\n  border: 1px solid white;\n}\n\n.card img {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle {\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.card:hover img {\n  opacity: 0.3;\n}\n\n.card:hover .middle {\n  opacity: 1;\n}\n\n.text a {\n  border: 1px solid white;\n  color: white;\n  font-size: 16px;\n  padding: 4px 8px;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.text a:hover {\n  background: #009dcd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUtcGFnZS9FOlxcb2FzaXNfc2VydmljZS9zcmNcXGFwcFxcY29tcG9uZW50XFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUdBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDSSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FKOztBRE5BO0VBQ0ksVUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QUROSTtFQUNJLHFCQUFBO0FDU1I7O0FEUEk7RUFDSSxxQkFBQTtBQ1NSOztBRE5BO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ1VKOztBRFJBO0VBQ0ksZ0NBQUE7RUFDQSxvQkFBQTtBQ1dKOztBRFRDO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSxXQUFBO0FDYUo7O0FEVkE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FDYUo7O0FEVkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNhSjs7QURWRTtFQUNFLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDYUo7O0FEVkU7RUFDRSxZQUFBO0FDYUo7O0FEVkU7RUFDRSxVQUFBO0FDYUo7O0FEVkU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNhSjs7QURYRTtFQUNFLG1CQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lX3VuZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5saW5lX3VuZGVyIC5saW5lX2xlZnQsIC5saW5lX3VuZGVyIC5saW5lX3JpZ2h0LCAubGluZV91bmRlcl9mdWxsIC5saW5lX2Z1bGw6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxufVxyXG5cclxuLmxpbmVfdW5kZXIgLmxpbmVfbGVmdCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmxpbmVfdW5kZXIgLmxpbmVfY2VudGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDlkY2Q7XHJcbn1cclxuLmxpbmVfdW5kZXIgLmxpbmVfY2VudGVyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIC13ZWIta2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5saW5lX3VuZGVyIC5saW5lX2xlZnQsIC5saW5lX3VuZGVyIC5saW5lX3JpZ2h0LCAubGluZV91bmRlcl9mdWxsIC5saW5lX2Z1bGw6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxufVxyXG4ubGluZV91bmRlciAubGluZV9yaWdodCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnRpdGxlX2FsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uY2Fyb3VzZWw6aG92ZXIge1xyXG4gICAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcclxuICAgICAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gICAgICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwOWRjZDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDlkY2Q7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMwMDlkY2Q7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA5ZGNkO1xyXG59XHJcbi50aXRsZUJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZTdlNztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiBwIGEge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2Y3OTYzMztcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1pZGRsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciAubWlkZGxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0IGEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAudGV4dCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDlkY2Q7XHJcbiAgfSIsIi5saW5lX3VuZGVyIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmxpbmVfdW5kZXIgLmxpbmVfbGVmdCwgLmxpbmVfdW5kZXIgLmxpbmVfcmlnaHQsIC5saW5lX3VuZGVyX2Z1bGwgLmxpbmVfZnVsbDphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5cbi5saW5lX3VuZGVyIC5saW5lX2xlZnQge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDUycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01M3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5saW5lX3VuZGVyIC5saW5lX2NlbnRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDlkY2Q7XG59XG5cbi5saW5lX3VuZGVyIC5saW5lX2NlbnRlciB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICAtd2ViLWtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5saW5lX3VuZGVyIC5saW5lX2xlZnQsIC5saW5lX3VuZGVyIC5saW5lX3JpZ2h0LCAubGluZV91bmRlcl9mdWxsIC5saW5lX2Z1bGw6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuXG4ubGluZV91bmRlciAubGluZV9yaWdodCB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTYwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnRpdGxlX2FsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBvcGFjaXR5OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIG9wYWNpdHk6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNhcm91c2VsOmhvdmVyIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uY2Fyb3VzZWw6aG92ZXIgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDlkY2Q7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDlkY2Q7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA5ZGNkO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA5ZGNkO1xufVxuXG4udGl0bGVCb3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZTdlNztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbnAgYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2Y3OTYzMztcbn1cblxuYSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNhcmQgaW1nIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQ6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY2FyZDpob3ZlciAubWlkZGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRleHQgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA5ZGNkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/home-page/home-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/home-page/home-page.component.ts ***!
  \************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/component/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! exports provided: HomePageComponent, AboutUsComponent, AutomotiveComponent, AerospaceComponent, HeavyEngineeringComponent, CareersComponent, AddressComponent, ServiceRequestComponent, ProductEngComponent, ManufacturingEngComponent, GenralEngComponent, StaffingSolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/component/home-page/home-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]; });

/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/component/about-us/about-us.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]; });

/* harmony import */ var _automotive_automotive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./automotive/automotive.component */ "./src/app/component/automotive/automotive.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutomotiveComponent", function() { return _automotive_automotive_component__WEBPACK_IMPORTED_MODULE_3__["AutomotiveComponent"]; });

/* harmony import */ var _aerospace_aerospace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aerospace/aerospace.component */ "./src/app/component/aerospace/aerospace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AerospaceComponent", function() { return _aerospace_aerospace_component__WEBPACK_IMPORTED_MODULE_4__["AerospaceComponent"]; });

/* harmony import */ var _heavy_engineering_heavy_engineering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heavy-engineering/heavy-engineering.component */ "./src/app/component/heavy-engineering/heavy-engineering.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeavyEngineeringComponent", function() { return _heavy_engineering_heavy_engineering_component__WEBPACK_IMPORTED_MODULE_5__["HeavyEngineeringComponent"]; });

/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/component/careers/careers.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return _careers_careers_component__WEBPACK_IMPORTED_MODULE_6__["CareersComponent"]; });

/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address/address.component */ "./src/app/component/address/address.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return _address_address_component__WEBPACK_IMPORTED_MODULE_7__["AddressComponent"]; });

/* harmony import */ var _service_request_service_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-request/service-request.component */ "./src/app/component/service-request/service-request.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceRequestComponent", function() { return _service_request_service_request_component__WEBPACK_IMPORTED_MODULE_8__["ServiceRequestComponent"]; });

/* harmony import */ var _product_eng_product_eng_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-eng/product-eng.component */ "./src/app/component/product-eng/product-eng.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductEngComponent", function() { return _product_eng_product_eng_component__WEBPACK_IMPORTED_MODULE_9__["ProductEngComponent"]; });

/* harmony import */ var _manufacturing_eng_manufacturing_eng_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manufacturing-eng/manufacturing-eng.component */ "./src/app/component/manufacturing-eng/manufacturing-eng.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManufacturingEngComponent", function() { return _manufacturing_eng_manufacturing_eng_component__WEBPACK_IMPORTED_MODULE_10__["ManufacturingEngComponent"]; });

/* harmony import */ var _genral_eng_genral_eng_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./genral-eng/genral-eng.component */ "./src/app/component/genral-eng/genral-eng.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenralEngComponent", function() { return _genral_eng_genral_eng_component__WEBPACK_IMPORTED_MODULE_11__["GenralEngComponent"]; });

/* harmony import */ var _staffing_solutions_staffing_solutions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./staffing-solutions/staffing-solutions.component */ "./src/app/component/staffing-solutions/staffing-solutions.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffingSolutionsComponent", function() { return _staffing_solutions_staffing_solutions_component__WEBPACK_IMPORTED_MODULE_12__["StaffingSolutionsComponent"]; });
















/***/ }),

/***/ "./src/app/component/manufacturing-eng/manufacturing-eng.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/manufacturing-eng/manufacturing-eng.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW51ZmFjdHVyaW5nLWVuZy9tYW51ZmFjdHVyaW5nLWVuZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/manufacturing-eng/manufacturing-eng.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/manufacturing-eng/manufacturing-eng.component.ts ***!
  \****************************************************************************/
/*! exports provided: ManufacturingEngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturingEngComponent", function() { return ManufacturingEngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManufacturingEngComponent = class ManufacturingEngComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManufacturingEngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manufacturing-eng',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manufacturing-eng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/manufacturing-eng/manufacturing-eng.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manufacturing-eng.component.scss */ "./src/app/component/manufacturing-eng/manufacturing-eng.component.scss")).default]
    })
], ManufacturingEngComponent);



/***/ }),

/***/ "./src/app/component/product-eng/product-eng.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/product-eng/product-eng.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9kdWN0LWVuZy9wcm9kdWN0LWVuZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/product-eng/product-eng.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/product-eng/product-eng.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductEngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEngComponent", function() { return ProductEngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductEngComponent = class ProductEngComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductEngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-eng',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-eng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/product-eng/product-eng.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-eng.component.scss */ "./src/app/component/product-eng/product-eng.component.scss")).default]
    })
], ProductEngComponent);



/***/ }),

/***/ "./src/app/component/service-request/service-request.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/service-request/service-request.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZXJ2aWNlLXJlcXVlc3Qvc2VydmljZS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/service-request/service-request.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/service-request/service-request.component.ts ***!
  \************************************************************************/
/*! exports provided: ServiceRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRequestComponent", function() { return ServiceRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceRequestComponent = class ServiceRequestComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/service-request/service-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-request.component.scss */ "./src/app/component/service-request/service-request.component.scss")).default]
    })
], ServiceRequestComponent);



/***/ }),

/***/ "./src/app/component/staffing-solutions/staffing-solutions.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/component/staffing-solutions/staffing-solutions.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdGFmZmluZy1zb2x1dGlvbnMvc3RhZmZpbmctc29sdXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/staffing-solutions/staffing-solutions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/staffing-solutions/staffing-solutions.component.ts ***!
  \******************************************************************************/
/*! exports provided: StaffingSolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffingSolutionsComponent", function() { return StaffingSolutionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StaffingSolutionsComponent = class StaffingSolutionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaffingSolutionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffing-solutions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staffing-solutions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/staffing-solutions/staffing-solutions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staffing-solutions.component.scss */ "./src/app/component/staffing-solutions/staffing-solutions.component.scss")).default]
    })
], StaffingSolutionsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\oasis_service\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map