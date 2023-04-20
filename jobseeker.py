def jobseeker(graduates, companies):
    # create a dictionary of graduates' qualifications
    qualifications = {}
    for grad in graduates:
        grad_name = list(grad.keys())[0]
        grad_qualifications = list(grad.values())[0]
        qualifications[grad_name] = grad_qualifications
    
    # create a dictionary of qualified companies for each graduate
    grad_matches = {}
    for grad_name, grad_qualifications in qualifications.items():
        matches = []
        for company in companies:
            company_name = list(company.keys())[0]
            company_data = list(company.values())[0]
            company_qualifications = company_data['Job Qualifications']
            is_match = True
            for qualification, experience in company_qualifications.items():
                if qualification not in grad_qualifications or grad_qualifications[qualification] < experience:
                    is_match = False
                    break
            if is_match:
                matches.append(f"{company_data['Job Title']} ({company_name})")
        grad_matches[grad_name] = matches
    
    return grad_matches
