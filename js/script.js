// for events, create a constructor function that takes objects and callbacks
// that handle the different function properties as an event.
//(function() {
  // ---------------------------- PROJECT SCOPE VARIABLES --------------------- */
  // create a modal object to hold property and animation properties
  var modal = {
    time_open_bckgd: 400,
    time_open_window: 600,
    time_closed: 300,
    contentLink: -4
  };

  var swProject = {
    title: "Southwest Roadtrip",
    content: "A project that features big, bold retina pictures from a road trip I took with my wife in the fall of 2014. This project features a responsive gallery slider. The Southwest Roadtrip project is hand coded from the ground up, using javascript and utilizing the jQuery javascript library. Mobile touch events handled using the jQuery mobile framework.",
    tools: ["html", "css", "javascript", "next"],
    browsers: ["Chrome 44/Mac OS X 10.10", "Firefox 39/Mac OS X 10.10", "Safari 8/Mac OS X 10.10", "IE 11/Win 8.1"],
    links: ["http://www.brianwynndesign.com/southwest/", "https://github.com/bwynn/southwest"]
  };

  var ndProject = {
    title: "Norgren Design",
    content: "A scalable portfolio site built for a Mechanical Engineering venture by Erik Norgren. Erik is recruiting for his design firm, and wanted the ability to engage potential business partners using a connect feature. The page's content is being propagated using json, which is being passed down into a single page application built using javascript and jquery. Erik is a good friend of mine, and he wants the ability to add features to the site, so I've set this project up with easy updating via feature modules. This site is fully responsive.",
    tools: ["html", "css", "javascript/jquery", "uriAnchor"],
    browsers: ["Chrome 44/Mac OS X 10.10", "Firefox 39/Mac OS X 10.10", "Safari 8/Mac OS X 10.10", "IE 11/Win 8.1"],
    links: ["http://www.norgrendesign.com", "https://github.com/bwynn/norgren-design"]
  };

  var wavesProject = {
    title: "Waves",
    content: "An ongoing personal project, this single page application gathers weather data from the WorldWeatherOnline API and passes it into the page. You can check the waves at 3 of the most consistent waves in California, as well as your current weather conditions, using a zip code input, all with live data being pulled. This site features include a css flexible box layout, AJAX calls to the WWO API, content retrieval from a json data file, and dom generation based on object information.",
    tools: ["html", "css", "javascript/jquery", "json", "AJAX"],
    browsers: ["Chrome 44", "Firefox 39", "Safari 8", "IE11"],
    links: ["http://www.brianwynndesign.com/waves/", "https://github.com/bwynn/waves_js/"]
  };

  var sandboxProject = {
    title: "Sandbox",
    content: "A working development sandbox featuring smaller projects. The Memory Game is a basic memory game written in vanilla javascript. The Gear Inch Calculator uses Twitter's Bootstrap css framework, and is written using javascript and the jQuery library. Flexible Layout is a template project using css3's flexbox, I'm big into responsive design and the power that flexbox offers over traditional floats and relative widths makes for quick and easy layouts, using minimal code. The Style Library is a css library that I've been working on, using a grid-template similar to Bootstrap. I'm using this library on some of my upcoming projects, but a sneak peek can be seen here.",
    tools: ["html", "css", "javascript/jQuery", "bootstrap"],
    browsers: ["Chrome 44", "Firefox 39", "Safari 8"],
    links: ["http://www.brianwynndesign.com/sandbox/", "https://github.com/bwynn/sandbox/"]
  };

  // create an element map object to hold all values within the page.
  var elem = {
    html: $("html"),
    body: $("body"),
    listItem: $("li"),
    projectLinks: $(".prt-shell-nav > div"),
    projectHeader: $(".prt-shell-nav > div > h1"),
    modalBackground: $(".modal-background"),
    prtShellModal: $(".prt-shell-modal"),
    closeButton: $("#closeBtn"),
    mobileClose: $("#mobileClose"),
    modalWindow: $(".prt-shell-modal"),
    modalTitle: $(".modal-header"),
    modalCopy: $(".modal-copy"),
    modalTools: $(".tools li"),
    modalBrowsers: $(".browsers li"),
    modalLinks: $(".project-links li")
  };
  // ------------------------- END PROJECT SCOPE VARIABLES -------------------- */

  // ------------------------- BEGIN UTILITY METHODS -------------------------- */
  var scrollToTop = function( obj ) {
    // scroll to top of page
    obj.scrollTop(0);
    // firefox & ie fix
    elem.html.animate({ scrollTop: 0 });
  };

  // ------------------------- END UTILITY METHODS ---------------------------- */

  // ------------------------- BEGIN DOM METHODS ------------------------------ */
  var modalBuilder = function( obj ) {
    var obj;
    elem.modalTitle.text(obj.title);
    elem.modalCopy.text(obj.content);

    // loop through each iteration of list items
    elem.modalTools.each(function(i) {
      $(this).text(obj.tools[i]);
    });
    // loop through all browsers
    elem.modalBrowsers.each(function(i) {
      $(this).text(obj.browsers[i]);
    });
    elem.modalLinks.each(function(i) {
      var anchor = $(this).children();

      anchor.attr("href", obj.links[i]);
    });
  };

  var projectSwitcher = function( elem ) {
    switch ( elem.attr("class") ) {
      case "prt-shell-prj-1":
        // Modal content propagation
        modalBuilder(wavesProject);
        break;
      case "prt-shell-prj-2":
        modalBuilder(ndProject);
        break;
      case "prt-shell-prj-3":
        modalBuilder(swProject);
        break;
      case "prt-shell-prj-4":
        modalBuilder(sandboxProject);
        break;
    }
  };
  // ------------------------- END DOM METHODS -------------------------------- */

  // ------------------------- BEGIN EVENT HANDLERS --------------------------- */

  // This function displays the modal window when a project tile has been clicked on
  var showModalEvent = function(obj1, obj2, obj3, obj4) {
    obj1.on("click", function() {
      // initialize the modal window's content
      projectSwitcher( $(this) );
      // initialize scrollToTop method
      scrollToTop( obj2 );
      obj4.fadeIn(modal.time_open_window);
      obj3.fadeIn(modal.time_open_bckgd, function(){
        obj3.css("opacity", 0.85);
      });
    });
  };

  // The closeModalEvent function returns the element displays to their initial
  // state, using the fadeOut jquery method to provide a fade, at which point
  // changing the 2nd object's styles to their previous state.
  var closeModalEvent = function(obj1, obj2, obj3) {
    obj1.on("click", function() {
      obj2.fadeOut(modal.time_closed, function(){
        obj2.hide();
        obj2.css("opacity", "1");
      });
      obj3.fadeOut(modal.time_closed, function() {
        obj3.hide();
        obj2.css("opacity", "1");
      });
    });
  };

  // ------------------------- END EVENT HANDLERS ----------------------------- */

  // ------------------------- BEGIN CALLBACKS -------------------------------- */
  // ------------------------- END CALLBACKS ---------------------------------- */

  // ------------------------- BEGIN PUBLIC METHODS --------------------------- */
  var initModule = function() {

    // Modal display initialization
    showModalEvent(elem.projectLinks, elem.body, elem.modalBackground, elem.prtShellModal);

    // close methods
    closeModalEvent(elem.closeButton, elem.modalBackground, elem.modalWindow);
    closeModalEvent(elem.mobileClose, elem.modalBackground, elem.modalWindow);
    closeModalEvent(elem.modalBackground, elem.modalBackground, elem.modalWindow);
  };
  // ------------------------- END PUBLIC METHODS ----------------------------- */

  initModule();
  //return initModule();
//}());
