var work = {
    "jobs": [{
        "employer": "University of Central Florida",
        "title": "Peer Tutor",
        "location": "Orlando, FL",
        "dates": "January 2015 - Present",
        "description": "- Attended workshops monthly to enhance acquired tutoring skills and learn new techniques.<br>- Provided effective study skills for students in a series of weekly study sessions.<br>- Established connections between abstract concepts and concrete real-world applications.<br>- Networked with other students and tutors daily to build rapport and to gain insight on different tutoring techniques."
    }, {
        "employer": "University of Central Florida",
        "title": "Undergraduate Teaching Assistant",
        "location": "Orlando, FL",
        "dates": "January 2016 - May 2016",
        "description": "- Met with the course professor weekly to discuss upcoming course material and class agenda.<br>- Assisted students with programming questions and concerns.<br>- Provided rapid feedback on assignment submissions to clarify pitfalls and ambiguities.<br>- Attended the course lecture to assist with the distribution of course material"
    }, {
        "employer": "University of Central Florida",
        "title": "Supplemental Instruction Leader",
        "location": "Orlando, FL",
        "dates": "January 2015 - June 2015",
        "description": "- Attended weekly meetings to discuss responsibilities and SI events.<br>- Attended lecture twice a week to be kept up to date on course material.<br>- Hosted four SI sessions per week to provide assistance with course material for students.<br>- Met with the lecture professor weekly to gain input on student tendencies."
    }, {
        "employer": "Palm Beach State College",
        "title": " OPS Professional",
        "location": "Lake Worth, FL",
        "dates": "August 2013 - June 2014",
        "description": "- Obtained College Reading and Learning Association (CRLA) Level III tutor certification.<br>- Scheduled appointments with students to receive help from tutors.<br>- Served as an ambassador to inform the college community about tutoring benefits.<br>- Responsible for upholding the goals and standards of the college and being a role model for students"
    }]
};

var projects = {
    "projects": [{
        "title": "College Event Website",
        "dates": "May 2016 - Present",
        "description": "A website that allows users to view/create events pertaining to the college/university of the student(s).<br>Login and authentication enforced by Joomla to provide users with the proper ability to view and create events. Database created by MySQL Workbench to store and manage information regarding the access level of users, the events, and the participating universities. PHP and JavaScript used for providing users with a dynamic, on-the-spot updating, user experience.",
        "images": [
            "images/collegeevent.jpg"
        ]
    }, {
        "title": "Boggle",
        "dates": "May 2015 - August 2015",
        "description": "An application that models the popular board game Boggle using Java.<br>The application features a graphical user interface which shows the board of sixteen dice, a panel that shows the words that user has found, a timer to keep track of the time remaining, and a panel that shows the current word being constructed among the various other features of the application.",
        "images": [
            "images/boggle.jpg"
        ]
    }]
};

skill = ["HTML", "CSS", "JavaScript", "C", "Java", "Tutoring", "Music Performace"];

var bio = {
    "name": "Ruben Vazquez",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "vazquezr@knights.ucf.edu",
        "github": "vazquezjr",
        "location": "Orlando, FL"
    },
    "welcomeMessage": "Welcome to my online resume page!",
    "skills": skill,
    "biopic": "images/mypic.jpg"
};

var education = {
    "schools": [{
        "name": "University of Central Florida",
        "location": "Orlando, FL",
        "degree": "Bachelor's in Science",
        "majors": [
            "Computer Engineering"
        ],
        "dates": "August 2014 - May 2017",
        "url": "",
    }, {
        "name": "Palm Beach State College",
        "location": "Lake Worth, FL",
        "degree": "Associate in Arts",
        "majors": [
            "Computer Engineering"
        ],
        "dates": "August 2010 - May 2014",
        "url": "",
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "June 2016 - September 2016",
        "url": "udacity.com"
    }]
};

/* $(document).click(function(loc) {
	
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x, y);
	
}); */

work.display = function() {

    var workStartString;
    var workEmployerString;
    var workTitleString;
    var workDatesString;
    var workLocationString;
    var workDescriptionString;

    for (var i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);
        workEmployerString = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        workTitleString = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        workLocationString = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        workDatesString = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        workDescriptionString = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(workEmployerString + workTitleString);
        $(".work-entry:last").append(workLocationString);
        $(".work-entry:last").append(workDatesString);
        $(".work-entry:last").append(workDescriptionString);

    }
};

projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {

        $("#projects").append(HTMLprojectStart);
        var projectTitleString = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(projectTitleString);
        var projectDatesString = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(projectDatesString);
        var projectDescriptionString = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(projectDescriptionString);
        for (var j = 0; j < projects.projects[i].images.length; j++) {

            var projectImageString = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(projectImageString);

        }

    }

};

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#header").append(HTMLskillsStart);

    var strToRep;

    for (var i = 0; i < bio.skills.length; i++) {
        strToRep = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(strToRep);
    }
};

education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));

        for (var j = 0; j < education.schools[i].majors.length; j++) {

            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));

        }

    }

    $("#education").append(HTMLonlineClasses);

    for (var k = 0; k < education.onlineCourses.length; k++) {

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));

    }

};

function inName(string) {

    var stringArray = string.trim().split(" ");
    var first = stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1).toLowerCase();
    var second = stringArray[1].toUpperCase();

    var inter = first + " " + second;

    return inter;

}

work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);