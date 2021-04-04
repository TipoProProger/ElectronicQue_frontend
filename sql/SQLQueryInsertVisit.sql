USE [test_db]
GO

INSERT INTO [dbo].[visits]
           ([visit_id]
           ,[citizen_id]
           ,[visit_date]
           ,[personal_specialization_code]
           ,[visit_time]
           ,[visit_success]
           ,[visit_absence]
           ,[visit_by_doctor])
     VALUES
           (3, 1, convert(smalldatetime, '20210325 20:20:00'), 101, '12:00', 0, 0, 0);
GO


