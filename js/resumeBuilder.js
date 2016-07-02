var work = {
	"jobs" : [
	{
		"employer" : "University of Central Florida",
		"title" : "Peer Tutor",
		"location" : "Orlando, FL",
		"datesWorked" : "January 2015 - Present",
		"description" : "- Attended workshops monthly to enhance acquired tutoring skills and learn new techniques.<br>- Provided effective study skills for students in a series of weekly study sessions.<br>- Established connections between abstract concepts and concrete real-world applications.<br>- Networked with other students and tutors daily to build rapport and to gain insight on different tutoring techniques."
	},
	{
		"employer" : "University of Central Florida",
		"title" : "Undergraduate Teaching Assistant",
		"location" : "Orlando, FL",
		"datesWorked" : "January 2016 - May 2016",
		"description" : "- Met with the course professor weekly to discuss upcoming course material and class agenda.<br>- Assisted students with programming questions and concerns.<br>- Provided rapid feedback on assignment submissions to clarify pitfalls and ambiguities.<br>- Attended the course lecture to assist with the distribution of course material"
	},
	{
		"employer" : "University of Central Florida",
		"title" : "Supplemental Instruction Leader",
		"location" : "Orlando, FL",
		"datesWorked" : "January 2015 - June 2015",
		"description" : "- Attended weekly meetings to discuss responsibilities and SI events.<br>- Attended lecture twice a week to be kept up to date on course material.<br>- Hosted four SI sessions per week to provide assistance with course material for students.<br>- Met with the lecture professor weekly to gain input on student tendencies."
	},
	{
		"employer" : "Palm Beach State College",
		"title" : " OPS Professional",
		"location" : "Lake Worth, FL",
		"datesWorked" : "August 2013 - June 2014",
		"description" : "- Obtained College Reading and Learning Association (CRLA) Level III tutor certification.<br>- Scheduled appointments with students to receive help from tutors.<br>- Served as an ambassador to inform the college community about tutoring benefits.<br>- Responsible for upholding the goals and standards of the college and being a role model for students"
	}
	]
}

var projects = {
	"project" : [
	{
		"title" : "College Event Website",
		"datesWorked" : "May 2016 - Present",
		"description" : "A website that allows users to view/create events pertaining to the college/university of the student(s).<br>Login and authentication enforced by Joomla to provide users with the proper ability to view and create events. Database created by MySQL Workbench to store and manage information regarding the access level of users, the events, and the participating universities. PHP and JavaScript used for providing users with a dynamic, on-the-spot updating, user experience.",
		"images" : [
		
		]
	},
	{
		"title" : "Boggle",
		"datesWorked" : "May 2015 - August 2015",
		"description" : "An application that models the popular board game Boggle using Java.<br>The application features a graphical user interface which shows the board of sixteen dice, a panel that shows the words that user has found, a timer to keep track of the time remaining, and a panel that shows the current word being constructed among the various other features of the application.",
		"images" : [
		
		]
	}
	]
}

skill = ["HTML", "CSS", "JavaScript", "C", "Java", "Tutoring", "Music Performace"];

var bio = {
	"name" : "Ruben Vazquez",
	"role" : "Front-End Web Developer",
	"welcomeMessage" : "Welcome to my online resume page!",
	"contacts" : {
		"mobile" : "",
		"email" : "vazquezr@knights.ucf.edu",
		"github" : "vazquezjr",
		"twitter" : "",
		"location" : "Orlando, FL"
	},
	"skills" : skill
}

var education = {
	"schools" : [
	{
		"name" : "University of Central Florida",
		"location" : "Orlando, FL",
		"degree" : "Bachelor's in Science",
		"majors" : [
			"Computer Engineering"
		],
		"datesAttended" : "August 2014 - May 2017",
		"url" : "ucf.edu"
	},
	{
		"name" : "Palm Beach State College",
		"location" : "Lake Worth, FL",
		"degree" : "Associate in Arts",
		"majors" : [
			"Computer Engineering"
		],
		"datesAttended" : "August 2010 - May 2014",
		"url" : "palmbeachstate.edu"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Front-End Web Developer",
		"school" : "Udacity",
		"dates" : "June 2016 - September 2016",
		"url" : "udacity.com"
	}
	]
}

if (bio.skills.length > 0) {
	
	HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(HTMLheaderName);
	$("#header").append(HTMLskillsStart);
	
	var strToRep;
	
	for (var i = 0; i < bio.skills.length; i++) {
		strToRep = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(strToRep);
	}
}

function displayWork() {

	var workStartString;
	var workEmployerString;
	var workTitleString;
	var workDatesString;
	var workLocationString;
	var workDescriptionString;

	for (var job in work.jobs) {
		
		$("#workExperience").append(HTMLworkStart);
		workEmployerString = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		workTitleString = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		workLocationString = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		workDatesString = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
		workDescriptionString = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(workEmployerString + workTitleString);
		$(".work-entry:last").append(workLocationString);
		$(".work-entry:last").append(workDatesString);
		$(".work-entry:last").append(workDescriptionString);
		
	}
}

displayWork();

$("#main").append(internationalizeButton);

function inName(string) {
	
	var stringArray = string.trim().split(" ");
	var first = stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1).toLowerCase();
	var second = stringArray[1].toUpperCase();
	
	var inter = first + " " + second;
	
	return inter;
	
}