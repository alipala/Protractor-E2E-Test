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
	  
## DEFECT_02: Book area list line does not cover al books. It covers only 5 books
	* Repro Steps:
	  1. Goto book list 
	  2. See the book area list line 
	* Expected Result: 
	  Book list area line should be cover all the books
	* Actual Result: 
	  Book list area line does not cover all the books
	* Note: 
	  Please see the test result output and screenshots in directory "e2e\reports\dashboardReport\book_area_line_problem.PNG"

## CHANGEREQ_01: 