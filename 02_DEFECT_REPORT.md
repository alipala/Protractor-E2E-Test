# DEFECT REPORT

## DEFECT_01: Publisher field cannot be updated after saving the changes
	* Repro Steps:
	  1. Select 'if on a Winter's Night a Traveler book
	  2. Goto Publisher field
	  3. Try to update by typing special characters with "!'^+%&/()=?_-Myriad Editions"
	  4. Try to save the changes
	* Expected Result: 
	  Publisher field should be updated properly
	* Actual Result: 
	  Publisher field cannot be updated after saving the changes
	* Note: 
	  Please see the test result output and screenshots in directory "e2e\reports\dashboardReport"

## DEFECT_02: All the corresponding area of the books should be mandatory
	* Repro Steps:
	  1. Select "giovanni's room" book from the list
	  2. Delete all the mandatory fields and left empty Title, Author, Publisher, Year of publishing
	  3. Try to save the changes
	* Expected Result: 
	  Changes should not be applied since all fields are mandatory
	* Actual Result: 
	  Changes saved successfully although an error appears.
	* Note: 
	  Please see the video in directory "e2e\mandatory_fields_empty_problem.exe"
	  
## DEFECT_03: Book area list line does not cover al books. It covers only 5 books
	* Repro Steps:
	  1. Goto book list 
	  2. See the book area list line 
	* Expected Result: 
	  Book list area line should be cover all the books
	* Actual Result: 
	  Book list area line does not cover all the books
	* Note: 
	  Please see the test result output and screenshots in directory "e2e\reports\dashboardReport\book_area_line_problem.PNG"

## CHANGEREQ_01: Save button should not be active
	* If any mandatory areas are left empy, Save button should be inactive in order to prevent to submit