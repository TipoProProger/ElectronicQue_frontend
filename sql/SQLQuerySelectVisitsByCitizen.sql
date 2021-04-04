select visits.visit_id, visits.visit_date, visits.personal_specialization_code, visits.personal_specialization_code2, visits.personal_specialization_code3, visits.personal_specialization_code4, visits.personal_specialization_code5, visits.personal_specialization_code6, visits.personal_specialization_code7, visits.personal_specialization_code8
from visits
where visits.citizen_id IN (
	select citizens.citizen_id
	from citizens
	where citizens.citizen_name_1 = '' and citizens.citizen_name_2 = ''
	);