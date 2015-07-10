
var bio = {
    name: "Rusty Rountree",
    role: "Front End Ninja",
    contacts: {
        mobile: "(731) 313-7721",
        email: "rustonrountree@gmail.com",
        github: "rwrountree",
        twitter: "@rusty_rountree",
        location: "Jackson, TN"
    },
    welcomeMessage: "I am Rusty and I am AWESOME!",
    skills: ["C/C++", "Java", "JavaScript", "OOP", "Web Development"],
    bioPic: "images/fry.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var fmtBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var fmtWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        function displayContactInfo() {
            var fmtMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var fmtEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var fmtGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
            var fmtTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var fmtLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            var fmtFinal = fmtMobile + fmtEmail + fmtGitHub + fmtTwitter + fmtLocation;

            $("#topContacts").append(fmtFinal);
            $("#footerContacts").append(fmtFinal);
        }

        function displaySkills() {
            var numSkills = bio.skills.length;
            var skillIndex;

            var skillStart = $("#header").append(HTMLskillsStart);
            skillStart.css("list-style-type", "none");

            for (skillIndex = 0; skillIndex < numSkills; skillIndex++) {
                skillStart.append(HTMLskills.replace("%data%", bio.skills[skillIndex]));
            }
        }

        $("#topContacts").before(formattedName);
        $("#topContacts").before(formattedRole);

        displayContactInfo();

        $("#header").append(fmtBioPic);
        $("#header").append(fmtWelcomeMsg);

        displaySkills();
    }
};

var education = {
    "schools": [
        {
            "name": "Millsaps College",
            "location": "Jackson, MS",
            "degree": "BS",
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
    ],
    display: function () {
        $("#education").append(HTMLschoolStart);
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineClassStart);

        var fmtSchoolName = "";
        var fmtSchoolDegree = "";
        var fmtSchoolDates = "";
        var fmtSchoolLocation = "";
        var fmtSchoolMajor = "";

        var fmtOnlineTitle = "";
        var fmtOnlineSchool = "";
        var fmtOnlineDates = "";
        var fmtOnlineURL = "";

        var fmtFinal = "";

        var numSchools = education.schools.length;
        var schoolIndex;
        var school = null;
        var numOnlineSchools = education.onlineCourses.length;
        var onlineSchoolIndex;
        var onlineSchool = null;

        for (schoolIndex = 0; schoolIndex < numSchools; schoolIndex++) {
            school = education.schools[schoolIndex];
            fmtSchoolName = HTMLschoolName.replace("%data%", school.name);
            fmtSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            fmtSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            fmtSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            fmtSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            fmtFinal = fmtSchoolName + fmtSchoolDegree + fmtSchoolDates + fmtSchoolLocation + fmtSchoolMajor;
            $(".education-entry:last").append(fmtFinal);
        }

        for (onlineSchoolIndex = 0; onlineSchoolIndex < numOnlineSchools; onlineSchoolIndex++) {
            onlineSchool = education.onlineCourses[onlineSchoolIndex];
            fmtOnlineTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title);
            fmtOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool.school);
            fmtOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates);
            fmtOnlineURL = HTMLonlineURL.replace("%data%", onlineSchool.url);
            fmtFinal = fmtOnlineTitle + fmtOnlineSchool + fmtOnlineDates + fmtOnlineURL;
            $(".online-class-entry:last").append(fmtFinal);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "JACOA",
            "title": "Supportive Services",
            "dates": "June 2013-Present",
            "description": "Computer Administration, Grant Systems, Nightwatchman",
            "location": "Jackson, TN"
        },
        {
            "employer": "Rockstar Games",
            "title": "Generalist Engineer",
            "dates": "December 2007-May 2009",
            "description": "Professional Slave to anything and everything!",
            "location": "Andover, MA"
        }
    ],
    display: function () {
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
    }
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
    ],
    display: function () {
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
    }
};

var workedAndLivedMap = {
    map: googleMap,
    display: function () {
        $("#mapDiv").append(googleMap);
    }
};

var myResume = {
    display: function () {
        bio.display();
        work.display();
        projects.display();
        education.display();
        workedAndLivedMap.display();
    }
};

myResume.display();

