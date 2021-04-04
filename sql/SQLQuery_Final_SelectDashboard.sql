select citizens.citizen_id, A.citizen_name_1, A.citizen_name_2, A.citizen_name_3, room_personal_specialization.room_number
from visits
right join visit_status ON (visits.visit_id = visit_status.visit_id)
left join citizens ON (visits.citizen_id = citizens.citizen_id)
left join personal_specializations as P ON (visits.personal_specialization_code = P.personal_specialization_code)
left join personals ON (P.personal_id = personals.personal_id)
left join citizens as A ON (personals.citizen_id = A.citizen_id)
left join room_personal_specialization ON (room_personal_specialization.personal_specialization_id = P.personal_specialization_id)