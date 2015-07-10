//var my_name = "Rusty Rountree";
//var my_role = "Front End Ninja";

var my_name = "Rusty Rountree";
var formattedName = HTMLheaderName.replace("%data%", my_name);
$("#header").append(formattedName);

var my_role = "Front End Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", my_role);
$("#header").append(formattedRole);

var bio = {
    name: "Rusty Rountree",
    role: "Front End Ninja",
    contacts: {
        email: "rustonrountree@gmail.com",
        mobile: "(731) 313-7721",
        twitter: "@rusty_rountree",
        github: "rwrountree",
        location: "Jackson, TN"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "I am Rusty and I am AWESOME!",
    skills: ["C/C++", "Java", "JavaScript", "OOP", "Web Development"]
};

var education = {
    "schools": [
        {
            "name": "Millsaps College",
            "city": "Jackson, MS",
            "degree": "Bachelor's",
            "majors": "Computer Science",
            "dates": 2000,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Programming Mobile Applications for Android Handheld Systems",
            "school": "Coursera",
            "dates": 2014,
            "url": "https://www.coursera.com"
        },
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "JACOA",
            "title": "Supportive Services",
            "dates": "June 2013-Present",
            "description": "Computer Administration, Grant Systems, Nightwatchman"
        },
        {
            "employer": "Rockstar Games",
            "title": "Generalist Engineer",
            "dates": "December 2007-May 2009",
            "description": "Professional Slave to anything and everything!"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Project 0",
            "dates": 2013,
            "description": "Lots of stuff!",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        },
        {
            "title": "Project 1",
            "dates": 2014,
            "description": "Lots of stuff!",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        },
        {
            "title": "Project 2",
            "dates": 2015,
            "description": "Lots of stuff!",
            "images": [
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }
    ]
};

projects.display = function () {
    var numProjects = this.projects.length;
    var projectIndex;
    var project = null;

    var fmtTitle = "";
    var fmtDates = "";
    var fmtDescription = "";
    var numImages = -1;
    var imageIndex;
    var fmtImage = "";

    var fmtFinal = "";

    for (projectIndex = 0; projectIndex < numProjects; projectIndex++) {
        project = this.projects[projectIndex];
        fmtTitle = HTMLprojectTitle.replace("%data%", project.title);
        fmtDates = HTMLprojectDates.replace("%data%", project.dates);
        fmtDescription = HTMLprojectDescription.replace("%data%", project.description);

        fmtImage = "";
        numImages = project.images.length;
        for (imageIndex = 0; imageIndex < numImages; imageIndex++) {
            fmtImage += HTMLprojectImage.replace("%data%", project.images[imageIndex]);
        }

        fmtFinal = fmtTitle + fmtDates + fmtDescription + fmtImage;
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(fmtFinal);
    }
};

var displaySkills = function () {
    var numSkills = bio.skills.length;
    var skillIndex;

    $("#header").append(HTMLskillsStart);
    for (skillIndex = 0; skillIndex < numSkills; skillIndex++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skillIndex]));
    }
};

var displayWork = function () {
    var numJobs = work.jobs.length;
    var jobIndex;
    var job = null;

    var fmtEmployer = "";
    var fmtTitle = "";
    var fmtLocation = "";
    var fmtDates = "";
    var fmtDescription = "";
    var fmtFinal = "";

    for (jobIndex = 0; jobIndex < numJobs; jobIndex++) {
        job = work.jobs[jobIndex];
        fmtEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        fmtTitle = HTMLworkTitle.replace("%data%", job.title);
        fmtLocation = HTMLworkLocation.replace("%data%", job.location);
        fmtDates = HTMLworkDates.replace("%data%", job.dates);
        fmtDescription = HTMLworkDescription.replace("%data%", job.description);
        fmtFinal = fmtEmployer + fmtTitle + fmtLocation + fmtDates + fmtDescription;
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(fmtFinal);
    }
};

displaySkills();
displayWork();
projects.display();

$("#mapDiv").append(googleMap);
