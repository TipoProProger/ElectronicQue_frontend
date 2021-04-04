select visits.citizen_id
from visits
where visits.personal_specialization_code IN (
	select personal_specializations.personal_specialization_code
	from personal_specializations
	where personal_specializations.personal_specializations_id = 508
		OR personal_specializations.personal_id = 277)
	and visit_date > convert(smalldatetime, '20210101 00:00:00');