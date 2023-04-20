function jobseeker(graduates, companies) {
    for (const [key, value] of Object.entries(graduates)) {
        // console.log(Object.keys(value));
        for(const [id, info] of Object.entries(value)){
            console.log(id, info)
        }
    }
    // for (const [key, value] of Object.entries(companies)) {
    //     console.log(value);
    // }
}

const companies = [
    {
        "Stacktrek": {
            "Job Title": "Business Analyst",
            "Job Qualifications": {
                "College Degree": 1,
                "Process Modelling": 1,
            },
            "Salary": 23000,
        },
    },
    {
        "Stacktrek": {
            "Job Title": "Part-time Content Creator",
            "Job Qualifications": {
                "College Degree": 0,
                "Java": 0,
                "PHP": 0,
                "Python": 0,
                "Javascript": 0,
                "C#": 0,
            },
            "Salary": 8000,
        },
    },
    {
        "Stacktrek": {
            "Job Title": "Backend Developer",
            "Job Qualifications": {
                "College Degree": 0,
                "NodeJS": 2,
                "Elixir": 1,
                "Javascript": 2,
            },
            "Salary": 28000,
        },
    },
    {
        "Stacktrek": {
            "Job Title": "Frontend Developer",
            "Job Qualifications": {
                "College Degree": 0,
                "Vue": 0,
                "React": 2,
                "Javascript": 2
            },
            "Salary": 25000,
        },
    },
    {
        "RM Coo Inc.": {
            "Job Title": "Senior Frontend Developer",
            "Job Qualifications": {
                "College Degree": 1,
                "Vue": 2,
                "React": 2,
                "Javascript": 3
            },
            "Salary": 32000,
        },
    },
];

const graduates = [
    {
        "Anika Durban": {
            "College Degree": 1,
            "Javascript": 2,
            "Elixir": 1,
            "NodeJS": 3,
            "React": 3,
            "Vue": 3,
        },
    },
    { "Sach Tugbang": { "College Degree": 1, "Process Modelling": 1 } },
    {
        "Marie Koo": {
            "Process Modelling": 1,
            "College Degree": 1,
            "Javascript": 3,
            "Elixir": 0,
            "NodeJS": 3,
            "React": 3,
            "Vue": 3,
        }
    },
];

const result = jobseeker(graduates, companies);
