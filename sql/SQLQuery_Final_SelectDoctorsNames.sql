select citizen_name_1, citizen_name_2, citizen_name_3, specialization_name
from citizens
right join personals ON (citizens.citizen_id = personals.citizen_id)
left join personal_specializations ON (personals.personal_id = personal_specializations.personal_id)
left join specializations ON (specializations.specialization_id = personal_specializations.specialization_id)