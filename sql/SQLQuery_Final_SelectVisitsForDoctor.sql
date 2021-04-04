select citizens.citizen_name_1, citizens.citizen_name_2, citizens.citizen_name_3, visits.citizen_id, visits.visit_date, visits.visit_time
from visits
left join citizens ON (visits.citizen_id = citizens.citizen_id)
where visits.personal_specialization_code IN (
	select personal_specializations.personal_specialization_code
	from personal_specializations
	where personal_specialization_id = 1
);