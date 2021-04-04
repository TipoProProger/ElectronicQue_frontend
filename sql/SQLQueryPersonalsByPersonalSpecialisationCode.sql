select personals.personal_code, personals.personal_id
from personals
where personals.personal_id = (
	select personal_specializations.personal_id
	from personal_specializations
	where personal_specialization_code = 903
);