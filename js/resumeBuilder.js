
var bio = {
    name: "John Doe",
    role: "Front-End Ninja",
    contacts: {
        mobile: "(555) 555-5555",
        email: "johndoe@gmail.com",
        github: "johndoe",
        twitter: "@johndoe",
        location: "Jackson, TN"
    },
    welcomeMessage: "I am John Doe!",
    skills: ["HTML", "CSS", "JavaScript", "Web Development"],
    bioPic: "images/fry.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var fmtBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        var fmtWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        function displayContactInfo(obj) {
            var fmtMobile = HTMLmobile.replace("%data%", obj.contacts.mobile);
            var fmtEmail = HTMLemail.replace("%data%", obj.contacts.email);
            var fmtGitHub = HTMLgithub.replace("%data%", obj.contacts.github);
            var fmtTwitter = HTMLtwitter.replace("%data%", obj.contacts.twitter);
            var fmtLocation = HTMLlocation.replace("%data%", obj.contacts.location);
            var fmtFinal = fmtMobile + fmtEmail + fmtGitHub + fmtTwitter + fmtLocation;

            $("#topContacts").append(fmtFinal);
            $("#footerContacts").append(fmtFinal);
        }

        function displaySkills(obj) {
            var numSkills = obj.skills.length;
            var skillIndex;

            var skillStart = $("#header").append(HTMLskillsStart);
            skillStart.css("list-style-type", "none");

            for (skillIndex = 0; skillIndex < numSkills; skillIndex++) {
                skillStart.append(HTMLskills.replace("%data%", obj.skills[skillIndex]));
            }
        }

        $("#topContacts").before(formattedName);
        $("#topContacts").before(formattedRole);

        displayContactInfo(this);

        $("#header").append(fmtBioPic);
        $("#header").append(fmtWelcomeMsg);

        displaySkills(this);
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
            "date": 2014,
            "url": "https://www.coursera.com"
        },
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2015,
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

        var numSchools = this.schools.length;
        var schoolIndex;
        var school = null;
        var numOnlineSchools = this.onlineCourses.length;
        var onlineSchoolIndex;
        var onlineSchool = null;

        for (schoolIndex = 0; schoolIndex < numSchools; schoolIndex++) {
            school = this.schools[schoolIndex];
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
            fmtOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.date);
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
            "location": "Jackson, TN",
            "dates": "June 2013-Present",
            "description": "Computer Administration, Grant Systems, Nightwatchman"
        },
        {
            "employer": "Rockstar Games",
            "title": "Generalist Engineer",
            "location": "Andover, MA",
            "dates": "December 2007-May 2009",
            "description": "Professional Slave to anything and everything!"
        }
    ],
    display: function () {
        var numJobs = this.jobs.length;
        var jobIndex;
        var job = null;

        var fmtEmployer = "";
        var fmtTitle = "";
        var fmtLocation = "";
        var fmtDates = "";
        var fmtDescription = "";
        var fmtFinal = "";

        for (jobIndex = 0; jobIndex < numJobs; jobIndex++) {
            job = this.jobs[jobIndex];
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
        $("#mapDiv").append(this.map);
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