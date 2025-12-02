<?php
SELECT Title,'Total VacationHours' = VacationHours,     
'Total SickLeaveHours' = SickLeaveHours 	  
FROM HumanResources.Employee 	        
WHERE Title IN ('Recruiter', 'Stocker') 	 
ORDER BY Title, VacationHours, SickLeaveHours
compute SUM(VacationHours), SUM(SickLeaveHours)